import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiProviderModuleBase } from "./base/aiProvider.module.base";
import { AiProviderService } from "./aiProvider.service";
import { AiProviderController } from "./aiProvider.controller";
import { AiProviderResolver } from "./aiProvider.resolver";

@Module({
  imports: [AiProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiProviderController],
  providers: [AiProviderService, AiProviderResolver],
  exports: [AiProviderService],
})
export class AiProviderModule {}
