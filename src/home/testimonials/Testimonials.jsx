import testimonialsStyle from './testimonials.module.css';
import Slider from './slider/Slider';

const Testimonials = () => {
  return (
    <div className={testimonialsStyle.body}>
      <div className={testimonialsStyle.top}>
        <h2>Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className={testimonialsStyle.bottom}>
      <Slider />
      </div>
    </div>
  );
}

export default Testimonials