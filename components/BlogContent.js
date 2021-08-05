import React from "react";

const BlogContent = ({ title, thumbnail, link, content, categories }) => {
  let createdDiv = document.createElement("div");
  createdDiv.innerHTML = content;

  return (
    <div className="story-area">
      {!thumbnail.includes("stat") && (
        <img
          className="thumbnail"
          src={`${thumbnail}`}
          alt={categories.join(" ")}
          title={title}
        />
      )}
      <div className="desc-area">
        <h3 className="title">{title}</h3>
        <p className="content">
          {createdDiv.getElementsByTagName("p")[0].innerText}..
        </p>
        <a
          className="show-more"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>More...</p>
        </a>
      </div>
      <style jsx>
        {`
          .story-area {
            // border: 1px solid lightgray;
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            margin: 1rem;
            padding: 1rem;
            // box-shadow: 0 0 5px 2px lightgrey;
          }
          .story-area .thumbnail {
            height: 400px;
            flex-shrink: 0;
            border-radius:3px;
          }
          .story-area .desc-area {
            flex-grow: 1;
          }
          .story-area .desc-area .title {
            font-weight: bold;
            margin-bottom: 1rem;
            text-align: center;
          }
          .story-area .desc-area .content {
            text-align: justify;
          }
          .story-area .desc-area .show-more {
            border: none;
            cursor: pointer;
            color: black;
            font-size: 14px;
            text-align: right;
            text-decoration: none;
          }
          .story-area .desc-area .show-more p {
            margin-top: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default BlogContent;
