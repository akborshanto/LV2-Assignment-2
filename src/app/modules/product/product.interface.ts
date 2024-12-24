import { Schema, model, connect } from 'mongoose';


// 1. Create an interface representing a document in MongoDB.
export type Product ={
    name: string;
    brand: string;
    price: number;
    type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
    description: string;
    quantity: number;
    inStock: "stock" | "inStock";
}
