import * as graphql from "@nestjs/graphql";
import { MeasurementsResolverBase } from "./base/measurements.resolver.base";
import { Measurements } from "./base/Measurements";
import { MeasurementsService } from "./measurements.service";

@graphql.Resolver(() => Measurements)
export class MeasurementsResolver extends MeasurementsResolverBase {
  constructor(protected readonly service: MeasurementsService) {
    super(service);
  }
}
