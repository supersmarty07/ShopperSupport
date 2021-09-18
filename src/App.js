import "./App.css";
import React, { useState } from "react";
import Detail from "./Body/Description/Detail";
import ImageHolder from "./Body/ImageFunction/ImageHolder";
import Header from "./Header/Header";
import Search from "./Body/ImageFunction/Search";
import Footer from "./Header/Footer";

const idItem = [0];
function App() {
  const [articleId, setArticleId] = useState(idItem);
  const setItemId = (propsReceived) => {
    setArticleId(() => {
      return [propsReceived.id];
    });
  };
  let valuesId = Object.values(articleId);
  let result = parseInt(valuesId[0].valueOf());

  return (
    <div>
      <Header />
      <Search setId={setItemId} />
      <ImageHolder id={result} />
      <Detail id={result} />
      <Footer />
    </div>
  );
}

export default App;
