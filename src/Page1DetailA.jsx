import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1-A</h1>
      <button onClick={onClickBack}>go back</button>
    </div>
  );
};
