import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setCount }) => {
  //handlers
  const handleClick = event => {
    setCount(0);

    //remove focus from the element
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
