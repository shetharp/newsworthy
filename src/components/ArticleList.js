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

  return (
    <section>
      <ol>{articles}</ol>
      <div>
        <p>Page: {props.page}</p>
        <button disabled={props.query === '' || props.page <= 1 ? true : false} onClick={e => props.onPageChange(false)}>Previous Page</button>
        <button disabled={props.query === '' ? true : false} onClick={e => props.onPageChange(true)}>Next Page</button>
      </div>
    </section>
  );
}

export default ArticleList;
