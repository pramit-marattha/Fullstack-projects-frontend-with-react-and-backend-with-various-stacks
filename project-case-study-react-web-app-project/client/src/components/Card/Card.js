import React from 'react';
import "./Card.css";
import moment from "moment";

const Card = (props) => {


  return (
    <div className="container__cardbox">
        <div className="card-body">
          <div className="card-title"><a href={props.link} target="_blank" rel="noreferrer">{props.title}</a></div>
          <div className="card-description">{props.description} 📖</div>
          <div className="card-description">Total Forks: {props.forks} 🍴</div>
          <div className="card-description">Total Stars: {props.stars} ⭐</div>
          <div className="card-description">Last Updated: {moment(`${props.updatedAt}`).fromNow()} ⌛</div>
          {/* <div className="card-description">License Name: {(props.licenseName === "Other" & null ) ? "Other License" : props.licenseName} 📜</div> */}
          <div className="card-description">Total Watchers: {props.watchCount} 👀</div>
          <div className="card-description">Open Issues: {props.openIssuesCount} 🏷️</div>
          <div className="card-description">Repo Size: {props.repoSize} KB ⚖️</div>
          <img className="card-image" src={props.image} alt={props.title} />
        </div>
      </div>
  )
}

export default Card;
