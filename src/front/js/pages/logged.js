import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/logged.css";
import foto2 from "../../img/foto2.jpg"
import foto3 from "../../img/foto3.jpg"

export const Logged = () => {
    const { store, actions } = useContext(Context);
    const [userData, setUserData] = useState("")
    const token = localStorage.getItem("token");

    const getUser = async () => {
      const user = await actions.getUserData();
      setUserData(user);
    };
      
    useEffect(() => {
      store.token && store.token != "" && store.token != undefined && getUser();
    }, [store.token]);

    
    return (
    <div> {store.token && store.token != "" && store.token != undefined ? (
      <div className="center">
        <h1 >I see you got it </h1>
        <h4> Press log out to see if the achievement is complete!</h4>
        <img className="monster2" src={foto2} alt="a very cute monster"/> 
      </div>
    ) : (
      <div className="center">
        <h2>You need to login or register to enter to private zone</h2>
        <img className="monster5" src={foto3} alt="a very cute green monster"/>
      </div>
    )}
    </div> 
    )
};