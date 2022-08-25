interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number; 
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        this.price = this.price * amount / 100;
        return this.price;
    }
}

shoes.applyDiscount(20)