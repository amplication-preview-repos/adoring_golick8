import { Module } from "@nestjs/common";
import { TestOptionModuleBase } from "./base/testOption.module.base";
import { TestOptionService } from "./testOption.service";
import { TestOptionController } from "./testOption.controller";
import { TestOptionResolver } from "./testOption.resolver";

@Module({
  imports: [TestOptionModuleBase],
  controllers: [TestOptionController],
  providers: [TestOptionService, TestOptionResolver],
  exports: [TestOptionService],
})
export class TestOptionModule {}
