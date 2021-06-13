import react from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react'

const Deletebutton = ({deleteId}) => {
   console.log((deleteId))
        async function  deleteData(){
            const res = await fetch(`/register/${deleteId}`,{
                method : "DELETE", 
                // headers: {'Content-Type':'application/json'},
                // body: JSON.stringify(deleteId)
            })
           
       if(res.status===422 ||!res){
           window.alert("Delete fail")
           console.log( " Delete fail")
       }else{

        window.alert("Delete  Sucessfull")
        console.log( "Delete succesfull")
        

       }
        }
        return (
        <div>
             
            <button className="btn btn-primary" onClick={deleteData} method="POST">Delete</button>

        </div>
    )
}

export default Deletebutton
