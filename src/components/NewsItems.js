// import React, { Component } from "react";
import React from "react";

// export class NewsItems extends Component {
const NewsItems = (props) => {
  // render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="badge text-bg-danger">{source}</span>
        <img
          src={
            !imageUrl
              ? "https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger fw-lighter">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  // }
};

export default NewsItems;
