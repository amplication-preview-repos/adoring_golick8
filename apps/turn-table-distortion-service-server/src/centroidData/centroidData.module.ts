import { Module } from "@nestjs/common";
import { CentroidDataModuleBase } from "./base/centroidData.module.base";
import { CentroidDataService } from "./centroidData.service";
import { CentroidDataController } from "./centroidData.controller";
import { CentroidDataResolver } from "./centroidData.resolver";

@Module({
  imports: [CentroidDataModuleBase],
  controllers: [CentroidDataController],
  providers: [CentroidDataService, CentroidDataResolver],
  exports: [CentroidDataService],
})
export class CentroidDataModule {}
