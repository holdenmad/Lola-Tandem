import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
//   const [profiles, setProfiles] = useState(initialProfile);
  const [state, setState] = useState();

  //we can allow any component to have access to anything here if we give them the AppContext
  //here we have allowed the entire app to use AppContext
  //putting the request in the context so that we can use it anywhere
  
  // FETCH ONE USER
  useEffect(() => {
    fetch("http://localhost:5000/user/:id")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);

  //FETCH ALL USERS
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);





//   //DELETE METHOD
//   const kill = (_id) => {
//     fetch(`http://localhost:5000/users/${_id}`, {
//       method: "DELETE",
//     })
//       .then(() => setProfile(profile.filter((item) => item._id !== _id)))
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   //PUT METHOD
//   const update = (_id, value, event) => {
//     event.persist();
//     console.log(value);
//     fetch(`http://localhost:5000/profiles/${_id}`, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...value }),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         const updatedProfile = profile.map((item) => {
//           if (item._id !== _id) return item;
//           return res;
//         });
//         setProfile(updatedProfile);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

  return (
    <div>
      <AppContext.Provider value={{state, setState}}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
