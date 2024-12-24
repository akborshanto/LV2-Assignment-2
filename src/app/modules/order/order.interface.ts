import { Schema, model, connect } from 'mongoose';

export type TOrder= {
    email: string; 
    product: string; 
    quantity: number;
    totalPrice: number; 
  }
  