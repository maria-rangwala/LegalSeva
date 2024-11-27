import React from "react";
import "./card.css"; // Link to your CSS file

const reviews = [
  {
    title: 'Mediator John Doe',
    description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."',
  },
  {
    title: 'Advocate Priya Sharma',
    description: '"LegalSeva has significantly increased my clientele and made managing my services so much easier!"',
  },
  {
    title: 'Arbitrator Arun Verma',
    description: '"A reliable platform that connects me with clients from all over the country. Highly recommended!"',
  },
  {
    title: 'Notary Anjali Mehta',
    description: '"The tools provided by LegalSeva make managing everything so seamless. A game-changer for my practice."',
  },
];

const Card = ({ title, description }) => {
  return (
    <div className="card-container">
      <div className="card-image">
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className='lsp-review'>
      <strong className='review-title'>Reviews from our users</strong>
      <p className='review-subtitle'>Legal Professionals from all over India use our product. Read their review here! </p>
      <div className="reviews">
        {reviews.map((review, index) => (
          <Card
            key={index}
            title={review.title}
            description={review.description}
          />
        ))}
      </div>
    </div>
      );
};

export default Reviews;
