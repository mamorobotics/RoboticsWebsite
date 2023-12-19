import { Form, redirect, Link } from "react-router-dom";
import React, { useState } from "react";

export default function PersonCard({src, name, title, description}) {
  return (
    <>
      <div className="personcard">
        <div className="personCardInner">
          <div className="personCardFront">
            <img src={src} alt={name} max-width="200px" max-height="266px" width="100%" height="100%"></img>
            <div className="personCardTitle">
              <h1>{name}</h1>
              <h2>{title}</h2>
            </div>
          </div>
          <div className="personCardBack">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}