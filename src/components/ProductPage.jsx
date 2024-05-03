import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useLocation } from "react-router-dom";
import "./ProductPage.css";

function ProductPage() {
  let [products] = useContext(ProductsContext);
  // console.log(products);

  let data = useLocation();
  // console.log("Hola",data);
  let i = data.state-1;
  // console.log("Hola",i);

  return (
    <div className="productBox pe-5">
      <div className="row row-cols-sm-1 row-cols-md-2 text-center p-5 productImgBox ">
        <div className="col h-100 ">
          <img
            className="h-100 rounded-3 prodImg"
            src={products[i].image}
            alt="Oops!!"
          />
        </div>

        <div className="col h-100 d-flex align-items-center ">
          <div className="">
            <h3>{products[i].title}</h3>
            <h1>${products[i].price}</h1>
            <p>
              ⭐{products[i].rating.rate}{" "}
              <span className="text-decoration-underline">
                {products[i].rating.count} ratings
              </span>
            </p>
            <h4>{products[i].category}</h4>
            <p>{products[i].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
