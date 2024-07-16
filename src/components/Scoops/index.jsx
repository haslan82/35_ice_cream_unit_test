import axios from 'axios';
import { useEffect, useState } from 'react'
import Card from '../Card';

const Scoops = () => {
const [basket, setBasket] = useState([]);
 const [data, setData] = useState([]);

 useEffect(() => {

    axios
    .get("http://localhost:4000/scoops")
    .then((res) => setData(res.data));
  }, []);

// sepete kele
const addToBasket = (item) => {
  
  // sepette bu elemendan var mı?
  const found = basket.find((i) => i.id === item.id);

if(found) {

// güncel nesneyi oluştur
  const updated = {...found, amount: found.amount + 1}

// varsa miktarını arttır
const temp = basket.map((i) => (i.id === found.id ? updated : i));

// state i güncelle 
setBasket(temp);
}else {
// yoksa sepete ekle
setBasket([...basket, { ...item, amount: 1 }]);

}
 
}
console.log(basket);
// sepetten çıkar
const  clearFromBasket = (id) => {

// elemanı sepette bul
const found = basket.find((i) => i.id === id);

if(found.amount > 1) {

// güncel nesneyi oluştur
  const updated = {...found, amount: found.amount -1}

// varsa miktarını arttır
const temp = basket.map((i) => (i.id === found.id ? updated : i));


// state i güncelle 
setBasket(temp);
}else {
// yoksa sepetten kaldır
setBasket(basket.filter((i)=> i.id !== id));

}
}

 return (
    <div >
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi <span className='text-success'>20</span>₺
      </p>
      <h3>Çeşitler Ücreti <span className='text-success'>0</span>₺</h3>
      <div className=' p-3 row gap-5 mt-4 justify-content-between'>
        {data.map((i)=> (
          <Card addToBasket = {addToBasket} item= {i} key={i.id} />
        ) )} </div>
    </div>
  )
}

export default Scoops;
