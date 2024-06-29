import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CentroidDataService } from "./centroidData.service";
import { CentroidDataControllerBase } from "./base/centroidData.controller.base";

@swagger.ApiTags("centroidData")
@common.Controller("centroidData")
export class CentroidDataController extends CentroidDataControllerBase {
  constructor(protected readonly service: CentroidDataService) {
    super(service);
  }
}
