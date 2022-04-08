import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {

  }
   
  login() {
    console.log("gello");
  }

  signup() {
    return { msg: 'im sign up'}
  }

  signin() {
    return { msg: 'im sign in'}
  }
}