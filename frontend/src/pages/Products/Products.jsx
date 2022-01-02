import React, { useEffect, useRef, useState } from "react";

import "./products.scss";
import {
  useParams,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getCatgeoryProduct } from "../../redux/actions/product.action";
import ProductList from "./ProductList";
export default function Products({ item2, setitem2 }) {
  const products = useSelector((state) => state.products);

  const navigate = useNavigate();
  const [filters, setfilters] = useState({
    Subcategory: "",
    category: "",
    size: "",
    price: "",
    search: "",
  });
  const dispatch = useDispatch();

  const optionChange = (e) => {
    setfilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  console.log(filters);

  const filterItem = () => {
    let updateditem = products.allProduct;
    if (filters.category) {
      updateditem = updateditem.filter((it) =>
        it.categories.includes(filters.category)
      );
    }
    if (filters.Subcategory) {
      updateditem = updateditem.filter((it) =>
        it.categories.includes(filters.Subcategory)
      );
    }
    if (filters.size) {
      updateditem = updateditem.filter((it) => it.size.includes(filters.size));
    }
    if (filters.price == "high") {
      updateditem = [...updateditem].sort((a, b) => b.price - a.price);
    }
    if (filters.price == "low") {
      updateditem = [...updateditem].sort((a, b) => a.price - b.price);
    }
    if (filters.search) {
      updateditem = updateditem.filter((it) =>
        it.title.toLowerCase().includes(filters.search.toLowerCase().trim())
      );
    }

    setitem2(updateditem);
  };

  useEffect(() => {
    filterItem();
  }, [
    filters.category,
    filters.Subcategory,
    filters.size,
    filters.price,
    filters.search,
  ]);

  // useEffect(() => {

  // }, [location.pathname.split("/")[location.pathname.split("/").length - 1]]);

  return (
    <div className="products">
      <div className="wraper">
        <div className="search">
          <input
            type="search"
            name="search"
            placeholder="Search"
            onChange={optionChange}
          />
        </div>
        <div className="title">
          <h5>Products</h5>
        </div>
        <div className="filters">
          <div className="catfilter item">
            <h6>Category</h6>
            <select name="category" onChange={optionChange}>
              <option value="">-</option>
              <option value="men">men</option>
              <option value="women">women</option>
            </select>
          </div>
          <div className="catfilter item">
            <h6>Sub Category</h6>
            <select name="Subcategory" onChange={optionChange}>
              <option value="">-</option>
              <option value="t-shirt">t-shirt</option>
              <option value="pants">pants</option>
              <option value="jacket">jacket</option>
            </select>
          </div>
          <div className="sizefilter item">
            <h6>Size</h6>
            <select name="size" onChange={optionChange}>
              <option value="">-</option>
              <option value="SM">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">xl</option>
            </select>
          </div>
          <div className="pricefilter item">
            <h6>Price</h6>
            <select name="price" onChange={optionChange}>
              <option value="">-</option>
              <option value="high">from high</option>
              <option value="low">from low</option>
            </select>
          </div>
        </div>
        <div className="product_">
          {item2.map((item) => {
            return <ProductItem key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
