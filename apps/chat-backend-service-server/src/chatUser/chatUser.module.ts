import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatUserModuleBase } from "./base/chatUser.module.base";
import { ChatUserService } from "./chatUser.service";
import { ChatUserController } from "./chatUser.controller";
import { ChatUserResolver } from "./chatUser.resolver";

@Module({
  imports: [ChatUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatUserController],
  providers: [ChatUserService, ChatUserResolver],
  exports: [ChatUserService],
})
export class ChatUserModule {}
