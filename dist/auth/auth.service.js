"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    login() {
        console.log("hello");
    }
    signup(authDto) {
        const hashPromise = argon.hash(authDto.password);
        return hashPromise
            .then(hash => this.prisma.user.create({
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
    async signin(authDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: authDto.email
            }
        });
        if (!user)
            throw new common_1.ForbiddenException('Credential incorrect');
        const passMatches = await argon.verify(user.hash, authDto.password);
        if (!passMatches)
            throw new common_1.ForbiddenException('Credential incorrect');
        delete user.hash;
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map