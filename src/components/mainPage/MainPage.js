import React, {useState, useEffect} from "react";
import axios from "axios";
import ColorCard from "../colorCard/ColorCard";
import './mainPage.css'

const MainPage = () => {
    const [data, setData] = useState([]);
    const [colorsDisplay, setColorsDisplay] = useState([]);
    const url = "http://www.colourlovers.com/api/palettes/new?format=json";


    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("more")
            if (colorsDisplay) {
                setColorsDisplay(data)
                window.onscroll = null;
            }
        }
    }


    useEffect(() => {
        axios.get(url, {}).then((res) => {
            setData(res.data)
        })
    }, [])


    useEffect(() => {
        setColorsDisplay(data.slice(0, 10))
    }, [data])


    console.log(colorsDisplay)


    return <div className="MainPage__mainContainer">
        {colorsDisplay.map(palette => {
            console.log(palette)
           return  <ColorCard palette={palette} />
        })}

    </div>

}


export default MainPage;