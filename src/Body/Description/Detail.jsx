import Brand from "./Brand";
import Category from "./Category";
import Description from "./Description";
import Price from "./Price";
import Specials from "./Specials";
import Name from "./Name";
import Store from "./Store";
import SOH from "./SOH";
import "./Detail.css";
import Location from "./Location";

function Detail(props) {
  let valuesId = Object.values(props);
  let result = parseInt(valuesId[0].valueOf());

  return (
    <div className="description">
      <Name id={result} />
      <Brand id={result} />
      <Specials id={result} />
      <Category id={result} />
      <Price id={result} />
      <Description id={result} />
      <Store id={result} />
      <SOH id={result} />
      <Location id={result} />
    </div>
  );
}
export default Detail;
