import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(): void;
    signup(authDto: AuthDto): Promise<any>;
    signin(authDto: AuthDto): Promise<import(".prisma/client").User>;
}
