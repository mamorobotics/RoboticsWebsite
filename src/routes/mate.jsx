import { Form, redirect, Link } from "react-router-dom";
import Body from "./body";

export default function MATE() {
  document.title = "MATE";
  return (
    <>
      <Body sub="MHS Tiger Sharks" mate="true">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ipsum
          unde assumenda ea asperiores commodi dolorum earum consequatur ducimus
          culpa!
        </p>
      </Body>
    </>
  );
}
