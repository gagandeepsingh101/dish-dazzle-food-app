import { createContext } from "react";

// store data globally for all components related to user and notification
export const  UserContext = createContext(
    {
        userName:"default",
        loginStatus:false,
        noticationMessage:""
    }
);
