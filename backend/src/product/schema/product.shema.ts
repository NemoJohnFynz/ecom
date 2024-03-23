import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



export enum Loai {
    THIETBIDIENTU = 'thiết bị điện tử',
    DOGIADUNG = "đồ gia dụng",
    GIAYDEP = 'giày dép'

}

@Schema({
    timestamps: true
})

export class Product {
    @Prop()
    ten: string;

    @Prop()
    gia: number;

    @Prop()
    mota: string;

    @Prop()
    loai: Loai;
}


export const ProductSchema = SchemaFactory.createForClass(Product)