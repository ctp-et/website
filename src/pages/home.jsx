import './home.css';
import HomeImage from '../assets/ctp-group-picture.jpg';

function Home() {
    return (
        <main className="home">
            <section className="home-image-container">
                <img className="home-image" src={HomeImage} alt="CTP Summer 2022 crew and students" />
            </section>
            <h1>Home</h1>
            <p>Some content</p>
        </main>
    );
}

export default Home;