import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";
import PersonCard from "./personcard";

export default function TheTeam() {
  return (
    <>
      <div className="full-body">
        <SideBar logo="ftc"/>
        <div className="page-body">
          <TopBar name="The Team" sub="A lot of people all working on one robot"/>
          <article>
            <h1 style={{marginTop: 0}}>Leadership: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/max-lazarus.png" name="Max Lazarous" title="General Manager" 
              description="Max is currently in his 3rd year of computer science and played a role in kick starting the MATE team at the high school once again. Max has also been a part of the FTC robotics club at MHS mostly contributing to the coding aspect of the team. He is also a part of the Mamaroneck High School sailing team, and enjoys spending time on the water."/>
              <PersonCard src="./assets/team-images/miles-conto.png" name="Miles Contopoulos" title="Head of Coding" 
              description="Miles is currently in his 3rd year of computer science and played a key role in designing and creating the code base of our MATE ROV. He enjoys coding in his free time and is a member of the varsity track team. During the winter season, Miles also programs on the MHS FTC robotics team."/>
              <PersonCard src="./assets/team-images/alondra-avila.jpg" name="Alondra Avila" title="Head of Documentation/Outreach" 
              description="Alondra is a junior and currently in her 4th year in the engineering elective in MHS. She has previously been an active member of the FTC team working and organizing the documentation necessary to compete. Outside of robotics Alondra has a leadership role in MHS women's engineering club."/>
              <PersonCard src="./assets/team-images/elise-carpenter.jpg" name="Elise Carpenter" title="Head of Engineering" 
              description="[DESCRIPTION]"/>
            </div>
            <h1 style={{marginTop: 0}}>Engineering: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/sam-sklar" name="Sam Sklar" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/nate-metch" name="Nate Metch" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/graham-welsh" name="Graham Welsh" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/liam-delamora" name="Liam DeLaMora" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/paolo-dapkins" name="Paolo Dapkins" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/alex-lin" name="Alex Lin" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/greg-mirando" name="Greg Mirando" title="Engineer" 
              description="[DESRIPTION]"/>
            </div>
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}