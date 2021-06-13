import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Deletebutton from "./Deletebutton"

const View = ({keyName, name, symbol, marketcap, price, image}) => {
  console.log(keyName)
  return (  
    <div className="coin-data container">
    
    <div className="row coin-row">
        <div className="col-2 text-center"><h5>{name}</h5></div>
        <div className="col-2 text-center d-inline-block">

            <div className="symbol p-2">
                <img height="30" width="30" src={image} alt="" />
                {symbol}
            </div>
        </div>
        <div className="col-2 text-center">${(marketcap)}</div>
        <div className="col-2 text-center">
            <Deletebutton deleteId={keyName}/>

        </div>
        <div className="col-2 text-center">{(price)}</div>
        
    </div>
   



</div>

    
  );
};

export default View;
