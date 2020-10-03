import React from "react";

const CardComp = (props) => {
  const backImageStyle = {
    backgroundImage:
      "url('https://www.pngmart.com/files/8/Bookmark-Background-PNG.png')",
    // "url('https://freepikpsd.com/wp-content/uploads/2019/10/bookmark-icon-png-8-Transparent-Images-Free-300x300.png')",
    // "url('https://freepikpsd.com/wp-content/uploads/2019/10/bookmark-icon-png-8-Transparent-Images-Free-300x300.png')",
  };

  const mappedCardData = props.cards.map((card, i) => {
    return (
      <div key={i} className="bookmarkCard">
        <div className="bookmarkCardImage" style={backImageStyle} />
        <div className="bookmarkCardLink">
          <a target="_blank" rel="noopener noreferrer" href={card.linkHref}>
            {card.linkName}
          </a>
        </div>
      </div>
    );
  });
  return <>{mappedCardData}</>;
};

export default CardComp;
