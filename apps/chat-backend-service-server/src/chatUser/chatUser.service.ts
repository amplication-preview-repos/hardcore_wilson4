import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatUserServiceBase } from "./base/chatUser.service.base";

@Injectable()
export class ChatUserService extends ChatUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
