import React, { useState, useEffect } from "react";
//import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
//import { FaQuoteRight } from "react-icons/fa";
import photo from "./photos";

function HomeSlideshow() {
  const [people, setPeople] = useState(photo);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          {/* <span>/</span>reviews */}
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} className="person-img" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default HomeSlideshow;
