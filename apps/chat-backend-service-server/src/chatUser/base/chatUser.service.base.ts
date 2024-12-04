/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ChatUser as PrismaChatUser } from "@prisma/client";

export class ChatUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChatUserCountArgs, "select">): Promise<number> {
    return this.prisma.chatUser.count(args);
  }

  async chatUsers(
    args: Prisma.ChatUserFindManyArgs
  ): Promise<PrismaChatUser[]> {
    return this.prisma.chatUser.findMany(args);
  }
  async chatUser(
    args: Prisma.ChatUserFindUniqueArgs
  ): Promise<PrismaChatUser | null> {
    return this.prisma.chatUser.findUnique(args);
  }
  async createChatUser(
    args: Prisma.ChatUserCreateArgs
  ): Promise<PrismaChatUser> {
    return this.prisma.chatUser.create(args);
  }
  async updateChatUser(
    args: Prisma.ChatUserUpdateArgs
  ): Promise<PrismaChatUser> {
    return this.prisma.chatUser.update(args);
  }
  async deleteChatUser(
    args: Prisma.ChatUserDeleteArgs
  ): Promise<PrismaChatUser> {
    return this.prisma.chatUser.delete(args);
  }
}
