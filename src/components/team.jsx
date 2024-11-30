import React from 'react'
import './team.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Maria Rangwala',
    role: 'Frontend Developer',
    description: 'Hello this is Maria Rangwala',
    imageUrl: 'maria.jpg',
    linkedin: 'https://in.linkedin.com/in/mariaarangwala',
    github: 'https://github.com/maria-rangwala'
  },
  {
    name: 'Mohit Gupta',
    role: 'Backend Developer',
    description: 'Hello this is John Doe',
    imageUrl: 'https://i.imgur.com/2DhmtJ4.jpg',
    linkedin: 'https://www.linkedin.com/in/mohit-gupta09',
    github: 'https://github.com/mohitgupta09'
  },
  {
    name: 'Prakhar Patni',
    role: 'Fullstack Developer',
    description: 'Hello this is Maria Rangwala',
    imageUrl: 'prakhar.jpg',
    linkedin: 'https://www.linkedin.com/in/prakhar-patni-177607277',
    github: 'https://github.com/PrakharPatni08'
  },
  {
    name: 'Maniya Jeswani',
    role: 'Backend Developer',
    description: 'Hello this is John Doe',
    imageUrl: 'maniya.jpg',
    linkedin: 'https://www.linkedin.com/in/maniya-jeswani-a48083256',
    github: 'https://github.com/Maniyajeswani'
  }
];

const TeamCard = ({ name, role, description, imageUrl, linkedin, github }) => {
  return (
      <div className="card">
        <img src={imageUrl} className="card__image" alt={name} />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <div className="card__header-text">
              <h3 className="card__title">{name}</h3>            
              <span className="card__status">{role}</span>
            </div>
          </div>
          <p className="card__description">{description}</p>
          <div className="card__socials">
            <a href={linkedin} target='blank'><FaLinkedin color="black" size="1.5em" /></a>
            <a href={github} target='blank'><FaGithub color="black" size="1.5em" /></a>
          </div>
        </div>
      </div>      
  );
};

function Team() {
  return (
    <div className='team'>
      <strong>Meet the Team</strong>
      <div className="cards">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            imageUrl={member.imageUrl}
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
