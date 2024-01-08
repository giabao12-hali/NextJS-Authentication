import { PrismaClient } from "@prisma/client";

// CSDL Prisma

// khai báo
declare global {
    var prisma: PrismaClient | undefined;
}

// export đối tượng
export const db = globalThis.prisma || new PrismaClient();

// gán đối tượng
if (process.env.NODE_ENV === "production") globalThis.prisma = db;

