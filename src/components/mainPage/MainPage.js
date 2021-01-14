import React, {useState, useEffect} from "react";
import axios from "axios";


const MainPage = () => {
    const [data, setData] = useState([]);
    const [colorsDisplay, setColorsDisplay] = useState([]);
    const url = "http://www.colourlovers.com/api/palettes/new?format=json";




    window.onscroll = function() {myFunction()};

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            console.log("test1")
        } else {
            console.log("test2")
        }
    }



        useEffect(() => {
            axios.get(url, {}).then((res) => {
                setData(res.data)
            })
        }, [])


        if (data) {
            console.log(data)
        }


        return <div className="MainPage__mainContainer">


        </div>

    }



    export default MainPage;