import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutputFilenameServiceBase } from "./base/outputFilename.service.base";

@Injectable()
export class OutputFilenameService extends OutputFilenameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
