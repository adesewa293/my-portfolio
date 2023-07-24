import React from "react";
import { Helmet } from "react-helmet-async";
import "./home.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
        <meta name="description" content="Adesewa Aishat Portfolio" />
        <link rel="canonical" href="/about" />
      </Helmet>
      {/* <img
        src="https://thumbs.dreamstime.com/z/beauty-black-skin-woman-african-ethnic-female-face-young-african-american-model-long-afro-hair-smiling-model-isolated-163819623.jpg?w=992"
        alt="stock female avatar"
      /> */}
      {/* <h1>TECHNICAL EXPERTISE</h1>
      <h2>Languages:</h2>
      <p>HTML/CSS/Javascript, Typescript </p>
      <h2>Frontend specific:</h2>
      <p>NextJS, ReactJS</p>
      <h2>Backend specific:</h2>
      <p>NodeJS </p>
      <h2>Databases</h2> 
      <p>MongoDB</p>
      <h2>Version control</h2>
      <p>Git, Github</p> */}
      <p>A frontend developer, I am passionate about creating elegant user experience and eager to contribute to exciting projects</p>
      <button>TECHNICAL EXPERTISE</button>
    </>
  );
}
