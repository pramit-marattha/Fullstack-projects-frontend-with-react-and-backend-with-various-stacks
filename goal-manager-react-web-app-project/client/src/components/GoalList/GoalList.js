import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const GoalList = ({ goals, deleteGoals }) => {
    return (
        <ul>
        { goals && goals.length > 0 ? (
                goals.map((goalll,index) => {
                  return (
                      <React.Fragment key={index}>
                    <li  onClick={() => deleteGoals(goalll._id)}>{goalll.action}</li>
                    <div className="buttonArea">
                    <button className="deleteButton" varient="info" onClick={()=>deleteGoals(goalll._id)}> Delete <DeleteForeverIcon/></button>
                    </div>
                    <div className="lineseperate">
                    </div>
                    </React.Fragment>
                  )
                })
              ) : ( <li>Sorry!! No Goals Found</li> )
        }
      </ul>
    )
};

export default GoalList;
