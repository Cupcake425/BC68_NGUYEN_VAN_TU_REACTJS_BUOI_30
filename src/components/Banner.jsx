import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container mx-auto">
        <div className="banner_content">
          <h1>A warm welcome!</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button>Call to action</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
