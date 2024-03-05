import React from "react";
import { useParams } from "react-router-dom";
import { projectContent } from "../project-content/project-content.component";

import "./individual-project-content.styles.scss";
const IndividualProject = () => {
  const { id } = useParams();
  const project = projectContent.find((x) => x.id === `/project/${id}`);

  return (
    <div className="individual-project-content-component">
      <div className="title-container">
        <div className="title">{project.title}</div>
      </div>
      <div className="description-container">
        <div className="description">
          {project.description
            .filter((item, index) => index < 2)
            .map((item) => (
              <span>{item}</span>
            ))}
        </div>
        <div className="images">
          <div className="first-images-container">
            {project.images
              .filter((item, index) => index < 2)
              .map((item, index) => (
                <img src={item} alt={index} />
              ))}
          </div>
        </div>
      </div>
      {project.description.filter((item, index) => index > 1 && index < 4)
        .length ? (
        <div className="description-container">
          {project.description.filter(
            (item, index) => index > 1 && index < 4
          ) ? (
            <div
              className={`description ${
                project.images.filter((item, index) => index > 1 && index < 4)
                  .length
                  ? "negative"
                  : ""
              }`}
            >
              {project.description
                .filter((item, index) => index > 1 && index < 4)
                .map((item) => (
                  <span>{item}</span>
                ))}
            </div>
          ) : (
            ""
          )}

          {project.images.filter((item, index) => index > 1 && index < 4) ? (
            <div className="images mt-5">
              <div
                className={`${
                  project.images.length === 3 ? "three" : ""
                } first-images-container`}
              >
                {project.images
                  .filter((item, index) => index > 1 && index < 4)
                  .map((item, i) => (
                    <img
                      className={`${
                        project.images.length === 3 && i === 0 ? "three" : ""
                      }`}
                      src={item}
                      alt={i}
                    />
                  ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default IndividualProject;
