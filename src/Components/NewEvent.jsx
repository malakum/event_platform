import React, { useState, useEffect } from "react";




const NewEvent = () =>{ 
const eventData = [ {name:'DANCE' , desc:'Dancing'} , {name:'FOOTBALL' , desc:'Playing Football'},
                                              {name:'CRICKET' , desc:'Playing Cricket'},
                                              {name:'Music' , desc:'Music lesson'}];

const [theme, setTheme] = useState("light");


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };                                       

   // const handleEvent = () => { const totalEvent =eventData.length};                                           

    return (<><h1>EVENT PLATFORM </h1>
               <h2>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h2>
               <button onClick={toggleTheme}>Toggle Theme</button>
                <h3> {theme=== "light" ? 
                 <ul className="event-page-light">
                  
                    {eventData.map((event)=> (
                     <li  Key = {event}> <p >{event.name}</p>
                     <p>{event.desc}</p>
                     </li>))}
                 </ul>
                :
                 <ul className="event-page-dark">
                 
                    {eventData.map((event)=> (
                    <li  Key = {event}> <p >{event.name}</p>
                     <p>{event.desc}</p>
                     </li>))}
                 </ul> } 
                <p>Total Event : {eventData.length}</p> 
                </h3>
              
          </>)};

export default NewEvent;