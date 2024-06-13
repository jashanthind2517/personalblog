import React, { useState } from "react";

const Blog = () => {
  // Sample data for blog posts
  const [posts] = useState([
    {
      image:
        "https://hellocarepod.com/cdn/shop/articles/Press_Mentions_Blog_Headers_-2_750x.jpg?v=1699036859",
      title: "Blog Post Title 1",
      date: "May 31, 2024",
      author: "Jashanpreet K.",
      content:
        "theSkimm, a trusted resource that breaks down the news and trends that impact women, recently spotlighted Carepod. According to this publication, Carepod is one of the best, must-have hydrating products to keep one's skin soft and glowing during the winter season.",
    },
    {
      image:
        "https://hellocarepod.com/cdn/shop/articles/press_the-daily-beast_1080x.jpg?v=1699035326",
      title: "Blog Post Title 2",
      date: "May 31, 2024",
      author: "Jashanpreet K.",
      content:
        "Easily sterilized to prevent germs, mold, and bacteria, so there’s no need to spend extra money on filters every month.",
    },
    {
      image:
        "https://hellocarepod.com/cdn/shop/files/9.jpg?v=1704834183&amp;widt700",
      title: "Blog Post Title 3",
      date: "May 31, 2024",
      author: "Jashanpreet K.",
      content:
        "This award-winning brand offers a line of FDA-cleared humidifiers that are designed to be easy to clean and maintain.",
    },
    {
      image:
        "https://hellocarepod.com/cdn/shop/articles/2_1080x.jpg?v=1703185721",
      title: "Blog Post Title 4",
      date: "May 31, 2024",
      author: "Jashanpreet K.",
      content:
        "This award-winning brand offers a line of FDA-cleared humidifiers that are designed to be easy to clean and maintain.",
    },
    {
      image:
        "https://hellocarepod.com/cdn/shop/articles/Press-Mention_SheKnows_2023_360x.jpg?v=1696453101",
      title: "Blog Post Title 5",
      date: "May 31, 2024",
      author: "Jashanpreet K.",
      content:
        "SheKnows, a trusted parenting resource, has featured Carepod as a chic, family must-have humidifier, especially during the cold & flu season. In addition to the regular trifecta of tissues, cold meds, and hand soap, SheKnows recommended stocking up on Carepod humidifiers to alleviate any symptoms that kids (and parents!) might experience throughout the fall and winter months.",
    },
    {
      image:
        "https://hellocarepod.com/cdn/shop/articles/Press-Mention_The-Good-Trade_2023_750x.jpg?v=1696450699",
      title: "Blog Post Title 6",
      date: "May 31, 2024",
      author: "Jashanpreet K.",
      content:
        "The Good Trade, an independent lifestyle website focused on sustainability, slow living, and self-care, recently spotlighted Carepod as one of the best, eco-friendly humidifiers of 2023. While big box humidifiers are often popular, they often consume large amounts of electricity, or require an endless supply of plastic filters.",
    },
  ]);

  return (
    <main className="blog-posts">
      {posts.map((post, index) => (
        <article className="post" key={index}>
          <img
            src={post.image}
            alt={`Descriptive Image ${index + 1}`}
            className="post-image"
          />
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            Published on: <span className="post-date">{post.date}</span> by{" "}
            <span className="post-author">{post.author}</span>
          </div>
          <p className="post-text">{post.content}</p>
          <hr></hr>
        </article>
      ))}
    </main>
  );
};

export default Blog;
