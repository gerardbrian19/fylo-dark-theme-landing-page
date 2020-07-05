import React, {Component} from 'react'
import Head from 'next/head'

export default class Index extends Component {

    render() {
        return (
            <div id="App">
                <Head>
                    <title>Frontend Mentor | fylo-dark-theme-landing-page</title>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet"/>
                </Head>
                <main id="main-content">
                    <header className="header">
                        <nav className="nav-bar">
                            <img src="/static/images/logo.svg" alt="Fylo logo" className="nav-logo"/>
                            <ul className="links-container">
                                <li>
                                    <a href="#" className="nav-links">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-links">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-links">Sign In</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="hero">
                            <img src="/static/images/illustration-intro.png" alt="Accessing files" className="file-illustration"/>
                            <h1 className="heading-title title">
                                All your files in one secure location, accessible anywhere.
                            </h1>
                            <p className="support-text">
                                Fylo stores all your most important files in one secure location.
                                <br/>
                                Access them wherever you need, share and collaborate with
                                <br/>
                                friends family, and co-workers.
                            </p>

                            <a href="index.html" className="btn btn-blue">Get Started</a>
                        </div>
                    </header>

                    <main className="main-section">

                        <section className="features">
                            <div className="feature-container">
                                <div className="feature">
                                    <img src="/static/images/icon-access-anywhere.svg" alt="Laptop and Computer" className="feature-icon"/>
                                    <h2 className="feature-title">Access your files, anywhere</h2>
                                    <p className="feature-desc">
                                        The ability to use a smartphone, tablet, or computer to access your account means your 
                                                    files follow you everywhere.
                                    </p>
                                </div>

                                <div className="feature">
                                    <img src="/static/images/icon-security.svg" alt="Secured Icon" className="feature-icon"/>
                                    <h2 className="feature-title">Security you can trust</h2>
                                    <p className="feature-desc">
                                        2-factor authentication and user-controlled encryption are just a couple of the security 
                                                    features we allow to help secure your files.
                                    </p>
                                </div>

                                <div className="feature">
                                    <img src="/static/images/icon-collaboration.svg" alt="Collaboration icon" className="feature-icon"/>
                                    <h2 className="feature-title">Real-time collaboration</h2>
                                    <p className="feature-desc">
                                        Securely share files and folders with friends, family and colleagues for live collaboration. 
                                                    No email attachments required.
                                    </p>
                                </div>

                                <div className="feature">
                                    <img src="/static/images/icon-any-file.svg" alt="Store any file icon" className="feature-icon"/>
                                    <h2 className="feature-title">Store any type of file</h2>
                                    <p className="feature-desc">
                                        Whether you're sharing holidays or photos or work documents, Fylo has you covered allowing for all file 
                                                   types to be securely stored and shared.
                                    </p>
                                </div>

                            </div>


                        </section>

                        <section className="card">
                            <div className="card-container">
                                <img src="/static/images/illustration-stay-productive.png" alt="Stay productive" className="card-illustration"/>


                                <div className="textblock">
                                    <h2 className="title">Stay productive,

                                        <span>wherever you are</span>
                                    </h2>
                                    <p className="support-text">Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                                                    storage needs.</p>
                                    <p className="support-text">Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                                                    attachments required.</p>
                                    <a href="" className="special-link">See how Fylo works
                                        <img src="/static/images/icon-arrow.svg" alt="some arrow" className="arrow"/>
                                    </a>
                                </div>
                            </div>

                        </section>

                        <section className="testimonials">

                            <div className="testimonial-container">

                                <div className="testimony-card">
                                    <p className="testimony-text">
                                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                                                    become a well-oiled collaboration machine.
                                    </p>
                                    <div className="profile">
                                        <img src="/static/images/profile-1.jpg" alt="user 1" className="icon-profile"/>
                                        <div className="name-and-position">
                                            <span className="name">Satish Patel</span>
                                            <span className="position">
                                                Founder and CEO, Huddle</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="testimony-card">
                                    <p className="testimony-text">
                                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                                                    become a well-oiled collaboration machine.
                                    </p>
                                    <div className="profile">
                                        <img src="/static/images/profile-2.jpg" alt="user 1" className="icon-profile"/>
                                        <div className="name-and-position">
                                            <span className="name">
                                                Bruce McKenzie
                                            </span>
                                            <span className="position">
                                                Founder and CEO, Huddle
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                <div className="testimony-card">
                                    <p className="testimony-text">
                                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                                                    become a well-oiled collaboration machine.
                                    </p>
                                    <div className="profile">
                                        <img src="/static/images/profile-3.jpg" alt="user 1" className="icon-profile"/>
                                        <div className="name-and-position">
                                            <span className="name">Iva Boyd</span>
                                            <span className="position">
                                                Founder and CEO, Huddle
                                            </span>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </section>

                        <section className="email">

                            <div className="color-change1"></div>
                            <div className="color-change2"></div>

                            <div className="email-card">
                                <h2 className="title">Get early access today</h2>
                                <p className="support-text">
                                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                                              questions, our support team would be happy to help you.</p>
                                <div className="input-container">
                                    <input type="email" placeholder="email@example.com"/>
                                    <a href="" className="btn email-btn">Get Started for Free</a>
                                </div>
                            </div>

                        </section>

                        <footer className="footer">

                            <div className="footer-items-container">
                                <img src="/static/images/logo.svg" alt="footer-logo" className="footer-logo"/>

                                <div className="text-items">

                                    <div className="icon-address">
                                        <img src="/static/images/icon-location.svg" alt="location address"/>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                                                          elit, sed do eiusmod tempor incididunt ut labore et 
                                                          dolore magna aliquas</p>
                                    </div>

                                    <ul className="item-list">
                                        <li className="with-icon">
                                            <img src="/static/images/icon-phone.svg" alt="phone icon" className="footer-icon"/>
                                            <span>
                                                +1-543-123-4567</span>
                                        </li>
                                        <li className="with-icon">
                                            <img src="/static/images/icon-email.svg" alt="email icon" className="footer-icon"/>
                                            <span>
                                                example@fylo.com
                                            </span>
                                        </li>
                                    </ul>

                                    <ul className="item-list">
                                        <li>
                                            <a href="" className="footer-links">About Us</a>
                                        </li>
                                        <li>
                                            <a href="" className="footer-links">Jobs</a>
                                        </li>
                                        <li>
                                            <a href="" className="footer-links">Press</a>
                                        </li>
                                        <li>
                                            <a href="" className="footer-links">Blog</a>
                                        </li>
                                    </ul>

                                    <ul className="item-list">
                                        <li>
                                            <a href="" className="footer-links">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="" className="footer-links">Terms</a>
                                        </li>
                                        <li>
                                            <a href="" className="footer-links">Privacy</a>
                                        </li>
                                    </ul>

                                    <div className="social-icons">
                                        <a href="" className="social-links">
                                            <i className="fab fa-facebook-f fa-2x"></i>
                                        </a>
                                        <a href="" className="social-links">
                                            <i className="fab fa-twitter fa-2x"></i>
                                        </a>
                                        <a href="" className="social-links">
                                            <i className="fab fa-instagram fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </footer>
                    </main>

                    <div className="sign">
                        <p className="attribution">
                            Challenge by
                            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                                      Coded by
                            <a href="#">Gerard Gueco</a>.
                        </p>
                    </div>
                </main>
            </div>
        )
    }
}
