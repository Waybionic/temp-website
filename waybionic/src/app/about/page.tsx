"use client";

import Image from 'next/image';
import Link from 'next/link';
import './styles/general.css';
import './styles/timeline.css';
import './styles/about-page.css';
import './styles/blurb.css';
import './styles/projects.css';
import './styles/outside-links.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="timeline">
        <div className="timeline-header"></div>


        <div className="timeline-below">
          <div className="title-section">
            <h1 className="club-name">WAYBIONIC</h1>
            <p className="our-story">our story</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-track">
              <div className="timeline-line"></div>
              <div className="timeline-vertical-line"></div>
              <div className="timeline-points">
                <div className="timeline-point">
                  <div className="point-dot"></div>
                  <div className="point-label">
                    waybionic<br />formed
                  </div>
                </div>
                <div className="timeline-point active">
                  <div className="point-dot"></div>
                  <div className="point-label">
                    you<br />are<br />here!
                  </div>
                </div>
                <div className="timeline-point">
                  <div className="point-dot"></div>
                  <div className="point-label">
                    ...and<br />what&apos;s<br />next?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blurb">
        <Image 
          src="/about/icons/about_witharrows.PNG"
          alt="About section with arrows"
          width={1200}
          height={900}
          style={{ objectFit: 'contain', display: 'block', margin: '0 auto', position: 'relative' }}
        />
      </div>

      <div className="vert projects">
        <p className="title-projects">Projects</p>

        <div className="horz description-projects">
          <div className="arm">
            <Image 
              src="/about/icons/WaybionicArm.png" 
              alt="Waybionic Arm"
              width={400}
              height={400}
            />
          </div>

          <div className="vert project-description">
            <p className="pd">
              Our club is dedicated to developing a bionic arm for remote surgical applications, 
              inspired by Dr. Sun&apos;s research on addressing medical emergencies, like collapsed 
              lungs, in space. Her work explored performing surgeries from Earth via bionic arms 
              to assist astronauts in orbit without needing an onboard doctor.
              <br /><br />
              Currently, we are focused on creating and refining the arm for surgical use, with 
              plans to eventually test in space-simulated conditions once we secure the necessary 
              equipment and funding.
              <br /><br />
              We appreciate your interest in our club!
            </p>
            <p>To Be Continued...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
