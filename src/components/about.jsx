import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Since 2011 I've been living in São Paulo (Brazil) and working with Technology. </p>
                    
                    <p>
                    Seasoned IT Engineer Coordinator adept at leading cross-functional teams.
                    Remarkable relationship building, decision making and communication skills. Known for best-in-class collaboration.
                    Experienced Software Engineer with over 9 years of experience in Financial Services.
                    Easily communicates complex technical requirements to non-technical stakeholders.
                    Excellent leadership record of leading development teams in enterprise-wide development projects.
                    Enthusiastic technical professional with Java development, IPFS (interplanetary filesystem), Blockchain, Open Source and Open Banking.
                    Excellent reputation for resolving problems and improving customer satisfaction. 
                    </p>
                    
                    <p>
                        <b>Hobbies </b>
                        <li>Watch TV Series</li>
                        <li>Go out to restaurants with my wife</li>
                        <li>Travel to unknown places by me</li>
                        <li>Study about Technology</li>
                        <li>Drink beer with friends</li>
                    </p>

                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3> Development </h3>
                    <p>I have experience building Java applications and I Know ShellScript, .NET, Javascript and others.</p>
                    <p><i>"Always learning about something!"</i></p>
                    <p></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Support Application & Infrastructure</h3>
                    <p>I've background to troublehsooting problems with Network, Applications, Servers and integrations.</p>
                    <p><i>"You learn something when you solve a problem of your client!"</i></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Certifications</h3>
                    <p>AWS Cloud Practitioner</p>
                    <p>Exin: Cloud computing foundation, Agile Scrum foundation, Information Security Foundation</p>
                    <p><i>"Challenge yourself."</i></p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
