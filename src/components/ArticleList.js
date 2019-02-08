import React from "react";

function ArticleList(props) {
  const articles = props.articles.map(({ title, description, url }) => {
    return (
      <li key={url}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
          <p>{description}</p>
        </a>
      </li>
    );
  });

  return <ol>{articles}</ol>
}

export default ArticleList;
