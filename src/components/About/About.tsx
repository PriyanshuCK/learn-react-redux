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
      <p className="role">
        <strong>Role:</strong> {role}
      </p>
      <p>{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="about-us">
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
          description="I am Priyanshu Sharma, a software engineer based in Gurgaon with a degree in Metallurgical and Materials Engineering from MNIT Jaipur. I have a strong passion for programming and web development and am always eager to learn and enhance my skills. My creative interests include graphic designing, motion graphics, and building interactive and functional web applications. I enjoy working with tools like DaVinci Resolve Fusion, Motion Canvas, and GLSL Shaders to create visually appealing designs and projects."
        />
      </div>
    </section>
  );
};

export default About;
