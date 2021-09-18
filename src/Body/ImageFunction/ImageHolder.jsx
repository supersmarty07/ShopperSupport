import "./ImageHolder.css";
import React from "react";

function ImageHolder(props) {
  const imageUrl = {
    0: "https://i.ibb.co/2t5RrnX/Woolworths-Mobile.png",
    1: "https://i.ibb.co/qdSThPq/Odd-Bunch-Apple.jpg",
    2: "https://i.ibb.co/KzsWYDL/Milk.jpg",
    3: "https://i.ibb.co/hWv7nv2/Orange-Juice.jpg",
    4: "https://i.ibb.co/XZfxP2P/Ben-And-Jerry.jpg",
    5: "https://i.ibb.co/ZS3FtRX/Kitkat.jpg",
    6: "https://i.ibb.co/7QrnqSk/Connoisseur.jpg",
    7: "https://i.ibb.co/5RDh5D8/Pedigree.jpg",
    8: "https://i.ibb.co/kKcLvL6/Organic-Eggs.jpg",
    9: "https://i.ibb.co/pb7Jj6g/Apple.jpg",
    10: "https://i.ibb.co/KNLbYY1/Bread.jpg",
  };
  let dynamicImage = imageUrl[`${props.id}`];
  return (
    <div className="imageHolder">
      <img id="image" src={dynamicImage} alt="" />
    </div>
  );
}
export default ImageHolder;
