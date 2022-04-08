import { Body, Controller, Post } from "@nestjs/common";
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
    
    //const user = new Us
    console.log( "hello world" );
    return this.authService.signup( );
  }
}