import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TurnTablePositionServiceBase } from "./base/turnTablePosition.service.base";

@Injectable()
export class TurnTablePositionService extends TurnTablePositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
