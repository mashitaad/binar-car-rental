import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './faq.css'

function Faq({ faqCom }) {
  return (
      <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="faq-title">
            <h1>Frequently Asked Question</h1>
            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempore.</h5>
          </div>
        </div>

{/* Pake accordian karena ngikut tutorial youtube hehe */}
        <div className="col-md-6">
          <Accordion className="accordion faq-desc-title" defaultActiveKey='1'>
            {faqCom.map((item) => {
              return (
                <div key={item.id}>
                  <Accordion.Item eventKey={item.id} >
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body className="faq-desc-answer">
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              )
            })}
          </Accordion>
      </div>
    </div>
  </div>
  );
}

export default Faq;
