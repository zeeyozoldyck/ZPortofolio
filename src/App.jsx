import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ["Web Developer", "Lua Developer", "Web Designer", "Youtuber", "Fivem Developer"];

  useEffect(() => {
    // Create stars for background
    const starsContainer = document.getElementById('stars');
    if (starsContainer && starsContainer.children.length === 0) {
      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (1px to 3px)
        const size = Math.random() * 2 + 1;
        
        // Random animation duration (2s to 5s)
        const duration = Math.random() * 3 + 2;
        
        // Random delay (0s to 5s)
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        
        starsContainer.appendChild(star);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'skills', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(100);
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(150);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, texts, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Stars background */}
      <div id="stars"></div>
      
      {/* Header */}
      <header>
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Zey.</a>
        <nav>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          >
            Services
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          >
            Skills
          </a>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
          >
            Education
          </a>
          <a 
            href="#experience" 
            className={activeSection === 'experience' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''} 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-img">
          <img src="main.jpg" alt="Zey" />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span>Jessen Julius!</span></h1>
          <h3 className="typing-text">I'm a <span className="typed-text">{typedText}<span className="cursor"></span></span></h3>
          <p>Hello, my name is Jessen Julius!. I'm a passionate Web Developer who enjoys creating modern, responsive, and user-friendly websites. I love turning ideas into real digital products using clean code and creative design.</p>
          <div className="social-icons">
            <a href="https://discord.gg/q5U63z8uUx" target="_blank" rel="noopener noreferrer">
              <img src="/discord.png" alt="Discord" style={{width: '2rem', height: '2rem'}} />
            </a>
            <a href="https://github.com/zeeyozoldyck/" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="GitHub" style={{width: '2rem', height: '2rem'}} />
            </a>
            <a href="https://www.instagram.com/mad_zeeyo99/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" style={{width: '2rem', height: '2rem'}} />
            </a>
          </div>
          <a href="https://discord.gg/q5U63z8uUx" className="btn" target="_blank" rel="noopener noreferrer">Join My Discord!</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>My Services</h2>
        <div className="services-container">
          <div className="service-box">
            <i className="fas fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>Creating responsive and modern websites using the latest technologies and best practices.</p>
          </div>
          <div className="service-box">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and attractive user interfaces that enhance user experience.</p>
          </div>
          <div className="service-box">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Ensuring your website looks great and functions perfectly on all devices.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-box">
            <h3>Lua Script</h3>
            <div className="progress-bar">
              <div className="progress" style={{width: '90%'}}>90%</div>
            </div>
          </div>
          <div className="skill-box">
            <h3>HTML & CSS</h3>
            <div className="progress-bar">
              <div className="progress" style={{width: '85%'}}>85%</div>
            </div>
          </div>
          <div className="skill-box">
            <h3>Java Script</h3>
            <div className="progress-bar">
              <div className="progress" style={{width: '70%'}}>70%</div>
            </div>
          </div>
          <div className="skill-box">
            <h3>React</h3>
            <div className="progress-bar">
              <div className="progress" style={{width: '50%'}}>50%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>My Education</h2>
        <div className="education-container">
          <div className="education-box">
            <h3>Learning</h3>
            <p>Since</p>
            <p>2024-2025</p>
          </div>
          <div className="education-box">
            <h3>Trying</h3>
            <p>Since</p>
            <p>2025 NOW!</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>My Experience</h2>
        <div className="experience-container">
          <a href="https://discord.gg/q5U63z8uUx" target="_blank" rel="noopener noreferrer" className="experience-link">
            <div className="experience-box">
              <h3>FiveM Developer</h3>
              <p>ZeyDev</p>
              <p>2025 - Present</p>
              <p>Building FiveM Servers</p>
            </div>
          </a>
          <a href="https://zeymenu.mkz.my.id" target="_blank" rel="noopener noreferrer" className="experience-link">
            <div className="experience-box">
              <h3>Web Developerr</h3>
              <p>ZeyMenu FiveM Web</p>
              <p>2025 - Newbie</p>
              <p>Created and maintained client websites using HTML, CSS, and JavaScript.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <p>zeeyozoldyck@gmail.com</p>
            </div>
            <div className="info-box">
              <i className="fas fa-phone"></i>
              <p>+62 857 7256 5604</p>
            </div>
            <div className="info-box">
              <i className="fas fa-map-marker-alt"></i>
              <p>Jakarta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;