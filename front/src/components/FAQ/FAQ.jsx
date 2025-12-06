import "./FAQ.css";
import { FAQItem } from "./FAQItem";
import { useEffect, useState } from "react";
import {supabase } from "../../supabase"

export default function FAQ() {
  const [ faqData, setFaqData ] = useState([]);

  useEffect(() => {
    async function loadFAQ() {
      const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("order", {ascending:true});

      if(error){
        console.error("Error ao carregar FAQ", error);

      } else {
        setFaqData(data);
      }
    }
      loadFAQ();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Dúvidas Frequentes</h2>

        <div className="faq-cards">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}