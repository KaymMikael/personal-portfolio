
const ProjectItem = ({ html_url, name, languages, imgURL }) => {
  return (
    <div className="col-12 col-sm-5 col-md-4 col-lg-3">
      <div className="card text-start">
        <img
          src={imgURL}
          alt="Project thumbnail"
          className="img-thumbnail img-fluid"
        />
        <div className="card-body">
          <div className="d-flex gap-2 mb-2">
            {languages.length
              ? languages.map((language) => {
                  return <span className="badge text-bg-secondary" key={language}>{language}</span>;
                })
              : ""}
          </div>
          <h3 className="card-title fs-6">{name}</h3>
          <a href={html_url} className="btn">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
