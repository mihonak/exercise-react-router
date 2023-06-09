import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Page1-A</Link>
      <Link to="/page1/detailB">Page1-B</Link>
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
