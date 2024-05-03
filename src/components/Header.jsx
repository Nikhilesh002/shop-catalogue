import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import searchIconWhite from "../imgs/searchIconWhite.png";
import homeIcon from "../imgs/homeIcon.png";
import shopIcon from '../imgs/shop-c.jpg';
import "./Header.css";

function Header() {
  let navigate = useNavigate();

  let { register, handleSubmit } = useForm();

  // function searchProducts(prodId) {
  //   console.log("Hi",prodId);
  //   console.log(products[0].id);
  //   let l = 0,
  //   r = products.length - 1,
  //   mid = 0;
  //   while (l <= r) {
  //     mid = parseInt((l + r) / 2);
  //     if (products[mid].id === prodId) return mid;
  //     if (products[mid].id < prodId) l = mid + 1;
  //     else r = mid - 1;
  //   }
  //   return -1;
  // }

  function handleFormSubmit(productObj) {
    // console.log("one",productObj);
    let prodIndex = parseInt(productObj.searchId);
    // console.log("two",prodIndex);
    if (prodIndex === -1) {
      alert("Product Not Found");
    } else {
      navigate(`/${prodIndex}`, { state: prodIndex });
    }
  }

  return (
    <div className="total p-2">
      <div className="row p-1">
        <div className="col-1 text-center">
          <Link to="">
            <img
              className="logo text-center pt-2 homeIcon"
              src={homeIcon}
              alt="Oops!!"
            />
          </Link>
        </div>
        <div className="col-2">
          <Link to="">
            <img
              className="logo text-center pt-2"
              src={shopIcon}
              alt="Oops!!"
              height="50px"
            />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="col-5 d-flex justify-content-center align-items-center "
        >
          <input
            type="text"
            id="searchId"
            className="searchBar form-control rounded-3 p-2 ps-4 "
            placeholder="Enter id(1-20)..."
            {...register("searchId")}
          />

          <button className="btn p-0 ms-3 text-white ">
            <img
              className="searchIcon h-100 p-0 m-0 rounded"
              src={searchIconWhite}
              alt=""
            />
          </button>
        </form>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Header;
