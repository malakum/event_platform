import React, { useState, useEffect } from "react";




const Header = () =>{ 


const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };      
  
  

   // const handleEvent = () => { const totalEvent =eventData.length};                                           

    return (<><h1>All Event PLATFORM </h1>
             

               <h2>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h2>
               <button onClick={toggleTheme}>Toggle Theme</button>
               </>);
}

export default Header;