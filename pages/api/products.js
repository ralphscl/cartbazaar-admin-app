
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";

export default async function handle(req, res) {
    const { method } = req;
    const { name, category, description, price, sku } = req.body;
    
    await mongooseConnect();

    if(method === 'GET') {
        console.log(req.query)
        if(req.query?.id) {
            res.json(await Product.findById(req.query.id))
        } else {
            res.json(await Product.find());
        }
    }

    if(method === 'POST') {
        const productDoc= await Product.create({
            name, category, description, price, sku
        })
        res.json(productDoc);
    }
}