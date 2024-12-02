import React from "react";
import "./About.css";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description }) => {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section>
      <h2>About Us</h2>
      <div className="team">
        <TeamMember
          name="Aryan Bhadhrecha"
          role="Developer"
          description="I am from Indore and did BTech in 
          Electronics and Communication Engineering (ECE) from MNIT Jaipur. 
          I had done my internship at ISRO, which is helped me 
          gain practical experience in electronics. I have developed a 
          keen interest in web development, particularly React, and 
          aim to build my career as a React developer. I have been 
          learning technologies like TypeScript and Redux to enhance
          my skills. My goal is to work on real-world projects and 
          contribute to innovative web applications in the future."
        />
        <TeamMember
          name="Priyanshu Sharma "
          role="Developer"
          description="Focused on backend development with Node.js and MongoDB."
        />
      </div>
    </section>
  );
};

export default About;
