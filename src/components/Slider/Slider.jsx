import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS
import "./ReviewCarousel.css"; // Import your custom styles

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "This service changed my life! Highly recommended.",
  },
  {
    id: 2,
    name: "Bob Smith",
    text: "Amazing experience, very professional and helpful.",
  },
  {
    id: 3,
    name: "Charlie Brown",
    text: "Great support and guidance throughout the process.",
  },
  {
    id: 4,
    name: "Diana Prince",
    text: "I feel so much better thanks to this service!",
  },
];

const ReviewCarousel = () => {
  return (
    <div className="review-carousel">
      <h2>What Our Clients Say</h2>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 6000,
          pagination: true,
          arrows: false,
        }}
      >
        {reviews.map((review) => (
          <SplideSlide key={review.id}>
            <div className="review-slide">
              <p>{review.text}</p>
              <h4>{review.name}</h4>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ReviewCarousel;
