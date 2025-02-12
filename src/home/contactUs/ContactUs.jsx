import { useState, useEffect } from 'react';
import contactStyle from './contactUs.module.css';

const ContactUs = () => {
  const [sendButton, setSendButton] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [messageTextArea, setMessageTextArea] = useState('');
  const [nameInput ,setNameInput] = useState('')
  const [radioInput, setRadioInput] = useState(false)

  // Запрещенные символы
  const forbiddenChars = /[<>[\]{}"']/g;

  // Функции для фильтрации ввода
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value.replace(forbiddenChars, ''));
  };

  const handleMessageChange = (e) => {
    setMessageTextArea(e.target.value.replace(forbiddenChars, ''));
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value.replace(forbiddenChars, ''));
  };

  // Проверка, можно ли включить кнопку
  useEffect(() => {
    if (emailInput.trim() && messageTextArea.trim() && radioInput) {
      setSendButton(false);
    } else {
      setSendButton(true);
    }
  }, [emailInput, messageTextArea,radioInput]);


  return (
    <div className={contactStyle.body}>
      <div className={contactStyle.top}>
        <h2>Contact Us</h2>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className={contactStyle.bottom}>
        <form action="#" method="post" encType="multipart/form-data">
          <div className={contactStyle.radio}>
            <div>
              <input type="radio" name="type" id="1" onChange={() => setRadioInput(true)} />
              <label htmlFor="1">Say Hi</label>
            </div>
            <div>
              <input type="radio" name="type" id="2" onChange={() => setRadioInput(true)} />
              <label htmlFor="2">Get a Quote</label>
            </div>
          </div>
          <div className={contactStyle.input}>
            <div className={contactStyle.name}>
              <label htmlFor="name">Name</label>
              <input
                tabIndex={3}
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                value={nameInput}
                onChange={handleNameChange}
              />
            </div>
            <div className={contactStyle.email}>
              <label htmlFor="email">Email*</label>
              <input
                tabIndex={4}
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                value={emailInput}
                onChange={handleEmailChange}
              />
            </div>
            <div className={contactStyle.textArea}>
              <label htmlFor="message">Message*</label>
              <textarea
                tabIndex={5}
                placeholder="Message"
                name="message"
                id="message"
                value={messageTextArea}
                onChange={handleMessageChange}
              ></textarea>
            </div>
          </div>
          <div className={contactStyle.button}>
            <button
              tabIndex={6}
              type="submit"
              disabled={sendButton}
              style={{ opacity: sendButton ? '0.5' : '1' }}
            >
              <h4>Send Message</h4>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
