import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard() {
  let navigate = useNavigate();

  let [products] = useContext(ProductsContext);

  function openProduct(index) {
    // now navigate to that index
    navigate(`/${products[index].id}`, { state: index });
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex ">
      {products.map((prodObj, index) => (
        <div key={index} className="eachCol col text-white  g-4 ">
          <button
            className="btn h-100 w-100 pb-2"
            onClick={() => openProduct(index)}
          >
            <div className="card text-center h-100 p-1">
              <div className="card-body h-75">
                <img
                  className="image h-100  rounded"
                  src={prodObj.image}
                  alt="Oops!!"
                />
              </div>
              <div className="card-header">
                <h3 className="text-center ">${prodObj.price}</h3>
                <p className="prodTitle">{prodObj.title}</p>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
