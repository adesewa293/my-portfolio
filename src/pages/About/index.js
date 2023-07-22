import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Adesewa Aishat Portfolio" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <p>
        As a passionate software developer, I specialize in frontend
        technologies, with a keen focus on HTML, CSS, and JavaScript. I embrace
        the power of modern frameworks like React and Next.js, leveraging
        TypeScript to enhance code reliability and maintainability. With
        hands-on experience in MongoDB and Express.js, I excel in building
        robust and responsive web applications. My love for clean code and
        attention to detail drives me to create seamless user experiences and
        visually appealing interfaces. Collaborating with talented teams, I am
        always eager to explore new challenges and embrace emerging
        technologies. My goal is to craft innovative solutions that leave a
        positive impact on users while continuously refining my skills and
        staying up-to-date with industry trends. Let's connect and bring our
        shared passion for frontend development to build the next generation of
        captivating web applications together! 🚀🌐
      </p>
    </>
  );
}
