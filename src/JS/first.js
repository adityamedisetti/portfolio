import '../CS/first.css';
import Navbar from './navbar';
import React, { useEffect, useState } from 'react';
import rpp3 from '../images/rpp3.png';
import mr_pp3 from '../images/mr_pp3.png'
import pp3 from '../images/pp3.png';
import inter from '../images/inter.jpg';
import tenth from '../images/tenth.jpg';
import jn from '../images/jn.pdf';
function First() {
  const educationItems = document.querySelectorAll('.education-item');

function handleScroll() {
  for (const item of educationItems) {
    const rect = item.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.top <= viewportHeight / 2) {
      item.classList.add('in-view');
    } else {
      item.classList.remove('in-view');
    }
  }
}

window.addEventListener('scroll', handleScroll);
  
  const [skills, setSkills] = useState([
    { name:'C', progress: 80 },
    { name:'Java', progress: 85 },
    { name:'HTML', progress: 70 },
    { name:'CSS', progress: 65 },
    { name:'React', progress: 70 }
  ]);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [dropLetters, setDropLetters] = useState(false);
  useEffect(() => {
    const intervalIds = [];
  
    skills.forEach((skill, index) => {
      let counter = 0;
      const skillProgress = document.getElementById(`skill-progress-${index}`);
  
      const intervalId = setInterval(() => {
        if (counter === skill.progress) {
          clearInterval(intervalId);
        } else {
          counter += 1;
          skillProgress.innerHTML = `${counter}%`;
        }
      }, 30);
  
      intervalIds.push(intervalId);
    });
  
    return () => {
      intervalIds.forEach(intervalId => clearInterval(intervalId)); // Cleanup function
    };
  }, [skills]);
  
 

  useEffect(() => {
    if (!dropLetters) {
      const dropTimer = setTimeout(() => {
        setDropLetters(true);
      }, 100);

      return () => clearTimeout(dropTimer);
    }

    const letters = document.querySelectorAll('.drop-letters span');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('animate');
      }, index * 100);
    });
  }, [dropLetters]);

  useEffect(() => {
    function checkScroll() {
      const contentElements = document.querySelectorAll('.content');
      const currentScrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;

      contentElements.forEach(content => {
        const contentTop = content.getBoundingClientRect().top;

        if (contentTop < windowHeight * 0.9) {
          content.classList.add('reveal');
        } else {
          content.classList.remove('reveal');
        }
      });

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    
      <div className="f-container" >
        <nav> <Navbar/> </nav>
        <main>
          <div className="main-container">
            <div className="detail"> 
              <h1>I'm Sai Teja <span className="drop-letters">
                <span className="letter">A</span>
                <span className="letter">d</span>
                <span className="letter">i</span>
                <span className="letter">t</span>
                <span className="letter">y</span>
                <span className="letter">a</span>
              </span> 
              </h1>
              <div class="ccontent">
                <div class="ddetails">
                  <p class="university">Student at <a href="https://www.kluniversity.in/" style={{color:"red"}}>KL University</a> | Graduation in 2025</p>
                  <p class="degree"><strong>Bachelor of Technology </strong>- Computer Science and Engineering</p>
                </div>
                <div class="contact">
                  
                  <p style={{color:"white"}}>
                    Email: <a href="mailto:2100030333cseh@gmail.com" class="email">2100030333cseh@gmail.com</a><br/>
                    Phone: <span class="phone">+91 9704270119</span>
                  </p>
                </div>
              </div>
              
              <div className='social-icons'>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <a href="https://www.facebook.com/profile.php?id=100084911665833" class="fa fa-facebook" style={{fontSize:"25px"}}></a>
                <a href="#" class="fa fa-twitter" style={{fontSize:"25px"}}></a>
                <a href='https://github.com/adityamedisetti' class="fa fa-github" style={{fontSize:"25px"}}></a>
                <a href="https://www.linkedin.com/in/aditya-medisetti-855910226/" class="fa fa-linkedin" style={{fontSize:"25px"}}></a>
                <a href="https://www.instagram.com/__aditya____006/" class="fa fa-instagram" style={{fontSize:"25px"}}></a>

              </div>
            
              
            </div>
            
             <div class="image">
            {window.innerWidth <= 768 ? (
                <img src={mr_pp3}  /> 
              ) : (
                <img src={pp3} />
              )}
            </div> 
          </div>
        </main>
        <div id='space1'></div>
        <div id="content-1" className="content">
                <h2>Education</h2>
          <div class="education">
            <div class="education-item">
              <h3>KL University</h3>
              <p>Bachelor of Technology in Computer Science and Engineering</p>
              <p>Passout year: 2025</p>
              <a href='#'>CGPA: 9.44 <p>(Pursing)</p></a>
            </div>
            <div class="education-item">
              <h3>Sri Chaitanya Junior College</h3>
              <p>Intermediate</p>
              <p>Completed in 2020</p>
              <a href={inter}>CGPA: 9.5</a>
              
            </div>
            <div class="education-item">
              <h3>Sri Chaitanya School</h3>
              <p>10th grade (SSC)</p>
              <p>Completed in 2018</p>
              <a href={tenth}>CGPA: 10.0</a>
            </div>
          </div>
          
        </div>
        <div id="content-2" className="content">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="progress-circle">
                  <div className='inner'>
                    <div  id={`skill-progress-${index}`} data-progress={skill.progress} 
                    style={{ 
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontWeight: 1000,
                      color: 'white'
                    }}
                    ></div>
                  </div>
                </div>
                <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gc" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="
#EAEDED" />
                      <stop offset="100%" stopColor="
#EAEDED" />
                    </linearGradient>
                  </defs>
                  <circle
                    className="circle"
                    cx="50"
                    cy="50"
                    r="45"
                    strokeLinecap="round"
                    fill="url(#gc)"
                    style={{ "--progress": skill.progress }}
                  />
                </svg>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
          <div className='education-item'>
          <h2>SoftSkills</h2>
          <ul className="skills-list">
          <li>Problem Solving</li>
          <li>Attention to detail</li>
          <li>Communication Skills</li>
          <li>Team collaboration</li>
          <li>Time Management</li>
        </ul>
          </div>
        </div>
        <div id='space2'></div>
        <div id="content-3" class="content">
          <h2>Certifications</h2>
            <div class="certificates">
                <div class="education-item">
                    <p><strong>Red Hat -</strong> Red Hat Certified Enterprise Application Developer</p>
                    <p >Validate at: <a href="https://www.credly.com/badges/adc8b281-a58a-4a7d-8d17-69df2fc1dbf9/public_url" style={{color:"red"}}>Credly</a></p>
                </div>
                <div class="education-item">
                    <p><strong>Java (Basic) -</strong> Hacker Rank</p>
                    <p >Validate at: <a href="https://www.hackerrank.com/certificates/545699ce1828" style={{color:"red"}}>HackerRank</a></p>
                </div>
                <div class="education-item">
                    <p><strong>CCNA -</strong> Switching, Routing, and Wireless Essentials</p>
                    <p >Validate at: <a href="https://www.credly.com/badges/50dab0c8-7d19-4871-b001-7299b974e421/public_url" style={{color:"red"}}>Credly</a></p>
                </div>
            </div>
            <br/>
            
            <h2>Internships</h2>
            <div className='certificates'>
              <div class="education-item">
                    <p><strong>Juniper Networks -</strong> Juniper Networks Networking(Virtual Internship)</p>
                    <p >Validate at: <a href={jn} style={{color:"red"}}>Click to View!!!</a></p>
                </div>
                
                <div class="education-item">
                    <p><strong>Salesforce -</strong> Salesforce Supported Virtual Internship - Administrator</p>
                    <p >Validate at: <a href="#" style={{color:"red"}}>Ongoing</a></p>
                </div>
            </div>
 
        </div>

        <div id='space3'></div>
        <div id="content-4" className="content">
        <h2>Projects</h2>
          <div className="education-item project">
            <h3>Weather Web App</h3>
            <p><h5>Description:</h5> A web application for checking weather forecasts.</p>
            <p><h5>Features:</h5> Real-time weather updates, location-based weather forecasts, etc.</p>
          </div>
          
          <div className="education-item project">
            <h3>Online Bidding Platform</h3>
            <p><h5>Description:</h5> A platform for conducting online auctions and bidding.</p>
            <p><h5>Features:</h5> Item listing, bidding system, user authentication, etc.</p>
          </div>
        </div>
        
        <div id='space4'></div>
        
        <div id='space5'></div>
        <footer>
        <div>This is my portfolio</div>
        <div>&copy; 2024 Aditya. All rights reserved.</div>
        
        </footer>
      </div>
    
  );
}

export default First;
