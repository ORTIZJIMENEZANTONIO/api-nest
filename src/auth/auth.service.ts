import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2'

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {

  }
   
  login() {
    console.log("hello");
  }

  signup( authDto: AuthDto ) {
    const hashPromise = argon.hash(authDto.password);
    return hashPromise
      .then( hash => this.prisma.user.create({
            data: {
              hash,
              email: authDto.email
            },
        }))
      .then(result => result)
      .catch(err => err)

  }

  signin() {
    return { msg: 'im sign in'}
  }
}