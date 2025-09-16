import React, { useState } from "react";




const NewEvent = () =>{ 
const [eventData , setEventData]= useState([ {name:'DANCE' , desc:'Dancing'} , {name:'FOOTBALL' , desc:'Playing Football'},
                                              {name:'CRICKET' , desc:'Playing Cricket'},
                                              {name:'Music' , desc:'Music lesson'}]);

                                              const title = "Meeting with Team";
    const details = "Discuss project updates";
    const location = "Zoom";
    const start = "20250820T100000Z"; // YYYYMMDDTHHmmssZ (UTC time)
    const end = "20250820T110000Z";
    const newEvent = {title :title, details:details, location:location, start:start,end:end};
    console.log(newEvent);


    // const [ theme , setTheme] = useState("light");

    // useEffect(() => {
    //     document.body.className = theme;
    //   }, [theme]);
    
    //   const toggleTheme = () => {
    //     setTheme(theme === "light" ? "dark" : "light");
    //   };      
  

   // const handleEvent = () => { const totalEvent =eventData.length};                                           

    return (<>
             <h2>Event list </h2>
                  {/* <h3> {theme=== "light" ?  */}
                <ul className= "event-page">
                {/* //  <ul className="event-page-light"> */}
                  <p>-------------</p>
                    {eventData.map((event,i)=> (
                     <li  key = {i}  className= "event-card"> <p >Event Name : {event.name}</p>
                     <p>Event Desc : {event.desc}</p>
                     </li>))}
                      <p>-------------</p>
                 </ul>
                {/* // :
                // <ul className = "event-page">
                
                //     {eventData.map((event)=> (
                //     <li  Key = {event}> <p >{event.name}</p>
                //      <p>{event.desc}</p>
                //      </li>))}
                //  </ul> }  */}
                <p>Total Event : {eventData.length}</p> 
                {/* // </h3> */}
              
          </>)};

export default NewEvent;