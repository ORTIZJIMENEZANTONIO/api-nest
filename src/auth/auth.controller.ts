import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Post('signup')
  signup(@Body() authDto: AuthDto ) {
    return this.authService.signup( authDto );
  }
}