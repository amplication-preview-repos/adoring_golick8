import { Module } from "@nestjs/common";
import { OutputFilenameModuleBase } from "./base/outputFilename.module.base";
import { OutputFilenameService } from "./outputFilename.service";
import { OutputFilenameController } from "./outputFilename.controller";
import { OutputFilenameResolver } from "./outputFilename.resolver";

@Module({
  imports: [OutputFilenameModuleBase],
  controllers: [OutputFilenameController],
  providers: [OutputFilenameService, OutputFilenameResolver],
  exports: [OutputFilenameService],
})
export class OutputFilenameModule {}
