
import { Loai } from "../schema/product.shema";


export class UpdateProductDto{

    readonly ten:string;
    readonly gia: number;
    readonly mota: string;
    readonly loai: Loai;

}