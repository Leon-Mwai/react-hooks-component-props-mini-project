import React from "react";

function Article({ title, date, preview, readTime }) {
  // Function to calculate 'minutes to read' emoji
  function renderReadTime(readTime) {
    let emoji = "";
    if (readTime < 30) {
      const coffeeCount = Math.ceil(readTime / 5);
      emoji = "".repeat(coffeeCount);
    } else {
      const bentoCount = Math.ceil(readTime / 10);
      emoji = "".repeat(bentoCount);
    }
    return `${emoji} ${readTime} min read`;
  }

  // Default date if no date is passed
  const displayDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
      <p>{renderReadTime(readTime)}</p>
    </article>
  );
}

export default Article;
