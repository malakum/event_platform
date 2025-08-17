import { useState } from "react";

const NewEvent = () =>{ 
const eventData = [ {name:'DANCE' , desc:'Dancing'} , {name:'FOOTBALL' , desc:'Playing Football'},
                                              {name:'CRICKET' , desc:'Playing Cricket'},
                                              {name:'Music' , desc:'Music lesson'}];

   // const handleEvent = () => { const totalEvent =eventData.length};                                           

    return (<><h1>new event </h1>
             <ul>
                {eventData.map((event)=> (
                <li  Key = {event}> <p>{event.name}</p>
                <p>{event.desc}</p>
                </li>))}
             </ul>
             <p>Total Event : {eventData.length}</p>
             {/* <button onClick = {handleClick}>Total Event : {totalEvent}</button> */}
          </>)};

export default NewEvent;