import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutputFilenameService } from "./outputFilename.service";
import { OutputFilenameControllerBase } from "./base/outputFilename.controller.base";

@swagger.ApiTags("outputFilenames")
@common.Controller("outputFilenames")
export class OutputFilenameController extends OutputFilenameControllerBase {
  constructor(protected readonly service: OutputFilenameService) {
    super(service);
  }
}
