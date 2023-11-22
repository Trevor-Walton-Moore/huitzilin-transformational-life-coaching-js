import { Link, NavLink } from "react-router-dom";
import "./css/HomePage.css";

const HomePage = () => {
    return (
        <div>
            Hello World!
            <div className="headShotContainer">
                <img className="headShot"
                src={'https://res.cloudinary.com/dfrj03hsi/image/upload/v1693878067/Huitzilin/166FE277-043C-40C3-820C-1E8CC74A8D26rg7_0881_li3l0z.jpg'} alt='preview' />
            </div>
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
                {/* <Link path="https://calendly.com/colibritlc/30min">here</Link> */}
                <a
                href="https://calendly.com/colibritlc/30min"
                target="_blank"
                rel="noReferrer"
                >here</a>
                .
            </div>
        </div>
    )
}

export default HomePage;
