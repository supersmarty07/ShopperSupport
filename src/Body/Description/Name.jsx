import React, { useState, useEffect } from "react";

function Name(props) {
  const [name, setName] = useState("");
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

        setName(a.Name);
      })
      .catch((error) => {
        console.error("Dummy Error!! Don't Worry Man ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props]);
  //if (loading) return "Loading...";
  //if (error) return "Error!";

  return (
    <div>
      <h2>Name: {name}</h2>
    </div>
  );
}
export default Name;
