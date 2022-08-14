import { useSelector, useDispatch } from "react-redux";
import DeletedBtn from "./DeletedBtn";
function Redux() {
  const dispatch = useDispatch();
  const hello = useSelector((state) => state);
  const handleClick = () => {
    dispatch({
      type: "change",
    });
  };
  return (
    <div>
      Значение стейта:{hello}
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <DeletedBtn />
    </div>
  );
}

export default Redux;
