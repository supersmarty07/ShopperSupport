function Name(props) {
  var name;
  const response = fetch("https://api.coinstats.app/public/v1/fiats")
    .then((res) => res.json())
    .then((data) => {
      name = data[0].name;
      console.log(name);
      return name;
    });
  console.log(typeof response);
  console.log(response);
  return (
    <div>
      <h2>Name: </h2>
    </div>
  );
}
export default Name;
