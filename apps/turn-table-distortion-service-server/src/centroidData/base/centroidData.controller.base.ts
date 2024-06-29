/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CentroidDataService } from "../centroidData.service";
import { CentroidDataCreateInput } from "./CentroidDataCreateInput";
import { CentroidData } from "./CentroidData";
import { CentroidDataFindManyArgs } from "./CentroidDataFindManyArgs";
import { CentroidDataWhereUniqueInput } from "./CentroidDataWhereUniqueInput";
import { CentroidDataUpdateInput } from "./CentroidDataUpdateInput";

export class CentroidDataControllerBase {
  constructor(protected readonly service: CentroidDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CentroidData })
  async createCentroidData(
    @common.Body() data: CentroidDataCreateInput
  ): Promise<CentroidData> {
    return await this.service.createCentroidData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CentroidData] })
  @ApiNestedQuery(CentroidDataFindManyArgs)
  async centroidDataItems(
    @common.Req() request: Request
  ): Promise<CentroidData[]> {
    const args = plainToClass(CentroidDataFindManyArgs, request.query);
    return this.service.centroidDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CentroidData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async centroidData(
    @common.Param() params: CentroidDataWhereUniqueInput
  ): Promise<CentroidData | null> {
    const result = await this.service.centroidData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CentroidData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCentroidData(
    @common.Param() params: CentroidDataWhereUniqueInput,
    @common.Body() data: CentroidDataUpdateInput
  ): Promise<CentroidData | null> {
    try {
      return await this.service.updateCentroidData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CentroidData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCentroidData(
    @common.Param() params: CentroidDataWhereUniqueInput
  ): Promise<CentroidData | null> {
    try {
      return await this.service.deleteCentroidData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}