import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin(): {
        msg: string;
    };
    signup(authDto: AuthDto): {
        msg: string;
    };
}
