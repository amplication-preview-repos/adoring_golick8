import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CentroidDataServiceBase } from "./base/centroidData.service.base";

@Injectable()
export class CentroidDataService extends CentroidDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
