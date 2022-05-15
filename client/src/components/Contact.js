import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <div className="contact-info-content">
                  <img
                    src="img/contact.jpg"
                    alt="contact"
                    className="img-fluid"
                  />
                  <div className="contact-info-title">Phone number</div>
                  <div className="contact-info-text">032205055555555</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
