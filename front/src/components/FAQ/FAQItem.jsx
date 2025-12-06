import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);

  return (
    <div className="faq-item">
      <div className="faq-card" onClick={toggle}>
        <h3 className="faq-card-title">{question}</h3>
        <button className="faq-card-icon">
          {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>
      </div>

      <div className={`faq-content ${open ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}