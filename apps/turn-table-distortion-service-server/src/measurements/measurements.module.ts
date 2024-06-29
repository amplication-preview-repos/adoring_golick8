import { Module } from "@nestjs/common";
import { MeasurementsModuleBase } from "./base/measurements.module.base";
import { MeasurementsService } from "./measurements.service";
import { MeasurementsController } from "./measurements.controller";
import { MeasurementsResolver } from "./measurements.resolver";

@Module({
  imports: [MeasurementsModuleBase],
  controllers: [MeasurementsController],
  providers: [MeasurementsService, MeasurementsResolver],
  exports: [MeasurementsService],
})
export class MeasurementsModule {}
