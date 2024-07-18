
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import mongoose from "mongoose";

export default async function handle(req, res) {
    const { method } = req;
    const { name, category, description, price, sku } = req.body;
    
    await mongooseConnect();

    if(method === "POST") {
        const productDoc= await Product.create({
            name, category, description, price, sku
        })
        res.json(productDoc);
    }
}