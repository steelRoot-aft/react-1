import teamStyle from './team.module.css';
import Card from './card/Card';
import infoCard from './card/infoCard';
import { useState } from 'react';

const Team = () => {
  const [visableCount, setVisableCount] = useState(6);

  return (
    <div className={teamStyle.body}>
      <div className={teamStyle.top}>
        <h2>Team</h2>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className={teamStyle.bottom}>
        {infoCard.slice(0, visableCount).map((item, index) => {
          return (
            <Card
              image={item.image}
              name={item.name}
              position={item.position}
              bio={item.bio}
              link={item.link}
              key={index}
            />
          );
        })}
      </div>
      <div className={teamStyle.button}>
        <button
          onClick={() => setVisableCount(visableCount + 3)}
          style={{ display: visableCount === infoCard.length ? 'none' : '' }}
        >
          <h4>See all team</h4>
        </button>
      </div>
    </div>
  );
};

export default Team;
