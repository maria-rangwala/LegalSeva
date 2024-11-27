import React from 'react'
import './feature.css';

const feature = [
    {
      title: 'Easy onboarding process',
      description: 'Join our e-marketplace in a few simple steps and start connecting with clients.',
      imageUrl:'file:///C:/Users/rangw/OneDrive/Desktop/LegalSeva/public/user.svg'
    },
    {
      title: 'Simplified workflow',
      description: 'Our platforms streamlines the process of offering legal services, allowing you to focus on providing high-quality services to your clients.',
      imageUrl:'file:///C:/Users/rangw/OneDrive/Desktop/LegalSeva/public/user.svg'
    },
    {
      title: 'Incentive for legal professionals',
      description: 'We offer various incentives to legal professionals who offer their services on our platform.',
      imageUrl:'file:///C:/Users/rangw/OneDrive/Desktop/LegalSeva/public/user.svg'
    },
  ];
  
  const Features = ({ title, description, imageUrl }) => {
    return (
        <div className='features'>
        <div className="feature-image" style={{ backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className="feature-content">
            <h4>FEATURE</h4>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-description">{description}</p>
        </div>
        </div>
    );
  };

function Feature() {
  return (
    <div className='feature-section'>
    <div className="feature">
      {feature.map((features, index) => (
        <Features
          key={index}
          title={features.title}
          description={features.description}
          imageUrl={features.imageUrl}
        />
      ))}
    </div>
  </div>
  )
}

export default Feature;
