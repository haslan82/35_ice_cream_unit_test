import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/toppings")
      .then((res) => setData(res.data));
  }, []);

  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
//! console.log(basket)
  return (
    <div>
      <h1>Sos Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">3</span>₺
      </p>
      <h3>
        Soslar Ücreti <span data-testid="total" className="text-success">{basket.length*3}</span>
      </h3>
      <div className="row mt-4 gap-3">
        {data.map((i) => (
          <div key={i.id} className="top-card col">
            <label htmlFor={i.name}>
              <img src={i.imagePath} height={100} />
              <p className="text-nowrap text-center">{i.name} </p>
            </label>
            
            <input
              onChange={(e) => handleChange(e.target.checked, i)}
              id={i.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
