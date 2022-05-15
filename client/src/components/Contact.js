import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex">
              {/* phono */}
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
              {/* email */}
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <div className="contact-info-content">
                  <img
                    src="img/contact.jpg"
                    alt="contact"
                    className="img-fluid"
                  />
                  <div className="contact-info-title">Email</div>
                  <div className="contact-info-text">asf@gmail.com</div>
                </div>
              </div>
              {/* address */}
              <div className="contact-info-item d-flex justify-content-start align-items-center">
                <div className="contact-info-content">
                  <img
                    src="img/contact.jpg"
                    alt="contact"
                    className="img-fluid"
                  />
                  <div className="contact-info-title">address</div>
                  <div className="contact-info-text">
                    House no 123 Khayban Haider DHA Karachi
                  </div>
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
