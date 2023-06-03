// Coloms.js

import React, { useState, useEffect } from "react";

const Coloms = (props) => {
  const [Products, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.users || []);
        setFilteredProducts(data.users || []);
      });
  }

  function removeUser(id) {
    fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        setFilteredProducts((prevFilteredProducts) =>
          prevFilteredProducts.filter((product) => product.id !== id)
        );
      });
  }

  function handleSearch(searchQuery) {
    if (searchQuery === "") {
      setFilteredProducts(Products);
    } else {
      const filtered = Products.filter((product) =>
        product.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }

  return (
    <div className="m-6">
      <button type="button" className="btn btn-light m-4">
        Add
      </button>
      {FilteredProducts.map((x) => (
        <div className="card mb-3 max-h-32" key={x.id}>
          <div className="row g-0 flex">
            <div className="col-md-2">
              <img
                src={x.image}
                className="img-fluid rounded-start max-h-32"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{x.firstName}</h5>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => removeUser(x.id)}
                  >
                    remove
                  </button>
                </div>
                <p className="card-text">
                  {x.company.name}, {x.company?.title}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">{x.email}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coloms;
