import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-info">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phono */}
              <div
                className="contact-info-item d-flex justify-content-between align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "25%",
                  padding: "10px",
                }}
              >
                <div className="contact-info-content ">
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
              <div
                className="contact-info-item d-flex justify-content-start align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "25%",
                  padding: "10px",
                }}
              >
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
              <div
                className="contact-info-item d-flex justify-content-start align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "25%",
                  padding: "10px",
                }}
              >
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
      <div className="container-form">
        <div className="continer">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_containter py-5">
                <div className="contact_form_title ">Get in Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between ">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="required"
                      data-error="Name is required."
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required="required"
                      data-error="email is required."
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone"
                      required="required"
                      data-error="number is required."
                    />
                  </div>
                  <div className="  d-flex contact_form_text mt-5">
                    <textarea
                      className=" text_field contact_form_message"
                      id="contact_form_message"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="contact-form-button mt-5">
                    <button
                      type="submit"
                      className="btn btn btn-primary "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
