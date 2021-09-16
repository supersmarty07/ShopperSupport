import "./App.css";
import React, { useState } from "react";
import Description from "./Body/Description/Description";
import ImageHolder from "./Body/ImageFunction/ImageHolder";
import Header from "./Header/Header";
import Search from "./Body/ImageFunction/Search";

const idItem = [];
function App() {
  const [articleId, setArticleId] = useState(idItem);
  const setItemId = (propsReceived) => {
    setArticleId(() => {
      return [propsReceived.id];
    });
    //console.log(articleId);
    //const passingId = idItem[0];
    //console.log(passingId);
  };
  return (
    <div>
      <Header />
      <Search setId={setItemId} />
      <ImageHolder id={articleId} />

      <Description />
    </div>
  );
}

export default App;
