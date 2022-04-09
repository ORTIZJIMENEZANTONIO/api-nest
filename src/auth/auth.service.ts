import { ForbiddenException, Injectable } from '@nestjs/common';
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
            select: {
              id: true,
              email: true,
              createdAt: true
            }
        }))
      .then(result => result)
      .catch(err => err);
  }

  
  async signin( authDto: AuthDto ) {

    const user = await this.prisma.user.findUnique( {
        where: {
          email: authDto.email
        }
    } )

    if(!user) throw new ForbiddenException( 'Credential incorrect' )

    const passMatches = await argon.verify(  user.hash, authDto.password ) ;

    if(!passMatches) throw new ForbiddenException( 'Credential incorrect' )

    delete user.hash;

    return user
  }
}