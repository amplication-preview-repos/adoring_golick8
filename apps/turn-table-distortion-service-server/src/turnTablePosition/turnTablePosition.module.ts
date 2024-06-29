import { Module } from "@nestjs/common";
import { TurnTablePositionModuleBase } from "./base/turnTablePosition.module.base";
import { TurnTablePositionService } from "./turnTablePosition.service";
import { TurnTablePositionController } from "./turnTablePosition.controller";
import { TurnTablePositionResolver } from "./turnTablePosition.resolver";

@Module({
  imports: [TurnTablePositionModuleBase],
  controllers: [TurnTablePositionController],
  providers: [TurnTablePositionService, TurnTablePositionResolver],
  exports: [TurnTablePositionService],
})
export class TurnTablePositionModule {}
