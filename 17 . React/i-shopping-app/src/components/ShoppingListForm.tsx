import React, { useRef } from 'react';

interface ShoppingListFormProps{
    onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
    const productRef = useRef<HTMLInputElement>(null);
    const quantityRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = productRef.current!.value;
        const quantity = parseInt(quantityRef.current!.value);
        onAddItem(newProduct, quantity);
        productRef.current!.value = '';
        quantityRef.current!.value = "1";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={productRef} placeholder='product name' />
            <input type="number" min={0} ref={quantityRef}/>
            <button type='submit'>Add Item</button>
        </form>
    )
}