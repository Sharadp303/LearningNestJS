import { Module } from "@nestjs/common/decorators";
import { ProductController } from "./products.controller";
import { ProductServices } from "./products.services";

 @Module({
    controllers:[ProductController],
    providers:[ProductServices],
 })

 export class ProductModule {}