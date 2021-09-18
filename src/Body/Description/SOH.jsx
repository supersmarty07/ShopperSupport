import React, { useState, useEffect } from "react";

function SOH(props) {
  const [soh, setSoh] = useState("");
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

        setSoh(a.SOH);
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
      <h2>SOH: {soh}</h2>
    </div>
  );
}
export default SOH;
