import { useState } from "react";

const NewEvent = () =>{ 
const [eventData, setEventData] = useState ([ 'DANCE' , 'FOOTBALL' , 'CRICKET'  , 'MUSIC']);

    return (<><h1>new event </h1>
             <ul>
                {eventData.map((event)=> (
                <li  Key = {event}> {event}</li>))}
             </ul>
          </>)};

export default NewEvent;