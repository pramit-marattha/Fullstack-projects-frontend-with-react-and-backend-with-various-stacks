import React,{useState} from 'react';
import Chess from "react-chess";
import '../styles/chessboard.css';
import ChessTimerLeft from "./ChessTimerLeft";
import ChessTimerRight from "./ChessTimerRight";


function Chesslogic() {

  const chessPieces = ['R@a1','P@a2','p@a7','r@a8','N@b1','P@b2','p@b7','n@b8','B@c1','P@c2','p@c7','b@c8','Q@d1','P@d2','p@d7','q@d8','K@e1','P@e2','p@e7','k@e8','B@f1','P@f2','p@f7','b@f8','N@g1','P@g2','p@g7','n@g8','R@h1','P@h2','p@h7',
  'r@h8'
  ];
  
    const [pieces,setPieces] = useState(chessPieces);

    function handleChessPiece(chesspiece, fromSquare, toSquare){
        const newPieces = pieces.map((curr, index) => {
            if (chesspiece.index === index) {
              return `${chesspiece.name}@${toSquare}`
            } else if (curr.indexOf(toSquare) === 2) {
              return false 
            }
            return curr
          }).filter(Boolean)
    
        setPieces(newPieces)
      }

    return (
        <>
         <ChessTimerLeft/>
         <ChessTimerRight/>
         <div className="btn-wrapper">
         <button onClick={() => setPieces()} className="btn-reload">Reset Chess Board</button>  
         <button onClick={() => window.location.reload(false)} className="btn-reload">Reset Entire Page</button>  
         </div>
        <div className="chess-board">
          <Chess pieces={pieces} onMovePiece={handleChessPiece} />
        </div>
        </>
    )
}

export default Chesslogic;
