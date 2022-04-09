import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin(authDto: AuthDto): Promise<import(".prisma/client").User>;
    signup(authDto: AuthDto): Promise<any>;
}
