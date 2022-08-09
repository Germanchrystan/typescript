function calculateTax(price: number | string, tax: number) {
    if(typeof price === "string") {
        price = parseFloat(price = price.replace("$", ""))
    }
    return price * tax
}