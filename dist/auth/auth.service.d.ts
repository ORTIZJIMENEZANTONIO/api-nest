import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(): void;
    signup(): {
        msg: string;
    };
    signin(): {
        msg: string;
    };
}
