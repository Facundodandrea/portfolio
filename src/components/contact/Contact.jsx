import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-subtitle">Contact Me</p>

        <div className="contact__container container grid">
            <div className="contact__content">


                        <a href="mailto:facundodandrea01@gmail.com" className="button button--flex button__contact ">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
    </section>
  )
}

export default Contact