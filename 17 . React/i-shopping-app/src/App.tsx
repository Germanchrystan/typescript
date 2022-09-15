import React, { useState } from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';
import {v4} from "uuid";
import './App.css';

function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    setItems([...items, {id: v4(), product, quantity: quantity}])
  }

  return (
    <div>
      <Greeter person="Ger"/>
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
