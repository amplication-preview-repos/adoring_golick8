import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeasurementsService } from "./measurements.service";
import { MeasurementsControllerBase } from "./base/measurements.controller.base";

@swagger.ApiTags("measurements")
@common.Controller("measurements")
export class MeasurementsController extends MeasurementsControllerBase {
  constructor(protected readonly service: MeasurementsService) {
    super(service);
  }
}
