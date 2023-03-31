import { Product } from "../interfaces/interfaces"

const product1: Product = {
    id: '1',
    title: 'Coffee mug - card',
    img: './coffee-mug.png',
}

const product2: Product = {
    id: '2',
    title: 'Coffee mug - meme',
    img: './coffee-mug2.png',
}

export const products: Product[] = [product1, product2,]