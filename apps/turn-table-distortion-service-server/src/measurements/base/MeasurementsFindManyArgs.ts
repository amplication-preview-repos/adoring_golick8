/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeasurementsWhereInput } from "./MeasurementsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MeasurementsOrderByInput } from "./MeasurementsOrderByInput";

@ArgsType()
class MeasurementsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MeasurementsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MeasurementsWhereInput, { nullable: true })
  @Type(() => MeasurementsWhereInput)
  where?: MeasurementsWhereInput;

  @ApiProperty({
    required: false,
    type: [MeasurementsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MeasurementsOrderByInput], { nullable: true })
  @Type(() => MeasurementsOrderByInput)
  orderBy?: Array<MeasurementsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MeasurementsFindManyArgs as MeasurementsFindManyArgs };