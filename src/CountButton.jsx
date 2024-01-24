import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ type, setCount, locked }) => {
  //handlers
  const handleClick = event => {
    setCount(prev => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) return 0;

        return newCount;
      } else if (type === "plus") {
        const newCount = prev + 1;
        if (newCount > 5) return 5;

        return newCount;
      }
    });

    //remove focus from the element
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
};

export default CountButton;
