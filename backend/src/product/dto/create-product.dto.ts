import { Loai } from "../schema/product.shema";


export class CreateProductDto{

    readonly ten:string;
    readonly gia: number;
    readonly mota: string;
    readonly loai: Loai;

}