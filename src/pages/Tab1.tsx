import { IonCard, IonCardContent, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList } from "@ionic/react";
import { useState, useEffect } from "react";

import './Tab1.css';

function ShoppingList() {
  const [items, setItems] = useState<String[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${items.length + i}`

      );
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
  }, []);

  const getAColour = () => {
    let redValue = parseInt(Math.floor(Math.random() * 255).toString(), 16);
    let blueValue = parseInt(Math.floor(Math.random() * 255).toString(), 16);
    let greenValue = parseInt(Math.floor(Math.random() * 255).toString(), 16);
    return redValue + blueValue + greenValue + '';
  }
  
  

  return (
    <IonContent>
    <IonList>
      {items.map((item, index) =>
      (
        <IonItem color={'dark'} key={index}>
          <IonCard style={{ backgroundColor: `#${getAColour()}` , width: '100%', height: '100%' }}>
         
            <IonCardContent ></IonCardContent>
          </IonCard>
        </IonItem>
      ))}
    </IonList>

    <IonInfiniteScroll onIonInfinite={(ev) => { generateItems(); setTimeout(() => ev.target.complete(), 500); }}>
      <IonInfiniteScrollContent loadingText="Lemme Get That..." loadingSpinner="bubbles"></IonInfiniteScrollContent>

    </IonInfiniteScroll>
  </IonContent>
)}
export default ShoppingList;