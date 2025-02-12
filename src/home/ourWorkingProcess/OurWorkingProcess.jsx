import workingStyle from './ourWorkingProcess.module.css';
import Accordion from './Accordion.js';
import plus from './plus.jsx';
import { useState } from 'react';

const OurWorkingProcess = () => {
  const [isOpen, setIsOpen] = useState(null);

  const openAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className={workingStyle.body}>
      <div className={workingStyle.top}>
        <h2>Our Working Process </h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className={workingStyle.bottom}>
        {Accordion.map((item, index) => {
          return (
            <div
              className={`${workingStyle.column} ${
                isOpen === index ? workingStyle.open : ''
              }`}
              key={index}
            >
              <span>{item.number}</span>
              <div className={workingStyle.title}>
                <h3>{item.title}</h3>
                <button onClick={() => openAccordion(index)}>{plus()}</button>
              </div>
              <div className={workingStyle.content}>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWorkingProcess;
