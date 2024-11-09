"use client";
import React from "react";
import Image from "next/image";
import display from "@/public/display.jpg"; // Make sure this path is correct

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content">
        <div className="text-section">
          <h1 className="title">
            Hello! Welcome to My Portfolio
          </h1>
          <p className="subtitle">
            I'm Rimsha Ansari. <br />
            I'm the daughter of Ayaz Ansari. <br />
            I'm a Frontend Web Developer.
          </p>
        </div>

        <div className="image-section">
          <div className="image-wrapper">
            <Image
              src={display}
              alt="Profile"
              width={600}
              height={600}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
