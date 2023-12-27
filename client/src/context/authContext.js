import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async(inputs) => {
    //TO DO
    const res= await axios.post("https://mediagram-social-app.onrender.com/api/auth/login",inputs,{
      withCredentials:true
    });
   setCurrentUser(res.data)
  };
  // const login = async (inputs) => {
  //   try {
  //     const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
  //       withCredentials: true,
  //     });
  //     setCurrentUser(res.data);
  //   } catch (error) {
  //     console.error("Error during login:", error);
  
  //     // Handle specific error cases
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       console.error("Server responded with error status:", error.response.status);
  //       console.error("Server error data:", error.response.data);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       console.error("No response received from the server");
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.error("Error setting up the request:", error.message);
  //     }
  
  //     // Set an appropriate error state or take additional actions based on the error
  //   }
  // };
  

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};