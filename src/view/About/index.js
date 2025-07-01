import React, { useState, useEffect, useRef } from 'react';
import userImg from '../Home/img1.jpg';
import userImg2 from '../Home/images.jpeg';
const testimonials = [
  {
    text: `"As a brand owner, I'm impressed with the AI models .\nThey've revolutionized our design and marketing,\nenhancing both productivity and creativity."`,
    name: 'Olivia Wilson',
    title: 'CEO and Founder at Borcelle',
    img: userImg2,
  },
  {
    text: `"The intuitive interface and powerful features have made our workflow seamless.\nHighly recommended for any creative team!"`,
    name: 'James Lee',
    title: 'Creative Director at PixelForge',
    img: userImg,
  },
  {
    text: `"Exceptional results and outstanding support.\nThe AI models have truly set a new standard in our industry."`,
    name: 'Sophia Turner',
    title: 'Marketing Lead at NovaBrands',
    img: userImg2,
  },
];

function AboutComponent({ refProp }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextTestimonial, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const { text, name, title, img } = testimonials[current];

  return (
    <div ref={refProp} id="about" className="about-section">
      <div className="about-card">
        <div className="about-quote-icon">&#8220;</div>
        <div className="about-testimonial">
          {text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="about-user">
          <img src={img} alt={name} className="about-user-img" />
          <div className="about-user-info">
            <div className="about-user-name">{name}</div>
            <div className="about-user-title">{title}</div>
          </div>
        </div>
        <button className="about-arrow about-arrow-left" onClick={prevTestimonial} aria-label="Previous testimonial">&#8592;</button>
        <button className="about-arrow about-arrow-right" onClick={nextTestimonial} aria-label="Next testimonial">&#8594;</button>
      </div>
    </div>
  );
}

export default AboutComponent;
