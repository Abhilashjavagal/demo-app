import {useState } from "react";
import "./AboutUs.css";
import Celebrations from "../components/Celebrations";
import WorkLife from "../components/WorkLife";
import FunAndMore from "../components/FunAndMore";
import "../components/WorkLife.css";
import "../components/Celebrations.css";
import "../components/FunAndMore.css";
import Navbar from "../components/Navbar";

const AboutUs = () => {

    const [selectedComponent, setSelectedComponent] = useState(WorkLife);

    const handleButtonClick = (component) => {
      setSelectedComponent(component);
    };
   
    const teamData = [
        {
            name: "Krishnamurthy NT",
            description: "Database Technologies expert with over 28+ years of industry experience.",
            role: "Co-Founder and COO",
            imgSrc: "/assets/images/group6.svg",
            frameSrc: "/assets/images/frame-2441865.svg"
          },
        {
          name: "Ramachandran Subramanian (Ramc)",
          description: "Over 30+ years of global IT industry experience with organizations like Zensar, Accenture, TechMahindra.",
          role: "CEO",
          imgSrc: "/assets/images/group6.svg",
          frameSrc: "/assets/images/frame-244186.svg"
        },
        {
          name: "Banu Prakash C",
          description: "Software Architect with over 28+ years of experience in architecting/ designing/ developing complex n-tier distributed applications.",
          role: "Co-Founder and CTO",
          imgSrc: "/assets/images/group6.svg",
          frameSrc: "/assets/images/frame-2441861.svg"
        },
        {
          name: "Suhas Dutta",
          description: "An ex-Accenture partner, with over 30 years experience. Currently runs a Strategy Consulting, and Digital Transformation firm, partner to Lucida.",
          role: "Digital Transformation Advisor / Consultant",
          imgSrc: "/assets/images/group61.svg",
          frameSrc: "/assets/images/frame-2441862.svg"
        },
        {
          name: "Murali Setty",
          description: "Over 20 years of experience in solution architecting and designing of software systems.",
          role: "VP, Enterprise Architecture",
          imgSrc: "/assets/images/group61.svg",
          frameSrc: "/assets/images/frame-2441863.svg"
        },
        {
          name: "Jahnavi Thekkada",
          description: "Over 22 years experience in Data Science, Analytics and Data warehousing.",
          role: "VP, Analytics and Data Science",
          imgSrc: "/assets/images/group61.svg",
          frameSrc: "/assets/images/frame-2441864.svg"
        },
      ];

      const testimonialData = [
        {
          name: "Lorem ipsum",
          role: "Lorem ipsum dolor",
          description: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
          ],
          image: "/assets/images/ellipse-1843@2x.png",
          stars: 5
        },
        {
          name: "Lorem ipsum",
          role: "Lorem ipsum dolor",
          description: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
          ],
          image: "/assets/images/ellipse-1844@2x.png",
          stars: 5
        },
        {
          name: "Lorem ipsum",
          role: "Lorem ipsum dolor",
          description: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
          ],
          image: "/assets/images/ellipse-1845@2x.png",
          stars: 5
        }
      ];
      

    return(
        <div className="aboutus">
        <Navbar />
        <img  className="banner" alt="" src="/assets/images/banner.png" />
        <div className="group-parent39">
        <div className="box1">
          <div className="sub-content" />
          <b className="case-studies">Case Studies</b>
          <b className="b6">40+</b>
        </div>
        <div className="box2">
          <div className="sub-content" />
          <b className="innovations">Innovations</b>
          <b className="b6">25+</b>
        </div>
        <div className="box3">
          <div className="sub-content" />
          <b className="projects">Projects</b>
          <b className="b8">100+</b>
        </div>
      </div>

      <div className="tabs">
        <div className="line-group">
            <h5 className="celebrations" onClick={() => handleButtonClick(<Celebrations/>)} >Celebrations</h5>
            <h5 className="fun-more" onClick={() => handleButtonClick(<FunAndMore/>)}>Fun & more</h5>
            <h5 className="work-life" onClick={() => handleButtonClick(<WorkLife/>)}>Work Life</h5>
        </div>
        <div>
        {selectedComponent}
        </div>
      </div>
 
      <div className="team-main">
      <div className="team-container">
      <h5 className="team-heading">Team</h5>
      <h3 className="team-sub-heading">Meet Our Executive Leadership</h3>
      <p className="team-content">Lucida's expert team specializes in digital transformation, boasting
      diverse skills from development to strategic analysis. With a focus on
      innovation and client satisfaction, we deliver cutting-edge solutions
      that unlock the full potential of applications and data.</p>
      </div>
      </div>

      <div className="team">
      <div className="team-inner">
        <div className="team-parent1">
          {teamData.map((member, index) => (
            <div className="team-members" key={index}>
              <div className="team-parent2">
              <img className="frame-icon" alt="" src={member.frameSrc} />
                <div className="name-parent">
                  <b className="name"> {member.name}</b>
                  <div className="ceo-parent">
                  <img className="group-icon4" alt="" src={member.imgSrc} />
                  <div className="ceo">{member.role}</div>
                </div>
                    <i className="description1">
                        <p className="description">{member.description} </p>
                    </i>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       
    <div className="testimonial-main">
     <h2 className="testimonial">Testimonial</h2>
    <div className="dolor">Lorem ipsum dolor sit amet, consectetur adipiscing </div>
    <div className="dolor1"> Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor </div>
      
    <div className="testimonial-content">
      {testimonialData.map((testimonial, index) => (
        <div  key={index}>
          <b className="b3">“</b>
          <div className="dolor2">{testimonial.description[0]}</div>
          <div className="dolor3">{testimonial.description[1]}</div>
          <div className="dolor4">{testimonial.description[2]}</div>
          {[...Array(testimonial.stars)].map((_, starIndex) => (
            <img className="star-icon" alt="" src="assets/images/star-1.svg" key={starIndex} />
          ))}
          <img className="ellipse-icon" alt="" src={testimonial.image} />
          <b className="lorem-ipsum">{testimonial.name}</b>
          <div className="dolor5">{testimonial.role}</div>  
        </div>
      ))}
    </div>
    <div className="arrow-images">
    <img alt="" src="assets/images/group-244226.svg" />
    <b className="b2">1/4</b>
    <img alt="" src="assets/images/group-244225.svg" />
  </div>
  </div>
   
  </div>
       
    )
}

export default AboutUs;