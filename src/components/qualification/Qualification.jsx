import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification ection">
        <h2 className="section-title">Qualification</h2>
        <p className="section-subtitle">My Personal Journey</p>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Técnico Superior en Programación</h3>
                            <span className="qualification__subtitle">Universidad Tecnológica Nacional - Argentina</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification