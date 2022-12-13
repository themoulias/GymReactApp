import React, { useState, useEffect, useCallback } from "react";

import Members from "./components/Members/Members";
import NewMember from "./components/Members/NewMember/NewMember";
import TransformData from "./components/Members/TransformData";
import LoadMembers from "./components/Members/LoadMembers";
import TitleChange from "./components/TitleChange";
import "./components/Members/NewMember/NewMember.css";

const API_URL = "http://localhost:8080/api/gym";

function App() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  // GET: REQUEST FROM API
  const getRequestHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null); // To clear any previous errors
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        // response has also a "status" field whick holds the concrete response status code
        throw new Error("Something went wrong! :( ");
      }
      const data = await response.json();
      const loadedMembers = LoadMembers(data);
      setMembers(loadedMembers);
    } catch (error) {
      //console.log("GET: ERR= " + error);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // POST: REQUEST FROM API
  const postRequestHandler = useCallback(
    async (memberData, addressData, membershipData, paymentData) => {
      //const rawData = transformData(memberData,addressData,membershipData,paymentData);
      const rawData = TransformData(
        memberData,
        addressData,
        membershipData,
        paymentData
      );
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify(rawData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong! :( (POST) ");
        }
        const data = await response.json();
      } catch (error) {
        //console.log("POST: ERR = " + error);
        setError(error.message + " ON POST REQUEST");
      }
      getRequestHandler();
    },
    [getRequestHandler]
  );

  // DELETE: REQUEST FROM API
  const deleteRequestHadndler = useCallback(
    async (id) => {
      try {
        const response = await fetch(API_URL + "/" + id, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Something went wrong! :( (POST) ");
        }
        const data = await response.json();
      } catch (error) {
        //console.log("DEL: ERR = " + error);
        setError(error.message + " ON DELETE REQUEST");
      }
      getRequestHandler();
    },
    [getRequestHandler]
  );

  // PUT: REQUEST FROM API
  const putRequestHandler = useCallback(
    async (id, memberData, addressData, membershipData, paymentData) => {
      //const rawData = transformData(memberData,addressData,membershipData,paymentData);
      const rawData = TransformData(
        memberData,
        addressData,
        membershipData,
        paymentData
      );
      try {
        const response = await fetch(API_URL + "/" + id, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rawData),
        });

        if (!response.ok) {
          throw new Error("Something went wrong! :( (PUT) ");
        }
        const data = await response.json();
      } catch (error) {
        //console.log("PUT ERR: " + error);
        setError(error.message + " ON PUT REQUEST");
      }
      getRequestHandler();
    },
    [getRequestHandler]
  );

  // Get members
  // Runs once on reload page.
  // Loads the Data from API when starts/reloads
  useEffect(() => {
    // only runs once
    console.log("DataBase Loaded");
    getRequestHandler();
  }, [getRequestHandler]);

  // Handle error situations
  let content = <h2 className="member">Found no members.</h2>;

  if (members.length > 0) {
    content = (
      <Members
        items={members}
        onDeleteMember={deleteRequestHadndler} // To return the Id of member who wanna delete
        onEditMember={putRequestHandler} // To return the EditedMemberData
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <h2 className="member">Loading Data...</h2>;
  }

  return (
    <div>
      <h1 className="new-member">Gym Handler</h1>
      {TitleChange()}     
      <NewMember onAddMember={postRequestHandler} />
      {content}
    </div>
  );
}

export default App;
