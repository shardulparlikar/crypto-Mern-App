import React, { useState } from 'react'

const Button = ({ name, price,symbol,mcap,image }) => {
    let btnText = "Save Data"
console.log(typeof(mcap))
    const [switchText, setSwitchText] = useState("save");
    const [user, setUser] = useState({title:"",symbol:"",mcap:"",price:""});

    const sendData= async()=> {
       
        let array1 = {
            id : symbol,
            title : name,
            symbol: symbol ,
            mCap : parseInt(mcap) ,
            price : parseInt(price),
            image : image
        }
        console.log(array1)
       const res = await fetch("/register",{
           method : "POST",
           headers : {"Content-type":"application/json"},
           body : JSON.stringify(array1)

       })
       const data = await res.json();
       if(data.status===422 ||!data){
           window.alert("Input fail")
           console.log( "input fail")
       }else{
        window.alert("Input Sucessfull")
        console.log( "input fail")
       }

        if (switchText) {
            console.log(switchText);
            setSwitchText('View');
        }

    }
    return (
        <div>
            <button className="btn btn-primary" onClick={sendData} method="POST">{switchText}</button>

        </div>
    )
}

export default Button
