import { useEffect } from 'react';
import './home.css';
import HomeImage from '../assets/ctp-group-picture.jpg';
import GroupMentorshipImage from '../assets/group-mentorship.jpg';
import VirtualMentorshipImage from '../assets/virtual-mentorship.png';
import InfoSessionImage from '../assets/info-session.png';

function Home() {
    useEffect(() => {

        // Fade-in text elements upon scrolling
        const elements = document.querySelectorAll('.fade-in');
        function fadeinOnScroll() {
            elements.forEach(element => {
            if (!(element.classList.contains('visible')) && isInViewport(element)) {
                element.classList.add('visible');
                return;
            }
            });
        };

        // Helper for fadeinOnScroll; determines if element is within user view
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
        <main className="container-fluid p-0 home">
            <div className="row m-0">
                <div className="col-12 p-0">
                    <img className="home-image" src={HomeImage} alt="CTP Summer 2023 mentors and mentees at BITS College" />
                </div>      
            </div>
            <div className='row m-0 home-section-container'>
                <div className="col-12 col-md-5 p-5 bg-custom-blue home-section-header-container fade-in">
                    <h1 className="section-header">WHO WE ARE</h1>
                </div>
                <div className='col-12 col-md-7 p-5 home-section-para-container fade-in'>
                    <p className="section-para">
                        CTP Ethiopia is a student-led organization that aims to provide
                        high school students in Ethiopia with the resources and support
                        they need to pursue higher education in the United States.
                    </p>
                </div>
            </div>
            <div className='row m-0 home-section-container'>
                <div className="col-12 col-md-5 p-5 home-section-header-container fade-in">
                    <h1 className="section-header">OUR PROGRAMS</h1>
                </div>
                <div className='col-12 col-md-7 p-5 bg-custom-blue home-section-para-container'>
                    <div className='row mb-5 section-para fade-in'>
                        <h2 className="p-0">Group Mentorship</h2>
                        <p className='p-0'>
                            Each summer, our team of volunteers consisting of current college students in the US and other countries hold <b>in-person</b> group mentorship sessions to help students navigate the college application process.
                            These sessions are <b>free</b> and run between July and August, twice a week for about <b>5 weeks</b>. Location and times vary year to year.
                        </p>
                        <div className='p-0'>
                            <img src={GroupMentorshipImage} alt="CTP mentor discussing with her group of mentees" />
                        </div>
                    </div>
                    <div className='row mb-5 section-para fade-in'>
                        <h2 className="p-0">One-on-one Mentorship</h2>
                        <p className='p-0'>
                            During the school year, our mentors are paired up with students to provide <b>virtual, one-on-one</b> mentorship. Mentors provide essay feedback, assist with SAT prep, and answer general college application questions of their mentees.
                            Mentees are chosen from the summer program through the recommendation of their group mentors.
                        </p>
                        <div className='p-0'>
                            <img src={VirtualMentorshipImage} alt="CTP Mentor discussing with her mentee through a Zoom call." />
                        </div>
                    </div>
                    <div className='row mb-5 section-para fade-in'>
                        <h2 className="p-0">Information Sessions</h2>
                        <p className='p-0'>
                            We also hold <b>virtual</b> information sessions in the Spring where students can bring their questions on college application to recently-admitted students. 
                            These sessions are typically held in early April for two days. Topics covered include navigating the Common App, financial aid, and standardized testing.
                        </p>
                        <div className='p-0'>
                            <img src={InfoSessionImage} alt="CTP mentors hosting a virtual information session." />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;