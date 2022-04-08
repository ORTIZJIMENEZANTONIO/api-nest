import { Injectable } from '@nestjs/common';


@Injectable({})
export class AuthService {
  login() {
    console.log("gello");
  }

  signup() {
    return { msg: 'im signup'}
  }

  signin() {
    return { msg: 'im signin'}
  }
}