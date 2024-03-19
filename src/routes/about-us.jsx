import { Form, redirect, Link } from "react-router-dom";
import Body from "./body";

export default function AboutUs() {
  document.title = "About Us";
  return (
    <>
      <Body title="MATE" sub="MHS Tiger Sharks">
        <p>            
          This will be the Mamaroneck Robotics Team’s ninth year competing. The team is based at Mamaroneck High School in Mamaroneck, New York and all of its members are students of the high school. Being a school club is both beneficial and difficult at times as the team is able to meet directly after school, and assembling the team is very easy. However, our team must meet and operate according to our school’s club guidelines. Despite some challenges, our team is made up of a diverse group of dedicated members and has persevered to create a well-functioning robot while encouraging learning, creativity, and leadership along the way. Our team consists of three branches: engineering, programming, and documentation & outreach. The engineers are responsible for designing, modeling and building the robot, while programmers handle the software aspects of the robot. Documentation and outreach focuses on recording the progress the team makes, as well as organizing outreach events and finding sponsors so we can continue to order parts and function as a team. These three branches all work together to create the Mamaroneck Robotics Team.
        </p>
      </Body>
    </>
  );
}