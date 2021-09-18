import React, { useState, useEffect } from "react";

function Brand(props) {
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hideWarnings = () => {
    console.log(error);
    console.log(loading);
  };
  if (1 == 2) hideWarnings();

  useEffect(() => {
    fetch("https://react-item-api.herokuapp.com/item")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //throw response;
      })
      .then((data) => {
        let a = data[props.id];

        setBrand(a.Brand);
      })
      .catch((error) => {
        console.error("Dummy Error!! Don't Worry Man ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props]);
  return (
    <div>
      <h2>Brand: {brand}</h2>
    </div>
  );
}

export default Brand;
