import React from "react";
import "./card.css"; // Link to your CSS file

const Card = () => {
  return (
    <div className='lsp-review'>
    <strong className='review-title'>Reviews from our users</strong>
    <p className='review-subtitle'>Legal Professionals from all over India use our product. Read their review here! </p>
    <div className="reviews">
    <div className="card-container">
    <div className="card-image">
    </div>
    <div className="card-content">
      <h3 className="card-title">username</h3>

      <p className="card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptas distinctio nesciunt quas non animi.
      </p>
    </div>
  </div>
  <div className="card-container">
      <div className="card-image">
      </div>
      <div className="card-content">
        <h3 className="card-title">username</h3>

        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptas distinctio nesciunt quas non animi.
        </p>
      </div>
    </div>
    <div className="card-container">
    <div className="card-image">
    </div>
      <div className="card-content">
        <h3 className="card-title">username</h3>

        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptas distinctio nesciunt quas non animi.
        </p>
      </div>
    </div>
    <div className="card-container">
    <div className="card-image">
    </div>
    <div className="card-content">
      <h3 className="card-title">username</h3>

      <p className="card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptas distinctio nesciunt quas non animi.
      </p>
    </div>
  </div>
  </div>
    </div>
      );
};

export default Card;
