import './home.css';
import HomeImage from '../assets/ctp-group-picture.jpg';
import GroupMentorshipImage from '../assets/group-mentorship.jpg';


function Home() {
    return (
        <main className="home">
            <div className="home-image-container">
                <img className="home-image" src={HomeImage} alt="CTP Summer 2023 crew and students" />
            </div>
            <div className="home-body-container">
                <div className="who-we-are-container">
                    <h2 className="crimson-text">WHO WE ARE</h2>
                    <hr />
                    <p>
                        CTP Ethiopia is a student-led organization that aims to provide
                        high school students in Ethiopia with the resources and support
                        they need to pursue higher education in the United States.
                    </p>
                </div>

                <div className="our-programs-description-container">
                    <h2 className="crimson-text">OUR PROGRAMS</h2>
                    <hr />
                    <p>
                        We operate a variety of programs and sessions to help students navigate 
                        the college application process, including SAT prep, essay editing,
                        and mentorship.
                    </p>
                </div>

                <div className="programs-outer-container">
                    <div className="left-oriented-program-container">
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

                    <div className="left-oriented-program-container">
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

                    <div className="left-oriented-program-container">
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
                </div>
            </div>
        </main>
    );
}

export default Home;