import React from "react";

export default function Loading() {    //display loading spinner until we fetch data from api 
  return (
    <div>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
