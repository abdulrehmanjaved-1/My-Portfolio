import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { GrDocker } from "react-icons/gr";

function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className=".experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className=".experience__details-icon" />
              <div><h4>CSS</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className=".experience__details-icon" />
              <div><h4>JavaScript</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <RiBootstrapFill className=".experience__details-icon" />
              <div><h4>Boostrap</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <RiReactjsLine className=".experience__details-icon" />
              <div><h4>React</h4>
              <small className="text-light">Experienced</small></div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className=".experience__details-icon" />
              <div><h4>Nodejs</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <SiExpress className=".experience__details-icon" />
              <div><h4>Express</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience__details">
              <SiMongodb className=".experience__details-icon" />
              <div><h4>Mongodb</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <TbBrandMysql className=".experience__details-icon" />
              <div><h4>MySQL</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <GrDocker className=".experience__details-icon" />
              <div><h4>Docker</h4>
              <small className="text-light">Experienced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
