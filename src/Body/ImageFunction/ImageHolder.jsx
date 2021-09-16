import "./ImageHolder.css";
import React from "react";

function ImageHolder(props) {
  let valuesId = Object.values(props);
  let result = parseInt(valuesId[0].valueOf());
  const imageSite = `https://robohash.org/${result}`;
  console.log(imageSite);

  return (
    <div className="imageHolder">
      <img id="image" src={imageSite} alt="" />
    </div>
  );
}
export default ImageHolder;
//<ImageComponent url={`${imageSite}`} />
//<img
//id="image"
//src="https://cdn0.woolworths.media/content/wowproductimages/large/000102.jpg"
//alt=""
///>
//<img id="image" src={imageSite} alt="" />
//class ImageHolder extends React.Component{}

/*function ImageHolder(props) {
  let valuesId = Object.values(props);
  let result = parseInt(valuesId[0].valueOf());
  const imageSite = `"https://cdn0.woolworths.media/content/wowproductimages/large/${result}.jpg"`;

  return (
    <div className="imageHolder">
      <img
        id="image"
        src={`"https://cdn0.woolworths.media/content/wowproductimages/large/${result}.jpg"`}
        alt=""
      />
    </div>
  );
}*/
/*
class ImageHolder extends React.Component {
  constructor() {
    super();
  }

  render() {
    let valuesId = Object.values(this.props);
    let result = parseInt(valuesId[0].valueOf());
    console.log(result);
    const imageSite = `"https://cdn0.woolworths.media/content/wowproductimages/large/${result}.jpg"`;
    return (
      <div className="imageHolder">
        <img id="image" src={imageSite} alt="" />
      </div>
    );
  }
}
*/

/*
function ImageHolder(props) {
  let valuesId = Object.values(props);
  let result = parseInt(valuesId[0].valueOf());
  console.log(result);
  console.log(typeof result);
  const imageSite = `"https://cdn0.woolworths.media/content/wowproductimages/large/${result}.jpg"`;

  const getImages = () => {
    fetch(imageSite).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    getImages();
  });
  return (
    <div className="imageHolder">
      <img
        id="image"
        src={`"https://cdn0.woolworths.media/content/wowproductimages/large/${result}.jpg"`}
        alt=""
      />
    </div>
  );
}

export default ImageHolder;*/
