import { Link, NavLink } from "react-router-dom";
import "./css/HomePage.css";
import ScrollToTop from '../utils/ScrollToTop';

const HomePage = () => {
    // ScrollToTop();
    return (
        <div className="homePageContainer">
            <div className="homePageFirst">
                <div className="header">Cultivate the Spark.</div>
                <div className="subHeader">
                    <div>{"Create the life you "}
                        <em>want</em>
                        .</div>
                </div>
                <em className="p">Sometimes we have to start over - ready or not.
                    If you’ve gone through a change that made you feel
                    like your world is shattering, I’m here to tell
                    you that this is just the beginning of who you
                    are going to become.</em>
                <a className="consultationButton"
                    href="https://calendly.com/colibritlc/30min"
                    target="_blank"
                    rel="noReferrer"
                >Request a Consultation</a>
            </div>
            <div className="homePageSecond">
                <div className="headShotWelcomeContainer">
                    <div className="welcomeBody">
                        Welcome to Huitzilin Transformational Life Coaching!
                        My name is Angela and I am a transformation coach.
                        For almost two decades I have coached people through
                        acting, singing, writing, and simplifying cluttered
                        offices, homes, and minds. The common result in the
                        coaching I’ve provided has been transformation.
                        I’ve been blessed to witness my clients gain the capacity,
                        confidence, and courage to live life on their own terms.
                        Read on to see if working with me is right for you,
                        then you can schedule a call
                        {" "}
                        <a className="hereLink"
                            href="https://calendly.com/colibritlc/30min"
                            target="_blank"
                            rel="noReferrer"
                        >here</a>
                        .
                    </div>
                    <div className="headShotContainer">
                        <img className="headShot"
                            alt='headshot'
                            src={'https://res.cloudinary.com/dfrj03hsi/image/upload/v1693878067/Huitzilin/166FE277-043C-40C3-820C-1E8CC74A8D26rg7_0881_li3l0z.jpg'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
