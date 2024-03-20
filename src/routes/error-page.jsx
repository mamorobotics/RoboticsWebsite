import { Form, redirect, Link } from "react-router-dom";
import Body from "./body";

export default function Error() {
  document.title = "Error";
  return (
    <>
      <Body sub="You shouldnt be here...">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ipsum
          unde assumenda ea asperiores commodi dolorum earum consequatur ducimus
          culpa!
        </p>
      </Body>
    </>
  );
}
