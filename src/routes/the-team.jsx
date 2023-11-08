import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";
import PersonCard from "./personcard";

export default function TheTeam() {
  document.title = "The Team";
  return (
    <>
      <div className="full-body">
        <SideBar logo="ftc"/>
        <div className="page-body">
          <TopBar name="The Team" sub="A lot of people all working on one robot"/>
          <article>
            <h1 style={{marginTop: 0}}>Leadership: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/max-lazarus.png" name="Max Lazarus" title="General Manager" 
              description="Max is currently a junoir and has been a part of the team for 3 years, mostly contributing to the coding aspect of the team. He is also a part of the Mamaroneck High School sailing team."/>
              <PersonCard src="./assets/team-images/alondra-avila.jpg" name="Alondra Avila" title="Head of Documentation & Outreach" 
              description="Alondra is a senior and has been a part of the team for 4 years, working and organizing the documentation necessary to compete. Outside of robotics Alondra has a leadership role in MHS women's engineering club."/>
              <PersonCard src="./assets/team-images/elise-carpenter.jpg" name="Elise Carpenter" title="Head of Engineering" 
              description="[DESCRIPTION]"/>
              <PersonCard src="./assets/team-images/miles-conto.png" name="Miles Contopoulos" title="Head of Coding" 
              description="Miles is currently a junior and has been a part of the team for 3 years, primarily working on the coding branch. He is also a member of the varsity track team and enjoys coding in his free time."/>
            </div>
            <h1 style={{marginTop: 0}}>Engineering: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/sam-sklar" name="Sam Sklar" title="Head of Assembely" 
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
            <h1 style={{marginTop: 0}}>Coding: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/mustafa-khan" name="Mustafa Khan" title="Coder" 
              description="[DESRIPTION]"/>
            </div>
            <h1 style={{marginTop: 0}}>Documentation & Outreach: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/chloe-glazer" name="Chloe Glazer" title="Documentation & Outreach" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/daniel-mccance" name="Daniel McCance" title="Documentation & Outreach" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/maya-okochu" name="Maya Okochu" title="Documentation & Outreach" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/elise-conto" name="Elise Contopoulos" title="Documentation & Outreach" 
              description="Elise is currently a sophomore and joined the team this year. They enjoy the artsy side of documentation and outreach and in their free time enjoy riding horses."/>
              <PersonCard src="./assets/team-images/sanjana-tata" name="Sanjana Tata" title="Documentation & Outreach" 
              description="[DESRIPTION]"/>
            </div>
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}