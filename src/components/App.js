import React from "react";
import Review from "../data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

export default function App() {
  const review1 = Review[0];
  return (
    <>
      <h1 className="title">Reviews</h1>
      <section className="main-con">
        <button className="btn btn-left"><FiChevronLeft className="nav-icon"/></button>
        <div className="review-con">
          <div className="image-con">
            <img src={review1.image} alt="review pic" className="review-image"/>
          </div>
          <div className="review-detail-con">
            <p className="name">{review1.name}</p>
            <p className="review-title">{review1.title}</p>
          </div>
          <p className="quote-text">{review1.quote}</p>
          <FaQuoteRight className="quote-icon"/>
        </div>
        <button className="btn btn-right"><FiChevronRight className="nav-icon"/></button>
      </section>
    </>
  );
}
