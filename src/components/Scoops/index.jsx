import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card';

const Scoops = () => {

 const [data, setData] = useState([]);

 useEffect(() => {

    axios
    .get("http://localhost:4000/scoops")
    .then((res) => setData(res.data));
  }, []);

 return (
    <div >
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi <span className='text-success'>20</span>₺
      </p>
      <h3>Çeşitler Ücreti <span className='text-success'>0</span>₺</h3>
      <div className=' p-3 row gap-5 mt-4 justify-content-between'>
        {data.map((i)=> (
          <Card item= {i} key={i.id} />
        ) )} </div>
    </div>
  )
}

export default Scoops;
