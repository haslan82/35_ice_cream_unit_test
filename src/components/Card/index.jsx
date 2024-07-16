

const Card = ({ item, addToBasket }) => {
  //! console.log(item)
  return (
    <div
      style={{ width: "200px" }}
      className="border rounded p-3 align-items-center
     d-flex flex-column gap-1"
    >
      <img src={item.imagePath} alt="Çeşit Resim" height={100} />
      <span>{item.name} </span>
      <div className="d-flex align-items-center gap-2 mt-4">
        <button className="btn btn-sm btn-outline-danger">Azalt</button>
        <span className="fs-2">0</span>
        <button 
        onClick={() => addToBasket(item)}
        className="btn btn-sm btn-outline-success">Ekle</button>
      </div>
    </div>
  );
};

export default Card;
