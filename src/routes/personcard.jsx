import { Form, redirect, Link } from "react-router-dom";
import React, { useState } from "react";

export default function PersonCard({src, name, title, description}) {
  return (
    // <>
    //     <div className="personcard">
    //       <img src={src} alt={name} width="200px" height="266px"></img>
    //       <div className="persontitle">
    //         <h1>{name}</h1>
    //         <h2>{title}</h2>
    //         <p>{description}</p>
    //       </div>
    //     </div>
    // </>
    <>
      <div className="wholeCard">
        <div className="personcard">
          <div className="personCardInner">
            <div className="personCardFront">
              <img src={src} alt={name} width="200px" height="266px"></img>
              <h1>{name}</h1>
              <h2>{title}</h2>
            </div>
            <div className="personCardBack">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}