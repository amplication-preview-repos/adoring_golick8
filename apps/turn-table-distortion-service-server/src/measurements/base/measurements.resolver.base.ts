/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Measurements } from "./Measurements";
import { MeasurementsCountArgs } from "./MeasurementsCountArgs";
import { MeasurementsFindManyArgs } from "./MeasurementsFindManyArgs";
import { MeasurementsFindUniqueArgs } from "./MeasurementsFindUniqueArgs";
import { DeleteMeasurementsArgs } from "./DeleteMeasurementsArgs";
import { MeasurementsService } from "../measurements.service";
@graphql.Resolver(() => Measurements)
export class MeasurementsResolverBase {
  constructor(protected readonly service: MeasurementsService) {}

  async _measurementsItemsMeta(
    @graphql.Args() args: MeasurementsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Measurements])
  async measurementsItems(
    @graphql.Args() args: MeasurementsFindManyArgs
  ): Promise<Measurements[]> {
    return this.service.measurementsItems(args);
  }

  @graphql.Query(() => Measurements, { nullable: true })
  async measurements(
    @graphql.Args() args: MeasurementsFindUniqueArgs
  ): Promise<Measurements | null> {
    const result = await this.service.measurements(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Measurements)
  async deleteMeasurements(
    @graphql.Args() args: DeleteMeasurementsArgs
  ): Promise<Measurements | null> {
    try {
      return await this.service.deleteMeasurements(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
