import React, { useState, useEffect } from "react";
import Review from "../data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

export default function App() {
  const [reviewData, setReviewData] = useState(Review);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviewData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviewData]);

  //automatic slide
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <h1 className="title">Reviews</h1>
      <section className="main-con">
        {/* left button */}
        <button
          className="btn btn-left"
          onClick={() =>
            index === 0 ? setIndex(reviewData.length - 1) : setIndex(index - 1)
          }
        >
          <FiChevronLeft className="nav-icon" />
        </button>
        {/* slider container */}
        <div className="slider-con">
          {reviewData.map((rev, revIndex) => {
            let position = "inactive";
            if (revIndex === index) {
              position = "active";
            }
            if (
              revIndex === index - 1 ||
              (index === 0 && revIndex === reviewData - 1)
            ) {
              position = "inactiveLeft";
            }
            return (
              <div className={`review-con ${position}`} key={revIndex}>
                <div className="image-con">
                  <img
                    src={rev.image}
                    alt="review pic"
                    className="review-image"
                  />
                </div>
                <div className="review-detail-con">
                  <p className="name">{rev.name}</p>
                  <p className="review-title">{rev.title}</p>
                </div>
                <p className="quote-text">{rev.quote}</p>
                <FaQuoteRight className="quote-icon" />
              </div>
            );
          })}
        </div>

        {/* right button */}
        <button
          className="btn btn-right"
          onClick={() => {
            index === reviewData.length - 1 ? setIndex(0) : setIndex(index + 1);
          }}
        >
          <FiChevronRight className="nav-icon" />
        </button>
      </section>
    </>
  );
}
