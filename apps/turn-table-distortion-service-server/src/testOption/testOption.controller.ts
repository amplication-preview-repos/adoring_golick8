import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestOptionService } from "./testOption.service";
import { TestOptionControllerBase } from "./base/testOption.controller.base";

@swagger.ApiTags("testOptions")
@common.Controller("testOptions")
export class TestOptionController extends TestOptionControllerBase {
  constructor(protected readonly service: TestOptionService) {
    super(service);
  }
}
