import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { Role } from "@prisma/client";
import { prisma } from "prisma/prisma-client";
import { compare, hashSync } from "bcryptjs";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    fullName: profile.name || "Default Full Name",
                    password: "default_password",
                    cityId: 1,
                    role: "INVESTOR" as Role,
                    provider: "github",
                };
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const values = {
                    email: credentials.email,
                };

                const findUser = await prisma.user.findFirst({
                    where: values,
                });

                if (!findUser) return null;

                const isValidPassword = await compare(credentials.password, findUser.password);

                if (!isValidPassword) return null;

                return {
                    id: findUser.id,
                    email: findUser.email,
                    fullName: findUser.fullName,
                    password: findUser.password,
                    cityId: findUser.cityId,
                    role: findUser.role,
                    provider: findUser.provider || "credentials",
                };
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (account?.provider === "credentials") {
                    return true;
                }

                if (!user.email) {
                    return false;
                }

                const findUser = await prisma.user.findFirst({
                    where: {
                        OR: [
                            { provider: account?.provider, providerId: account?.providerAccountId },
                            { email: user.email },
                        ],
                    },
                });

                if (findUser) {
                    if (!findUser.providerId) {
                        await prisma.user.update({
                            where: { id: findUser.id },
                            data: {
                                provider: account?.provider,
                                providerId: account?.providerAccountId,
                            },
                        });
                    }
                    return true;
                }

                await prisma.user.create({
                    data: {
                        email: user.email,
                        fullName: user.name || `User-${Math.random().toString(36).substring(2, 8)}`,
                        password: hashSync(user.email, 10),
                        provider: account?.provider,
                        providerId: account?.providerAccountId,
                        role: "INVESTOR",
                        cityId: 1,
                        phone: null,
                    },
                });

                return true;
            } catch (error) {
                console.error("Error in signIn callback:", error);
                return false;
            }
        },
        async jwt({ token }) {
            if (!token.email) return token;

            const findUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            });

            if (findUser) {
                token.id = String(findUser.id);
                token.email = findUser.email;
                token.fullName = findUser.fullName;
                token.role = findUser.role;
            }

            return token;
        },

        session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }

            return session;
        },
    },
};
