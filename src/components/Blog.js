import React from "react";
import img1 from "../images/rec-p1.jpg";
import img2 from "../images/rec-p2.jpg";
import img3 from "../images/rec-p3.png";
import mimg1 from "../images/recm-p1.webp";

export default function blog() {
  return (
    <>
    <hr className="hr" />
    <div className="blog">
      <div className="bloga">
        <div className="blog-head">
          <img src={img1} alt="profile pic" className="profile-pic" />
          <p>Jeffrey Harvey</p>
        </div>
        <div className="blog-body">
          <h1>Ugh, Fine. Let’s Talk About Black Crime Rates Again</h1>
          <p>
            Lombroso rejected the idea that crime was a product of social
            inequality or human nature. Instead, he argued that it was a
            throwback to a more primitive stage of our evolution.
          </p>
        </div>
      </div>
      <div className="blogb">
        <img src={mimg1} alt="img" className="blog-img" />
      </div>
    </div>
    <hr className="hr" />
    <div className="blog">
      <div className="bloga">
        <div className="blog-head">
          <img src={img1} alt="profile pic" className="profile-pic" />
          <p>Jeffrey Harvey</p>
        </div>
        <div className="blog-body">
          <h1>Ugh, Fine. Let’s Talk About Black Crime Rates Again</h1>
          <p>
            Lombroso rejected the idea that crime was a product of social
            inequality or human nature. Instead, he argued that it was a
            throwback to a more primitive stage of our evolution.
          </p>
        </div>
      </div>
      <div className="blogb">
        <img src={mimg1} alt="img" className="blog-img" />
      </div>
    </div>
    <hr className="hr" />
    <div className="blog">
      <div className="bloga">
        <div className="blog-head">
          <img src={img1} alt="profile pic" className="profile-pic" />
          <p>Jeffrey Harvey</p>
        </div>
        <div className="blog-body">
          <h1>Ugh, Fine. Let’s Talk About Black Crime Rates Again</h1>
          <p>
            Lombroso rejected the idea that crime was a product of social
            inequality or human nature. Instead, he argued that it was a
            throwback to a more primitive stage of our evolution.
          </p>
        </div>
      </div>
      <div className="blogb">
        <img src={mimg1} alt="img" className="blog-img" />
      </div>
    </div>
    </>
  );
}
