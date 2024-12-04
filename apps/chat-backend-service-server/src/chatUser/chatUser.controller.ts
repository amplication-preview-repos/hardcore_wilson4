import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatUserService } from "./chatUser.service";
import { ChatUserControllerBase } from "./base/chatUser.controller.base";

@swagger.ApiTags("chatUsers")
@common.Controller("chatUsers")
export class ChatUserController extends ChatUserControllerBase {
  constructor(
    protected readonly service: ChatUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
