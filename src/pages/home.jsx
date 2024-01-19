import { useEffect, useState } from 'react';
import './home.css';
import HomeImage from '../assets/ctp-group-picture.jpg';
import GroupMentorshipImage from '../assets/group-mentorship.jpg';
import VirtualMentorshipImage from '../assets/virtual-mentorship.png';
import InfoSessionImage from '../assets/info-session.png';

function Home() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');

        function fadeinOnScroll() {
            elements.forEach(element => {
            if (!(element.classList.contains('visible')) && isInViewport(element)) {
                element.classList.add('visible');
                return;
            }
            });
        };

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            const fadeinPoint = 150;
            return rect.top < window.innerHeight - fadeinPoint;
        };

        window.addEventListener('scroll', fadeinOnScroll);
        fadeinOnScroll();

        return () => {
            window.removeEventListener('scroll', fadeinOnScroll);
        }
    } , []);

    return (
        <main className="home">
            <div className="home-image-container">
                <img className="home-image" src={HomeImage} alt="CTP Summer 2023 crew and students" />
            </div>
            <div className="home-body-container">
                <div className="who-we-are-container fade-in">
                    <h2 className="crimson-text">WHO WE ARE</h2>
                    <hr />
                    <p>
                        CTP Ethiopia is a student-led organization that aims to provide
                        high school students in Ethiopia with the resources and support
                        they need to pursue higher education in the United States.
                    </p>
                </div>

                <div className="our-programs-description-container fade-in">
                    <h2 className="crimson-text">OUR PROGRAMS</h2>
                    <hr />
                    <p>
                        We operate a variety of programs and sessions to help students navigate 
                        the college application process, including SAT prep, essay editing,
                        and mentorship.
                    </p>
                </div>

                <div className="programs-outer-container">
                    <div className="program-container fade-in">
                        <div>
                            <h3 className="crimson-text">Group Mentorship</h3>
                            <p>
                                Each summer, our team of volunteers consisting of current college students in the US and other countries hold <b>in-person</b> group mentorship sessions to help students navigate the college application process.
                                These sessions are <b>free</b> and run between July and August, twice a week for about <b>5 weeks</b>. Location and times vary year to year.
                            </p>
                        </div>
                        <div>
                            <img src={GroupMentorshipImage} alt="CTP mentor discussing with her group of mentees" />
                        </div>
                    </div>
                    <div className="program-container fade-in">
                        <div>
                            <h3 className="crimson-text">One-on-one Mentorship</h3>
                            <p>
                                During the school year, our mentors are paired up with students to provide <b>virtual, one-on-one</b> mentorship. Mentors provide essay feedback, assist with SAT prep, and answer general college application questions of their mentees.
                                Mentees are chosen from the summer program through the recommendation of their group mentors.
                            </p>
                        </div>
                        <div>
                            <img src={VirtualMentorshipImage} alt="CTP Mentor discussing with her mentee through a Zoom call." />
                        </div>
                    </div>
                    <div className="program-container fade-in">
                        <div>
                            <h3 className="crimson-text">Information Sessions</h3>
                            <p>
                                We also hold <b>virtual</b> information sessions in the Spring where students can bring their questions on college application to recently-admitted students. 
                                These sessions are typically held in early April for two days. Topics covered include navigating the Common App, financial aid, and standardized testing.
                            </p>
                        </div>
                        <div>
                            <img src={InfoSessionImage} alt="CTP mentors hosting a virtual information session." />
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}

export default Home;