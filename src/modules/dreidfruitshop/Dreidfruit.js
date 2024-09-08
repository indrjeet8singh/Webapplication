
import React, { useState, useEffect } from "react";
import "animate.css";
import { Link } from "react-router-dom";
// import { FaTrashCan } from "react-icons/fa6";
import axios from "axios";
import { backendurl } from "../../Servicepage";

import { useDispatch} from "react-redux";
import {  increment } from "../shopping/reducers/Myactions";

function Dreidfruit() {
  const [mydfruitdata, setFruitDatad] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items per page

  const dispatch = useDispatch();
//   const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    axios
      .get(`${backendurl}/dallfruits`)
      .then((response) => {
        setFruitDatad(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fruit data:", error);
      });
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mydfruitdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mydfruitdata.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mt-4">
        
        {/* <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
          <h3>Selected items: {count}</h3>
          <button
            className="btn btn-danger d-flex align-items-center"
            onClick={() => dispatch(decrement())}
          >
            <FaTrashCan className="me-2" /> Remove
          </button>
        </div> */}

        <div className="">
          <div className="row">
            {currentItems.map((d) => (
              <div key={d.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow cardimg">
                  <Link to={`${d.dfruitimage}`}>
                    <img
                      src={d.dfruitimage}
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
                    <h5 className="card-title">{d.dfruitname}</h5>
                    <p className="card-text">
                      <strong>Original Price:</strong> &#8377;{d.dprice}
                      <br />
                      <strong style={{ color: "red" }}>Discount:</strong>{" "}
                      {d.ddiscount}
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
        </div>
      </div>
    </>
  );
}

export default Dreidfruit;
