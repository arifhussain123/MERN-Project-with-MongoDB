import React from "react";
// import "../App.css";
const ErrorPages = () => {
  return (
    <>
      <div className="notfound">
        <div className="notfound-404 aligen-items-center border border-radius">
          <h1>404</h1>
          <h2>Oops! Page not found</h2>
          <p>
            This page you are looking for minght have been revomved had its name
            chagned or is temporarily unavailbale.
          </p>
        </div>
        <a href="/">Go To Homepage</a>
      </div>
      {/*   
        <h1> 404</h1>
        <h2> We are sorry, pages not found</h2>
        
        <button> Back to Home pages</button>
     */}
    </>
  );
};
export default ErrorPages;
