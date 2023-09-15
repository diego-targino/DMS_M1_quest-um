import { useEffect, useState } from "react";
import "./optionButton.style.css";

function OptionButton(props) {
  const [isSet, setIsSet] = useState(false);
  const [content, setContent] = useState("?");

  useEffect(() => {
    if (props.win && !props.reset) {
      setIsSet(true);
    }
    if (props.reset) {
      setIsSet(false);
      setContent("?");
    }
  });

  const onClickButton = () => {
    if (!isSet) {
      setContent(props.turn ? "fa-solid fa-x" : "fa-solid fa-circle-notch");
      props.passValue(props.turn ? "X" : "O", props.line, props.column);
      props.chageTurn();
      setIsSet(true);
    }
  };

  return (
    <div>
      <button className="optionButton" onClick={onClickButton} disabled={isSet}>
        <i className={content}></i>
      </button>
    </div>
  );
}

export default OptionButton;
