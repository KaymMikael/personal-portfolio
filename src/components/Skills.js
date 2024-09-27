import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNode,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiAxios } from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-white" id="skills">
      <section className="container-lg">
        <h1 className="text-center">Skills</h1>
        <p className="text-muted text-center">
          Throughout my journey as a developer, I’ve acquired a variety of
          skills ranging from front-end technologies to back-end development,
          allowing me to create responsive, dynamic, and user-friendly web
          applications.
        </p>
        <div className="row justify-content-center row-gap-2">
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaHtml5 className="fs-1" />
              <p>HTML</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaCss3Alt className="fs-1" />
              <p>CSS</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <IoLogoJavascript className="fs-1" />
              <p>JavaScript</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaReact className="fs-1" />
              <p>React.js</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center row-gap-2 mt-2">
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaBootstrap className="fs-1" />
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaNode className="fs-1" />
              <p>Node.js</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaJava className="fs-1" />
              <p>Java</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <SiMysql className="fs-1" />
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center row-gap-2 mt-2">
          <div className="col-lg-2 col-sm3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <FaGitAlt className="fs-1" />
              <p>Git</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm3">
            <div className="skill text-white d-flex flex-column align-items-center gap-3 pt-3 card-bg rounded">
              <SiAxios className="fs-1" />
              <p>AXIOS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
