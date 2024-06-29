import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TurnTablePositionService } from "./turnTablePosition.service";
import { TurnTablePositionControllerBase } from "./base/turnTablePosition.controller.base";

@swagger.ApiTags("turnTablePositions")
@common.Controller("turnTablePositions")
export class TurnTablePositionController extends TurnTablePositionControllerBase {
  constructor(protected readonly service: TurnTablePositionService) {
    super(service);
  }
}
