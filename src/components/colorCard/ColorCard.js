import React, {useState, useEffect} from "react";
import axios from "axios";
import './colorCard.css'


const ColorCard = (props) => {


    return <div className="colorCard__main">
        <p className="colorCard__title">{props?.palette.title}</p>
        <p className="colorCard__userName">by {props?.palette.userName} at <span>{props.palette?.dateCreated}</span></p>
        <img src={props.palette?.imageUrl} alt=""/>
        <p className={'colorCard__viewAndVotesContainer'}><span>{props.palette?.numViews}</span> votes <span>{props.palette?.numVotes}</span> views</p >
    </div>
}
export default ColorCard;