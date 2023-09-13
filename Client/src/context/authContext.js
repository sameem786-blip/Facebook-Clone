import { createContext, useEffect, useState } from "react";
import profilepic from "../assets/images/profile.jpg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "Sameem Abbas",
            profilePic: "https://images.pexels.com/photos/17551621/pexels-photo-17551621/free-photo-of-child-sitting-on-cropland-field.jpeg?auto=compress&cs=tinysrgb&w=600",
        })
    };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

     return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};