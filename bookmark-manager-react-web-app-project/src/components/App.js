import React, { useState } from "react";
import "../styles/App.css";
import CardComp from "./CardComp";

function App() {
  const [cardData, setCardData] = useState([
    {
      linkName: "Bookmark (Link) Name",
      linkHref: "https://github.com/pramit-marattha",
    },
  ]);

  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  const dispatchCardSet = (payload) => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkHref: "", linkName: "" });
  };

  return (
    <>
      <nav className="navigationPannel">
        <img
          height="80px"
          src="https://www.pngmart.com/files/8/Bookmark-PNG-Background-Image.png"
          alt="Bookmark"
        />
        <div className="paintFontBookmark">.बुकमार्क ~</div>
      </nav>
      <main>
        <div className="rightContainer">
          <h1 className="paintFontBookmark">Bookmarks</h1>
          <CardComp cards={cardData}></CardComp>
        </div>

        <div className="leftContainer">
          <h1 className="paintFont">Add Bookmark </h1>
          <img
            src="https://www.pikpng.com/pngl/b/411-4118917_logo-emblem-symbol-bookmark-sign-png.png"
            alt="Bookmark"
          />

          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="formTitle">Add Bookmark</h3>
            <div>
              <label htmlFor="linkTitle" className="formLabel">
                Enter your Bookmark name :
              </label>
              <input
                value={newCard.linkName}
                onChange={(e) =>
                  setNewCard({ ...newCard, linkName: e.currentTarget.value })
                }
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="55"
                placeholder="Something..."
              />
            </div>

            <div>
              <label htmlFor="linkHref" className="formLabel">
                Enter your Url Link :
              </label>
              <input
                value={newCard.linkHref}
                onChange={(e) =>
                  setNewCard({ ...newCard, linkHref: e.currentTarget.value })
                }
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com.np"
              />
            </div>
            <button
              className="bookmarkBtn"
              onClick={() => dispatchCardSet(newCard)}
            >
              Create bookmark
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
