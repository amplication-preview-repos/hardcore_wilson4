import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiProviderServiceBase } from "./base/aiProvider.service.base";

@Injectable()
export class AiProviderService extends AiProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
