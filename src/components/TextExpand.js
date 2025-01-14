import { useState } from "react";
import "../textExpand.css";

export default function TextExpand() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  className = "",
  collapsedNumWords = 10,
}) {
  const [isShow, setIsShow] = useState(expanded);
  function handleShow() {
    setIsShow((i) => setIsShow(!i));
  }

  const truncateText = (children, collapsedNumWords) => {
    const wordNums = children.split(" ");
    if (wordNums.length <= collapsedNumWords) {
      return children;
    }

    const truncated = wordNums.slice(0, collapsedNumWords);
    return truncated.join(" ") + "...";
  };
  return (
    <div className={className}>
      {isShow ? children : truncateText(children, collapsedNumWords)}
      {isShow ? (
        <ShowButton buttonColor={buttonColor} onShow={handleShow}>
          {collapseButtonText}
        </ShowButton>
      ) : (
        <ShowButton buttonColor={buttonColor} onShow={handleShow}>
          {expandButtonText}
        </ShowButton>
      )}
    </div>
  );
}

function ShowButton({ children, buttonColor = "#1f09cd", onShow }) {
  const ButtonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "8px",
    color: buttonColor,
  };
  return (
    <button style={ButtonStyle} onClick={onShow}>
      {children}
    </button>
  );
}
