import React from "react";

const Education = () => {
  return (
    <div className="dark-bg" id="education">
      <section className="container-lg">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="text-white">Education</h1>
            <p className="text-white">
              My education has been a cornerstone of my personal and
              professional growth, shaping my passion for technology and
              problem-solving. Through my studies, I've gained both technical
              knowledge and critical thinking skills, preparing me for a career
              in software development while fostering a lifelong commitment to
              learning.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <ul className="timeline">
                <li className="timeline-item mb-5 text-white">
                  <h5 className="fw-bold">System Technology Institute</h5>
                  <p className="mb-2 fw-bold timeline-highlight">2022 - 2024</p>
                  <p>
                    Information Communication Technology (ICT) - Mobile
                    Application and Web Development
                  </p>
                </li>
                <li className="timeline-item mb-5 text-white">
                  <h5 className="fw-bold">
                    Batangas State University - The National Engineering
                    University
                  </h5>
                  <p className="mb-2 fw-bold timeline-highlight">
                    2024 - Present
                  </p>
                  <p>Bachelor of Science in Information Technology</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
