import React, { useState } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import {json} from "../../api/surveyData"; 
import "./SurveyCreate.css";

const SurveyCreate = () => {
    const [isCompleted, setIsCompleted] = useState(false);
    const onCompleteSurvey = () => {
      setIsCompleted(true);
    };
    
  const surveyRender = !isCompleted ? (
    <Survey.Survey
      json={json}
      showCompletedPage={false}
      onComplete={onCompleteSurvey}
      showProgressBar="bottom"
    />
  ) : null;

  const surveyComplete = isCompleted ? (
    <div>
      <img
        className="surveyComplete"
        src="https://cdn0.iconfinder.com/data/icons/finance-dark-lines/510/award_thank_you-512.png"
        alt="thank you"
      />
    </div>
  ) : null;

  const surveyDisplay = !isCompleted ? (
    <div>
      <img
        className="surveyDisplay"
        src="https://freeonlinesurveys.com/wp-content/uploads/2020/02/Buy-Survey-Responses.png"
        alt="thank you"
      />
    </div>
  ) : null;

    return (
        <div className="App">
        <div>
            {surveyDisplay}
            {surveyRender}
            {surveyComplete}
        </div>
    </div>
    )
}

export default SurveyCreate;
