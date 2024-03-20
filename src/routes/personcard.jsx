import { Form, redirect, Link } from "react-router-dom";
import React, { useState } from "react";

export default function PersonCard({ src, name, title, description }) {
  return (
    <>
      <div className="shadow-2xl">
        <div className="group relative w-full overflow-hidden rounded-2xl">
          <img
            className="h-full w-full brightness-75 group-hover:brightness-50"
            src={src}
            alt={name}
          ></img>
          <div className="absolute bottom-4 w-full text-center group-hover:hidden">
            <h1 className="text-2xl">{name}</h1>
            <h2>{title}</h2>
          </div>
          <div className="absolute bottom-4 hidden w-full p-2 text-center group-hover:block">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
