import {useEffect, useState } from "react";
import Microsoft from "../assets/img/Microsoft.jpg";
import SNU from "../assets/img/SNU.png";
import Nothing from "../assets/img/Nothing.jpg";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Intern at Microsoft",
    imgUrl: Microsoft,
    desc: "Upcoming 2024 summer Internship of Two-month internship at Microsoft Hyderabad as an Associate Consultant.(May 2024 - July 2024)",
  },
  {
    id: 2,
    title: "Research Fellow at SNU",
    imgUrl: SNU,
    desc: "Working on building a model for dehazing images using distillation and Cycle-GAN, which includes deep learning, image processing, and computer vision. (Sept 2023- Present)",
  },
  {
    id: 3,
    title: "Intern at Nothing",
    imgUrl: Nothing,
  },
];

const Single = ({ item, scrollY }) => {
  const y = scrollY * 600; // Adjust the multiplier as needed for the desired effect

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.imgUrl} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleX = scrollY * 100; // Adjust the multiplier as needed for the desired effect

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} scrollY={scrollY} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
