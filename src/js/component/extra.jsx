/*import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <> 
    <div className='rod'></div>
      <div className='lightsBox'> 
        <div
          onClick={() => setColor("red")}
          className={`red ${color === "red" ? "shine" : ""}`}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={`yellow ${color === "yellow" ? "shine" : ""}`}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={`green ${color === "green" ? "shine" : ""}`}
        ></div>
      </div>
       
    </>
  );
};

export default TrafficLight;

body {
    background-color: rgb(71, 203, 247);
}

.container {
    justify-content: center;
    display: flex;
    margin-top: 0px;
}

.rod{
    background-color:black;
    width: 30px;
    height: 100px;
    position: fixed;
    
}
.lightsBox {
    border: 1px solid grey;
    border-radius: 2%;
    margin-top:50px;
    background-color: black;
    margin-top:100px;
}

.lightsBox div {
    border: 3px solid black;
    border-radius: 100%;
    height: 99px;
    width: 99px;
    margin: 10px;
}

.red{
    background-color: red;
}
.yellow{
    background-color: yellow;
}
.green {
    background-color: green;
}
.shine {
    box-shadow: 2px 4px 40px 25px white;
}*/


