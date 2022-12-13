import React from "react";
import { Helmet } from "react-helmet";

const TitleChange = () => {
  return (    
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gym App</title>
        <link rel="canonical" href="http://localhost:3000/" />
        <meta name="description" content="Testing app" />
      </Helmet>   
  );
};
export default TitleChange;
