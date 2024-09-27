import { useState } from "react";
import GradPicSHS from "../assets/images/GradPicSHS.png";

const About = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:altiz.khaim.c@gmail.com?subject=${subject}&body=${body}`;
    setEmail("");
    setSubject("");
    setBody("");
  };

  return (
    <div className="dark-bg" id="about">
      <section className="container-lg text-white">
        <div className="row row-gap-3 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="fs-2">
              I'm<span className="ms-2 display-4 name fw-bold">Khaim</span>
            </p>
            <p>
              I am a student aspiring to become a full-stack developer, skilled
              in front-end technologies like HTML, CSS, JavaScript, React.js,
              and Bootstrap, as well as back-end development with Java and
              Node.js. I'm eager to gain practical experience and grow in
              full-stack development.
            </p>
            <div className="socials d-flex gap-3 justify-content-center justify-content-lg-start">
              <a
                href="https://github.com/KaymMikael"
                className="text-white fs-5 social-link"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.facebook.com/Khaim.19/"
                className="text-white fs-5 social-link"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/khaim-michael-altiz-291b8732a/"
                className="text-white fs-5 social-link"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <button
              className="btn mt-3"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact me
            </button>
          </div>
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end d-none d-lg-flex">
            <img
              src={GradPicSHS}
              className="rounded w-50 graduation-picture"
              alt="Khaim's Senior High School Graduation Picture"
            />
          </div>
        </div>
      </section>
      {/* Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="contactModalLabel">
                Contact Me
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  minLength={5}
                  className="form-control mt-3"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="form-control mt-3"
                  placeholder="Body"
                ></textarea>
                <button className="btn mt-3" type="submit">
                  Send
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
