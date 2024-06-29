import * as graphql from "@nestjs/graphql";
import { OutputFilenameResolverBase } from "./base/outputFilename.resolver.base";
import { OutputFilename } from "./base/OutputFilename";
import { OutputFilenameService } from "./outputFilename.service";

@graphql.Resolver(() => OutputFilename)
export class OutputFilenameResolver extends OutputFilenameResolverBase {
  constructor(protected readonly service: OutputFilenameService) {
    super(service);
  }
}
