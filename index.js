import React from "react";
import ReactDom from "react-dom";
import './index.css';

let greet = '';

let currdate = new Date(2021,12,5,11);
currdate = currdate.getHours();

const cssStyle = {

};

if(currdate >=1 && currdate <12){
    greet = 'Good Morning';
    cssStyle.color = 'red';
}
else if(currdate >=12 && currdate<19){
    greet = 'Good Afternoon';
    cssStyle.color = 'Orange';
}
else{
    greet = 'Good Night';
    cssStyle.color = 'Black';
}
ReactDom.render(
    <div>
        <h1>Hello Sir, <span style = {cssStyle}>{greet}</span></h1>
    </div>,document.getElementById('root')
);