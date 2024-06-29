import * as graphql from "@nestjs/graphql";
import { TurnTablePositionResolverBase } from "./base/turnTablePosition.resolver.base";
import { TurnTablePosition } from "./base/TurnTablePosition";
import { TurnTablePositionService } from "./turnTablePosition.service";

@graphql.Resolver(() => TurnTablePosition)
export class TurnTablePositionResolver extends TurnTablePositionResolverBase {
  constructor(protected readonly service: TurnTablePositionService) {
    super(service);
  }
}
