import * as graphql from "@nestjs/graphql";
import { TestOptionResolverBase } from "./base/testOption.resolver.base";
import { TestOption } from "./base/TestOption";
import { TestOptionService } from "./testOption.service";

@graphql.Resolver(() => TestOption)
export class TestOptionResolver extends TestOptionResolverBase {
  constructor(protected readonly service: TestOptionService) {
    super(service);
  }
}
