// import React from "react";
import "./about.css";
import mePhoto from "./assets/me.png";

export default function About() {
  const introduction = {
    name: "po-kai chao",
    title: "Software Developer",
    img: mePhoto,
    content:
      "I am a passionate software developer with expertise in building user-centric applications. With a strong focus on clean code and innovative solutions, I aim to create meaningful digital experiences. I love solving complex problems and contributing to impactful projects.",
  };

  return (
    <div className="about-container">
      <div className="about-photo">
        <img src={introduction.img} alt={"my-photo"} />
      </div>

      <div className="about-details">
        <h2 className="about-title">{introduction.title}</h2>
        <p className="about-content">{introduction.content}</p>
      </div>
    </div>
  );
}
