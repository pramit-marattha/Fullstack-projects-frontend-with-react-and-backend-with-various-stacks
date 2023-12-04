import React from "react";
import { sanitizeUrl } from "@braintree/sanitize-url";

const CardComp = (props) => {
  const backImageStyle = {
    backgroundImage:
      "url('https://www.pngmart.com/files/8/Bookmark-Background-PNG.png')",
    // "url('https://freepikpsd.com/wp-content/uploads/2019/10/bookmark-icon-png-8-Transparent-Images-Free-300x300.png')",
    // "url('https://freepikpsd.com/wp-content/uploads/2019/10/bookmark-icon-png-8-Transparent-Images-Free-300x300.png')",
  };

  const mappedCardData = props.cards.map((card, i) => {
    const safeHref = sanitizeUrl(card.linkHref);
    return (
      <div key={i} className="bookmarkCard">
        <div className="bookmarkCardImage" style={backImageStyle} />
        <div className="bookmarkCardLink">
          <a target="_blank" rel="noopener noreferrer" href={safeHref}>
            {card.linkName}
          </a>
        </div>
      </div>
    );
  });
  return <>{mappedCardData}</>;
};

export default CardComp;
