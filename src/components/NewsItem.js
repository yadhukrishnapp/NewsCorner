import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3 col d-flex justify-content-center">
        <div
          className="card text-white bg-dark mb-3"
          style={{ width: "22rem", height: "35rem" }}
        >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg" style={{left: "50%", zIndex: "1", color: "black", backgroundColor: "#d5d4d4"}}>
                {source}
              </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAuknDr8KVZRcTOrZhTGUB-1Yck64K2bxxg&usqp=CAU"
            }
            className="card-img-top"
            alt="..."
            style={{ height: "667px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small
                className="text"
                style={{ color: "#41b56a", fontWeight: "bold" }}
              >
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-danger"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;