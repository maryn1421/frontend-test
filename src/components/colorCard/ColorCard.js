import React, {useState, useEffect} from "react";
import axios from "axios";
import './colorCard.css'


const ColorCard = (props) => {


    return <div className="colorCard__main">
        <p className="colorCard__title">{props?.username}</p>
    </div>
}
export default ColorCard;