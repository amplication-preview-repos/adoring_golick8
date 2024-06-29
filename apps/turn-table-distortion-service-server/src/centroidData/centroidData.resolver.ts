import * as graphql from "@nestjs/graphql";
import { CentroidDataResolverBase } from "./base/centroidData.resolver.base";
import { CentroidData } from "./base/CentroidData";
import { CentroidDataService } from "./centroidData.service";

@graphql.Resolver(() => CentroidData)
export class CentroidDataResolver extends CentroidDataResolverBase {
  constructor(protected readonly service: CentroidDataService) {
    super(service);
  }
}
