import { useDispatch } from "react-redux";

function DeletedBtn() {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch({
      type: "delete",
    });
  };
  return (
    <div>
      <button onClick={handleRemove}>delete</button>
    </div>
  );
}

export default DeletedBtn;
