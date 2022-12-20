import React from 'react'
import "../css/CardBody.css"
// import LinkedinLogo from "https://img.icons8.com/ios-filled/512/linkedin.png"


function CardHeader() {
    return (
        <div className="CardHeader">
            <h1 className='Name'>Miguel Chavez</h1>
            <h3 className='JobTitle'>Frontend Developer</h3>
            <a href="https://toonchavez.wixsite.com/proyectos" className='Link'>Portfolio</a>
        </div>
    )
}

function CallToAction() {
    return (
        <div className="CallToAction">
            <a href="mailto:toonchavez8@gmail.com" 
            className=" Button Link EmailButton">
                <img src="https://img.icons8.com/ios-glyphs/512/new-post.png" alt="email icon" className='icon email' />
                Email</a>
            <a href="https://www.linkedin.com/in/toonchavez8/" className='Link Button Linkedin'>
                <img src="https://img.icons8.com/ios-filled/512/linkedin.png" alt="linkedin Logo" className='icon'/>
                LinkedIn</a>
        </div>
    )
}

function AboutMe() {
    return (
        <div className="AboutMe">
            <h2 className='AboutMeTitle'>About Me</h2>
            <p className='AboutMeText'>"I am a curious and passionate individual with diverse interests. In my free time, I enjoy reading, studying, cooking, and listening to music. I am also interested in computers, video games, and smart technology. These interests have helped me develop skills and knowledge that I am always eager to expand upon. As a Frontend Developer with a background in motion design, I have experience in HTML, CSS, and JavaScript. I am currently learning React to become a MERN Full Stack Developer. I have a passion for learning and creating new things, and am always looking for ways to improve my skillset."</p>
        </div>
    )
}

function Interests() {
    return (
        <div className="Interests">
            <h2 className='InterestsTitle'>Interests</h2>
            <p className="InterestsText">"Reader. Chef. Music lover. Tech enthusiast. Gamer. Lifelong learner. Creator."</p>
        </div>
    )
    
}

function Skills() {
    return (
        <div className="Skills">
            <h2 className='SkillsTitle'>Skills</h2>
            <div className="SkillList">
                <div className="Skill
                ">
                    <img src="https://img.icons8.com/ios-filled/512/javascript.png" alt="javascript icon" className='icon'/>
                    <p className='SkillText'>JavaScript</p>
                </div>
                <div className="Skill">
                    <img src="https://img.icons8.com/ios-filled/512/react-native.png" alt="react icon" className='icon'/>
                    <p className='SkillText'>React</p>
                </div>
                <div className="Skill">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="node icon" className='icon'/>
                    <p className='SkillText'>Node</p>
                </div>
                <div className="Skill">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968538.png" alt="PostgreSQL icon" className='icon'/>
                    <p className='SkillText'>PostgreSQL</p>
                </div>
                <div className="Skill">
                    <p className='SkillText'>UIUX</p>
                </div>
        {/* boostrap skill */}
                <div className="Skill">
                    <img src="https://img.icons8.com/color/512/bootstrap.png" alt="bootstrap icon" className='icon'/>
                    <p className='SkillText'>Bootstrap</p>    
                </div>
            </div>
        </div>
    )
}



export default function CardBody() {
    return (
        <div className="cardBody">
            <CardHeader />
            <CallToAction />
            <section className="AboutSection">
                <AboutMe />
                <Interests />
                <Skills />
            </section>
        </div>
    )
    }
