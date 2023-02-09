import { Controller,Post,Body,Get,Param} from "@nestjs/common";


import { ProductServices } from "./products.services";

@Controller('products')
export class ProductController{
       constructor(private readonly productService:ProductServices){}
    
    @Post()
       addProduct(
         @Body('title') prodTitle: string,
         @Body('description') prodDesc: string,
         @Body('price') prodPrice: number,
         ):any{
            const generatedId= this.productService.insertProduct(prodTitle,prodDesc,prodPrice);
              return {id:generatedId};
        }
    
        @Get()
        getAllProducts(){
            return this.productService.getProducts();
        }
        @Get(':id')
        getProduct(@Param('id') prodId: string ){
              return this.productService.getSingleProduct(prodId)
        }

} 