import { Role } from "@prisma/client";
import { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            role: Role;
            email: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: number;
        role: Role;
        fullName: string;
        email: string;
        password: string;
        phone?: string;
        cityId: number;
        provider: string;
        providerId?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string;
        role: Role;
    }
}
