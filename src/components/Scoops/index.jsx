import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
useEffect(() => {
  axios.get("http://localhost:4000/scoops").then((res) => setData(res.data));
}, []);

// sepete kele
const addToBasket = (item) => {
  
  // sepette bu elemendan var mı?
  const found = basket.find((i) => i.id === item.id);

if(found) {

// güncel nesneyi oluştur
const updated = { ...found, amount: found.amount + 1 };

// diziyi güncelle
const temp = basket.map((i) => (i.id === found.id ? updated : i));

// state i güncelle 
setBasket(temp);
}else {
// yoksa sepete ekle
setBasket([...basket, { ...item, amount: 1 }]);

}
 
}
//! console.log(basket);
// sepetten çıkar
const  removeFromBasket = (id) => {

// elemanı sepette bul
const found = basket.find((i) => i.id === id);

if(found.amount > 1) {

// güncel nesneyi oluştur
  const updated = {...found, amount: found.amount -1}

//  diziyi güncelle
const temp = basket.map((i) => (i.id === found.id ? updated : i));


// state i güncelle 
setBasket(temp);
}else {

// yoksa septten kaldır
setBasket(basket.filter((i) => i.id !== id));
}

}
//! console.log(basket)

// toplam fiyatı hesapla
const total = basket.reduce((total, i)=> total + i.amount * 20, 0 )

return (
  <div>
    <h1>Dondurma Çeşitleri</h1>

    <p>
      Tanesi <span className="text-success">20</span>₺
    </p>

    <h3>
      Çeşitler Ücreti
      <span data-testid="total" className="text-success">
        {total}
      </span>
      ₺
    </h3>

    <div className="p-3 row gap-5 mt-4 justify-content-between">
      {data.map((i) => {
        // ekrana basılacak elemanı sepette bul
        const found = basket.find((item) => item.id === i.id);

        return (
          <Card
            amount={found?.amount || 0}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
            item={i}
            key={i.id}
          />
        );
      })}
    </div>
  </div>
);
}

export default Scoops;

