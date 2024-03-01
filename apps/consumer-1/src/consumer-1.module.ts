import { Module } from "@nestjs/common";
import { Consumer1Controller } from "./consumer-1.controller";
import { Consumer1Service } from "./consumer-1.service";

@Module({
  imports: [],
  controllers: [Consumer1Controller],
  providers: [Consumer1Service],
})
export class Consumer1Module {}
