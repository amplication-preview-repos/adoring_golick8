import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeasurementsServiceBase } from "./base/measurements.service.base";

@Injectable()
export class MeasurementsService extends MeasurementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
