import React from 'react'
import './About.css'
import { Button, Typography, Avatar } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'

const About = () => {
  const visitLinkedIn = () => {
    window.location = 'https://www.linkedin.com/in/muhammad-abdullah-38388b223/'
  }
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src="me.jpg"
              alt="Founder"
            />
            <Typography>Muhammad Abdullah</Typography>
            <Button onClick={visitLinkedIn} color="primary" target="blank">
              Visit LinkedIn Profile
            </Button>
            <span>
              This is a sample wesbite made by @AbdullahBhatti. Only with the
              purpose to learn MERN Stack with indepth concepts.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Accounts</Typography>
            <a
              href="https://www.linkedin.com/in/muhammad-abdullah-38388b223/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://github.com/M-Abdullah-Bhatti" target="blank">
              <GithubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About