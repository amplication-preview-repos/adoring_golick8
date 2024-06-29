import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestOptionServiceBase } from "./base/testOption.service.base";

@Injectable()
export class TestOptionService extends TestOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
