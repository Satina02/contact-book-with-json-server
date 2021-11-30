import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ContactsContext } from '../contexts/ContactsContext';

const Details = () => {
  const params = useParams();
  // console.log(params)
  const { getDetails, details } = useContext(ContactsContext);
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log("details", details);
  return (
    <div className="container text-center"> 
        <div>
          {/* <h4>{details.name}</h4> */}
          <h4>{details.phone}</h4>
          <h4>{details.email}</h4>

          <div>
              <img style={{width:"200px"}} className="m-1" src={details.image} alt=""/>
          </div>
        </div>
    </div>
  );
};
export default Details; 