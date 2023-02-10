import { Injectable , NotFoundException} from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductServices{
    products:Product[]=[];

    insertProduct(title:string,desc:string,price:number){
        const prodId=Math.random().toString()
        const newProduct =new Product(prodId,title,desc,price)

        this.products.push(newProduct)
        return prodId

    }

    getProducts(){
        return [...this.products];
    }
    getSingleProduct(productId:string){
        const product = this.products.find((prod)=>prod.id===productId)
        if(!product){
            throw new NotFoundException('Not found product');
        }
       
        return {product};
    }
    updateProduct(productId:string,title:string,desc:string,price:number){
        const product = this.products.find((prod)=>prod.id===productId)
        console.log(product)
        const prodIndex=this.products.findIndex((prod)=>prod.id===productId)
        const updateProduct={...product}
        console.log(updateProduct)
        if(!product){
            throw new NotFoundException('Not found product');
        }
                if(title){
                    updateProduct.title=title;
                }
                if(desc){
                    updateProduct.desc=desc;
                }
                if(price){
                    updateProduct.price=price;
                }
   
        this.products[prodIndex]=updateProduct;
    }
}