import { useState, useEffect } from "react";
import coverImage from "../assets/images/coverPhoto_home.jpg";
import styles from "../styles/TextAnimation.module.css";

const DynamicContent = () => {
  const texts = [
    "Over 300 members and 90 speakers are in this family",
    "Access career resources and workshops for future growth",
    "Improve essential soft skills through training and events",
    "Gain exclusive industry insights from successful professionals",
    "Unlock early access to internships and job opportunities",
    "Receive personalized mentorship to guide your career journey",
    "Develop event management skills through hands-on experience",
    "Build your personal brand with KUCC’s resources and support",
    "Hone leadership skills by taking on key roles",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        paddingTop: "56.25%",
        height: "0",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100 text-l sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide shadow-lg animate-pulse whitespace-nowrap">
        KHULNA UNIVERSITY CAREER CLUB
      </div>

      <div
        className={`${styles.textContainer} ${styles.textAppear}`}
        key={animationKey}
      >
        {texts[currentTextIndex]}
      </div>
    </div>
  );
};

export default DynamicContent;
