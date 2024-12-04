import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiProviderService } from "./aiProvider.service";
import { AiProviderControllerBase } from "./base/aiProvider.controller.base";

@swagger.ApiTags("aiProviders")
@common.Controller("aiProviders")
export class AiProviderController extends AiProviderControllerBase {
  constructor(
    protected readonly service: AiProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
