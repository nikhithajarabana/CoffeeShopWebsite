import '../Dashboard/Dashboard.scss';
import React from 'react';
import beyonce from '../../Assets/Images/beyonce2.webp';
import theatre from '../../Assets/Images/theatre.jpeg';
import weather from '../../Assets/Images/weather-cartoon.jpeg';




function HomePage(props) {
  return (
    <div className="event-card">  
      <img style = {{width: "398px",height:"170px"}} src={props.image} alt="event" />
      <div className='card-body'>
      <h5 className="card-title" style={{fontSize: "24px", marginBottom: "10px"}}>{props.title}</h5>
      <p className="card-text" style={{fontSize: "12px", marginBottom: "30px"}}>{props.description}</p>
      <a href={props.buttonLink} className="event-btn">{props.buttonText}</a>
      </div>
    </div>
  );
}

function Events(props){
  const Events = [
    {
      title: 'Concerts',
      description: 'Life Is Too Short. Buy those Tickets To The Concert You Have Been Waiting To Go For So Long.We Have Made Your Life Easy By Curating A List Of Concerts Happening In Your Country .All You Have To Do Is Just Click On The Concert You Are Interested In Going And Book Those Tickets. You Dont Have To Browse Different Websites To Browse',
      buttonLink: '/events',
      buttonText: 'Explore',
      image: beyonce
    },
    {
      title: 'About Us',
      description: 'Know more about us here',
      // description: 'Want To Be Mesmerized By Some Performances? Then Going To A Theatre Performance Is The Best Choice. Booking Your Tickets Is Just One Click Away.Theatre  is a collaborative form of performing art that uses live performers, usually actors or actresses, to present the experience of a real or imagined event before a live audience in a specific place, often a stage. The performers may communicate this experience to the audience through combinations of gesture, speech, song, music, and dance.',
      buttonLink: '/journal',
      buttonText: 'Explore',
      image: theatre
    },
    {
      title: 'Weather',
      description: 'Dont Want Sudden Weather Changes To Ruin Your Plans? No Worries! Check Out The Weather Prediction And Plan Accordingly',
      buttonLink: '/weather',
      buttonText: 'Explore',
      image: weather
    }
  ];

  return (
    <div className="jobs-container" style = {{display:"flex", flex:"row", justifyContent:"center", marginTop:"30px"}}>
      {Events.map((job, index) => (  //react.map()
        <HomePage
          key={index}
          title={job.title}
          description={job.description}
          buttonText={job.buttonText}
          buttonLink={job.buttonLink}
          image={job.image}
        />
      ))}
    </div>
  );
}

export default Events;
