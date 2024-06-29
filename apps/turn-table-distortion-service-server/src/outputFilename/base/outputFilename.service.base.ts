/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OutputFilename as PrismaOutputFilename } from "@prisma/client";

export class OutputFilenameServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OutputFilenameCountArgs, "select">
  ): Promise<number> {
    return this.prisma.outputFilename.count(args);
  }

  async outputFilenames(
    args: Prisma.OutputFilenameFindManyArgs
  ): Promise<PrismaOutputFilename[]> {
    return this.prisma.outputFilename.findMany(args);
  }
  async outputFilename(
    args: Prisma.OutputFilenameFindUniqueArgs
  ): Promise<PrismaOutputFilename | null> {
    return this.prisma.outputFilename.findUnique(args);
  }
  async createOutputFilename(
    args: Prisma.OutputFilenameCreateArgs
  ): Promise<PrismaOutputFilename> {
    return this.prisma.outputFilename.create(args);
  }
  async updateOutputFilename(
    args: Prisma.OutputFilenameUpdateArgs
  ): Promise<PrismaOutputFilename> {
    return this.prisma.outputFilename.update(args);
  }
  async deleteOutputFilename(
    args: Prisma.OutputFilenameDeleteArgs
  ): Promise<PrismaOutputFilename> {
    return this.prisma.outputFilename.delete(args);
  }
}
