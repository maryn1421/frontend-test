import React, { useState, useEffect } from "react";
import axios from "axios";



const MainPage = () => {
    const [data, setData] = useState([]);
    const url = "http://www.colourlovers.com/api/palettes/new?format=json";


    useEffect(() => {
        axios.get(url, {
        }).then((res) => {
            setData(res.data)
        })
    },[])


    if (data) {
        console.log(data)
    }



    return <div className="MainPage__mainContainer">
        <h1>Hello world</h1>




    </div>

}


export default MainPage;