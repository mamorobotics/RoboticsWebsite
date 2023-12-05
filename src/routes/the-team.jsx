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
              description="Max is currently a junior and has been a part of the team for 3 years, mostly contributing to the coding aspect of the team. He is also a part of the Mamaroneck High School sailing team."/>
              <PersonCard src="./assets/team-images/elise-carpenter.jpg" name="Elise Carpenter" title="Head of Engineering" 
              description="[DESCRIPTION]"/>
              <PersonCard src="./assets/team-images/miles-conto.png" name="Miles Contopoulos" title="Head of Coding" 
              description="Miles is currently a junior and has been a part of the team for 3 years, primarily working on the coding branch. He is also a member of the varsity track team and enjoys coding in his free time."/>
              <PersonCard src="./assets/team-images/alondra-avila.jpg" name="Alondra Avila" title="Head of Documentation & Outreach" 
              description="Alondra is a senior and has been a part of the team for 4 years, working and organizing the documentation necessary to compete. Outside of robotics Alondra has a leadership role in MHS women's engineering club."/>
            </div>
            <h1 style={{marginTop: 0}}>Engineering: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/sam-sklar" name="Sam Sklar" title="Head of Assembely" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/nate-metch.png" name="Nate Metsch" title="Engineer"
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
              <PersonCard src="./assets/team-images/sophie-steinberg" name="Sophie Steinberg" title="Engineer" 
              description="Sophie is currently a sophomore at Mamaroneck High School, and second year on the robotics team. She is also on the Mamaroneck Track team and  enjoys spending time with friends and family."/>
              <PersonCard src="./assets/team-images/jonathan-wittick.jpg" name="Jonathan Wittick" title="Engineer" 
              description="Jonathan is currently a junior at Mamaroneck High School and is part if the original science research program where he works on  advancing wind energy. He is also part of the Mamaroneck High School Sailing Team and competitively races sailboats year-round."/>
              <PersonCard src="./assets/team-images/harper-morgan" name="Harper Morgan" title="Engineer" 
              description="Harper is a freshman in the highschool and chose STEAM as his elective this year. He was on the robotics team for three years in the middle school and enjoys practicing Taekwondo as a black belt."/>
              <PersonCard src="./assets/team-images/finn-schweter" name="Finn Schweter" title="Engineer" 
              description="I am currently a freshman at MHS and have no prior experience in engineering. I am not currently on any teams, and I enjoy playing tennis, soccer, and my trumpet."/>
            </div>
            <h1 style={{marginTop: 0}}>Coding: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/mustafa-khan" name="Mustafa Khan" title="Coder" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/dylan-toland.jpg" name="Dylan Toland" title="Coder"
              description="Dylan is currently a Senior at Mamaroneck High School. He is currently in his 2nd year of Robotics. He also enjoys skiing and volunteers during the winter months as a ski patroller at Belleayre Mountain in the Catskills."/>
              <PersonCard src="./assets/team-images/christian-valdehueza.jpg" name="Christian Paul Valdehueza" title="Coder"
              description="Christian Paul, I am a Junior at Mamaroneck High School, and I am in my 2nd year of Computer Science. I Used to be in Track and field last year, this year my only extra school activities is being part of the Computer Science Club this year, one thing I love about coding is to code games or websites after school and having fun with whatever I created."/>
            </div>
            <h1 style={{marginTop: 0}}>Documentation & Outreach: </h1>
            <div className="team-flex">
              <PersonCard src="./assets/team-images/finn-glazer.jpg" name="Finn Glazer" title="Documentation & Outreach"
              description="Finn is a Junior at Mamaroneck High School and has been on the robotics team for two years. He is also a writer for the Globe newspaper and has been taking computer science since Freshman year."/>
              <PersonCard src="./assets/team-images/daniel-mccance" name="Daniel McCance" title="Documentation & Outreach" 
              description="Danny is currently a Junior at Mamaroneck High School who has been in computer science for three years. He also is on the Mamaroneck Debate team and spends time tutoring younger age groups in coding."/>
              <PersonCard src="./assets/team-images/maya-okochu" name="Maya Okochu" title="Documentation & Outreach" 
              description="[DESRIPTION]"/>
              <PersonCard src="./assets/team-images/elise-conto" name="Elise Contopoulos" title="Documentation & Outreach" 
              description="Elise is currently a sophomore and joined the team this year. They enjoy the artsy side of documentation and outreach and in their free time enjoy riding horses."/>
              <PersonCard src="./assets/team-images/sanjana-tata" name="Sanjana Tata" title="Documentation & Outreach" 
              description="Sanjana is a junior at the Mamaroneck High School. She has taken 3 years of computer science and has done research in computationally based genomics. She is also part of the debate time and enjoys reading in her free time."/>
              <PersonCard src="./assets/team-images/sanjana-tata" name="Alex Tombleson" title="Documentation & Outreach"
              description="Alex is currently a Senior at Mamaroneck High School, and is in her fourth year of the original science research program, with a focus on biomedical engineering. She is also the captain of the varsity Track team, and coaches gymnastics."/>
            </div>
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}