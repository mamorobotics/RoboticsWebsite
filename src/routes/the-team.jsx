import { Form, redirect, Link } from "react-router-dom";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import BottomBar from "./bottombar";
import PersonCard from "./personcard";

export default function TheTeam() {
  document.title = "The Team";
  return (
    <>
      <div className="bg-black dark:bg-black flex text-black dark:text-white py-2 space-x-2 h-screen">
        <SideBar logo="ftc"/>
        <div className="space-y-2">
          <TopBar name="The Team" sub="A lot of people all working on one robot"/>
          <article className="mr-2 p-2 bg-[#272727] rounded-2xl">
            <h1 style={{marginTop: 0}}>Leadership: </h1>
            <div className="team-flex">
              <PersonCard src={"https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/max-lazarus.png"} name="Max Lazarus" title="General Manager" 
              description="Max is currently a junior and has been a part of the team for 3 years, mostly contributing to the coding aspect of the team. He is also a part of the Mamaroneck High School sailing team."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/elise-carpenter.jpg" name="Elise Carpenter" title="Head of Engineering" 
              description="[DESCRIPTION]"/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/miles-conto.jpg" name="Miles Contopoulos" title="Head of Coding" 
              description="Miles is currently a junior and has been a part of the team for 3 years, primarily working on the coding branch. He is also a member of the varsity track team and enjoys coding in his free time."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/alondra-avila.jpg" name="Alondra Avila" title="Head of Documentation & Outreach" 
              description="Alondra is a senior and has been a part of the team for 4 years, working and organizing the documentation necessary to compete. Outside of robotics Alondra has a leadership role in MHS women's engineering club."/>
            </div>
            <h1 style={{marginTop: 0}}>Engineering: </h1>
            <div className="team-flex">
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/graham-welsh" name="Graham Welsh" title="Head of Assembely" 
              description="[DESRIPTION]"/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/sam-sklar" name="Sam Sklar" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/nate-metch.png" name="Nate Metsch" title="Engineer"
              description="Nate is a Junior at MHS who is in the engineering program. During the FTC season he helps build the robot and 3D prints some of the parts that we designed for the robot. Outside of school he likes to 3D print a lot."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/liam-delamora" name="Liam DeLaMora" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/paolo-dapkins" name="Paolo Dapkins" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/alex-lin.jpg" name="Alex Lin" title="Engineer" 
              description="Alex is currently a Junior at Mamaroneck High school and this is his 3rd year doing engineering. Alex is also part of the Mamaroneck High School Jazz band and track and field team. His favorite event is the 200m."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/greg-mirando" name="Greg Mirando" title="Engineer" 
              description="[DESRIPTION]"/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/sophie-steinberg" name="Sophie Steinberg" title="Engineer" 
              description="Sophie is currently a sophomore at Mamaroneck High School, and second year on the robotics team. She is also on the Mamaroneck Track team and  enjoys spending time with friends and family."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/jonathan-wittick.jpg" name="Jonathan Wittick" title="Engineer" 
              description="Jonathan is currently a junior at Mamaroneck High School and is part if the original science research program where he works on  advancing wind energy. He is also part of the Mamaroneck High School Sailing Team and competitively races sailboats year-round."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/harper-morgan" name="Harper Morgan" title="Engineer" 
              description="Harper is a freshman in the highschool and chose STEAM as his elective this year. He was on the robotics team for three years in the middle school and enjoys practicing Taekwondo as a black belt."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/finn-schweter" name="Finn Schweter" title="Engineer" 
              description="I am currently a freshman at MHS and have no prior experience in engineering. I am not currently on any teams, and I enjoy playing tennis, soccer, and my trumpet."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/mikey-mcmanus.jpg" name="Mikey McManus" title="Engineer" 
              description="Mikey is a Junior at Mamaroneck High School and in the 3rd year of engineering. He is also apart of the Mamaroneck High School, Cross Country, Hockey and Golf teams."/>
            </div>
            <h1 style={{marginTop: 0}}>Coding: </h1>
            <div className="team-flex">
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/mustafa-khan.jpg" name="Mustafa Khan" title="Coder" 
              description="Mustafa is currently a sophmore at Mamaroneck High School, in his second year of computer science and played a key role in the autonomous programs. Mustafa is also part of the MATE robotics club, in which he mostly contributed to the control software and CAD of the ROV. Outside of FTC, Mustafa is part of the MHS debate team, and is part of other computer science related initiatives."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/dylan-toland.jpg" name="Dylan Toland" title="Coder"
              description="Dylan is currently a Senior at Mamaroneck High School. He is currently in his 2nd year of Robotics. He also enjoys skiing and volunteers during the winter months as a ski patroller at Belleayre Mountain in the Catskills."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/christian-valdehueza.jpg" name="Christian Paul Valdehueza" title="Coder"
              description="Christian Paul, I am a Junior at Mamaroneck High School, and I am in my 2nd year of Computer Science. I Used to be in Track and field last year, this year my only extra school activities is being part of the Computer Science Club this year, one thing I love about coding is to code games or websites after school and having fun with whatever I created."/>
            </div>
            <h1 style={{marginTop: 0}}>Documentation & Outreach: </h1>
            <div className="team-flex">
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/finn-glazer.jpg" name="Finn Glazer" title="Documentation & Outreach"
              description="Finn is a Junior at Mamaroneck High School and has been on the robotics team for two years. He is also a writer for the Globe newspaper and has been taking computer science since Freshman year."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/daniel-mccance" name="Daniel McCance" title="Documentation & Outreach" 
              description="Danny is currently a Junior at Mamaroneck High School who has been in computer science for three years. He also is on the Mamaroneck Debate team and spends time tutoring younger age groups in coding."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/maya-okochu.png" name="Maya Okochu" title="Documentation & Outreach" 
              description="Maya is a junior at Mamaroneck High School, where she is in her third year of computer science. In her free time, she enjoys listening to podcasts and volunteering for environmental causes."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/elise-conto" name="Elise Contopoulos" title="Documentation & Outreach" 
              description="Elise is currently a sophomore and joined the team this year. They enjoy the artsy side of documentation and outreach and in their free time enjoy riding horses."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/sanjana-tata.png" name="Sanjana Tata" title="Documentation & Outreach" 
              description="Sanjana is a junior at the Mamaroneck High School. She has taken 3 years of computer science and has done research in computationally based genomics. She is also part of the debate time and enjoys reading in her free time."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/aelx-tombleson" name="Alex Tombleson" title="Documentation & Outreach"
              description="Alex is currently a Senior at Mamaroneck High School, and is in her fourth year of the original science research program, with a focus on biomedical engineering. She is also the captain of the varsity Track team, and coaches gymnastics."/>
              <PersonCard src="https://raw.githubusercontent.com/mamorobotics/RoboticsWebsite/main/assets/team-images/maria-aguilera.jpg" name="Maria K. Torres Aguilera" title="Documentation & Outreach"
              description="Maria is currently a sophomore at Mamaroneck High School, and is in her 2nd year of robotics. She is also part of the Mamaroneck High School varsity swim team, and enjoys doing science research in OSR."/>
            </div>
          </article>
          <BottomBar />
        </div>
      </div>
    </>
  );
}