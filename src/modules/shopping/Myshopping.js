
import React, { useState, useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import axios from "axios";
import { backendurl } from "../../Servicepage";
import Carousel from "../../shares/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/Myactions";
import Dreidfruit from "../dreidfruitshop/Dreidfruit";

function Myshopping() {
  const [myfruitdata, setFruitData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items per page

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    axios
      .get(`${backendurl}/allfruits`)
      .then((response) => {
        setFruitData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fruit data:", error);
      });
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myfruitdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(myfruitdata.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mt-4">
        <Carousel />
        <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
          <h3>Selected items: {count}</h3>
          <button
            className="btn btn-danger d-flex align-items-center"
            onClick={() => dispatch(decrement())}
          >
            <FaTrashCan className="me-2" /> Remove
          </button>
        </div>

        <div className="">
          <h1>Fresh Fruits........</h1>
          <br/>
          <div className="row">
            {currentItems.map((d) => (
              <div key={d.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow cardimg">
                  <Link to={`${d.fruitimage}`}>
                    <img
                      src={d.fruitimage}
                      alt={d.fruitname}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        width: "200px",
                        marginLeft: "60px",
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{d.fruitname}</h5>
                    <p className="card-text">
                      <strong>Original Price:</strong> &#8377;{d.price}
                      <br />
                      <strong style={{ color: "red" }}>Discount:</strong>{" "}
                      {d.discount}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => dispatch(increment())}
                        className="btn btn-primary"
                      >
                        ADD TO CART
                      </button>
                      <Link
                        to={`Fruitdetails/` + d._id}
                        className="btn btn-success"
                      >
                        BUY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
          <br/><br/>
          <h1>Dried Fruits........</h1>
          <br/>
          <Dreidfruit/>
        </div>
      </div>
    </>
  );
}

export default Myshopping;
