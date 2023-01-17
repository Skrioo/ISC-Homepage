import React from "react";
import "./webdevprocess.css";

export default function WebDevProcess(style) {
    return (
        
        <div className="web-dev-process">
            
            <div className="header-text">
                <h3>Our Custom Web Development Process</h3>
                <p>We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom Websites & Applications.</p>
            </div>
        <div className="steps-container">
            <div className="progress-bar">
                <div className="text-bar">
                     <p>Custom App Development</p>
                </div>
                <div className="bar"></div>
                <div className="circle">1</div>
                <div className="hidden-div"><p>TEXT text text text text</p></div>
            </div>

            <div className="progress-bar">
            <div className="hidden-div"><p>TEXT text text text text</p></div>
                <div className="bar"></div>
                <div className="circle">2</div>
                <div className="text-bar">
                     <p>Defining Web Application</p>
                </div>
            </div>

            <div className="progress-bar">
                <div className="text-bar">
                     <p>Web Application Structure</p>
                </div>
                <div className="bar"></div>
                <div className="circle">3</div>
                <div className="hidden-div"><p>TEXT text text text text</p></div>
            </div>

            <div className="progress-bar">
            <div className="hidden-div"><p>TEXT text text text text</p></div>
                <div className="bar"></div>
                <div className="circle">4</div>
                <div className="text-bar">
                     <p>Research & UX Workflow</p>
                </div>
            </div>

            <div className="progress-bar">
                <div className="text-bar">
                     <p>Third-Party Software Selections</p>
                </div>
                <div className="bar"></div>
                <div className="circle">5</div>
                <div className="hidden-div"><p>TEXT text text text text</p></div>
            </div>

            <div className="progress-bar">
            <div className="hidden-div"><p>TEXT text text text text</p></div>
                <div className="bar"></div>
                <div className="circle">6</div>
                <div className="text-bar">
                     <p>Prototyping & Design Testing</p>
                </div>
            </div>
        </div>
        </div>
    )
}