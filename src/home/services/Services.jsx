import servicesStyle from './services.module.css';

import Content from '../../../public/Content.png';
import Email from '../../../public/Email.png';
import PayPerClick from '../../../public/PayPerClick.png';
import SearchEngine from '../../../public/SearchEngine.png';
import SocialMedia from '../../../public/SocialMedia.png';
import AnalyticsAndTracink from '../../../public/AnalyticsAndTracink.png';
import Happen from '../../../public/happen.png';

import Card from '../../allComponents/cardServices/Card';

const Services = () => {
  return (
    <div className={servicesStyle.body}>
      <div className={servicesStyle.header}>
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className={servicesStyle.main}>
        <Card
          title="Search engine"
          subtitle="optimization"
          img={SearchEngine}
          className={servicesStyle.one}
        />
        <Card
          title="Pay-per-click"
          subtitle="advertising"
          img={PayPerClick}
          className={servicesStyle.two}
        />
        <Card
          title="Social Media"
          subtitle="Marketing"
          img={SocialMedia}
          className={servicesStyle.three}
        />
        <Card
          title="Email"
          subtitle="Marketing"
          img={Email}
          className={servicesStyle.four}
        />
        <Card
          title="Content"
          subtitle="Creation"
          img={Content}
          className={servicesStyle.five}
        />
        <Card
          title="Analytics and"
          subtitle="Tracking"
          img={AnalyticsAndTracink}
          className={servicesStyle.six}
        />
      </div>
      <div className={servicesStyle.footer}>  
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>
    </div>
  );
};

export default Services;
