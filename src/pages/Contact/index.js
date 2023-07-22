import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Adesewa Aishat Portfolio" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <p>Email: adesewaaishat@gmail.com</p>
      <p>linkedin: https://www.linkedin.com/in/adesewa-adedokun-461945172/</p>
      <p>Github: github.com/Adesewa293</p>
    </div>
  );
}
