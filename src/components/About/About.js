import React from 'react';
import './About.scss';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.png';
import img_middle from '../../images/img_middle.jpg';
import logo_middle from '../../images/logo_middle.svg'

const About = () => {
  return (
    <main className="about">
      <article className="about__top">
        <p className="about__topHeader">
          Who we are
        </p>
        <p className="about__topOverflow">
          Kith and kin is an old phrase meaning “friends and family”
        </p>
        <p className="about__topMain">
          It was probably last seen in a fossilized volume of poetry. But, we like it because it perfectly captures the spirit of our business — to illuminate the ones you love.
        </p>
        <p className="about__topMain">
          Your kith and kin.
        </p>
        <img
          src={img1}
          alt="friens"
          className="img1"
        />
        <img
          src={img2}
          alt="friens"
          className="img2"
        />
        <img
          src={img3}
          alt="friens"
          className="img3"
        />
        <img
          src={img4}
          alt="friens"
          className="img4"
        />
        <img
          src={img5}
          alt="friens"
          className="img5"
        />
      </article>
      <article className="about__middleTop">
        <div className="about__middleTopColumnWrapper">
          <p className="about__middleTopUnderHeader">
            Why We're Here
          </p>
          <h2 className="about__middleTopHeader">
            We designed our product with you in mind
          </h2>
          <p className="about__middleTopText">
            Who are you? You’re the glue amongst your friends and family.
            We have a hunch you’ve been asked to throw more than one shower
            (and nailed it). You remember your Mother In Law’s favorite tea,
            and freely give your “secret” recipes to anyone who asks.
            You still send thank you cards. You think of your people first,
            and delighting them brings you the greatest joy.
          </p>
          <p className="about__middleTopText">
            Which is, of course, why you’re here now — to find a
            certain someone the perfect gift.
          </p>
        </div>
        <div className="about__middleTopImgWrapper">
          <img
            src={img_middle}
            alt="family"
          />
          <img
            src={logo_middle}
            alt="Kith and Kin"
            className="about__middleTopLogo"
          />
        </div>
      </article>

      <article className="about__middleBottom">
        <div className="about__middleBottomContent">
          <p className="about__middleBottomAsideText">
            Our Team
          </p>
          <p className="about__middleBottomText">
            Is a small bunch of thoughtful people scattered across
            the universe and operating out of home offices, living rooms,
            kitchen tables, and the occasional patio.
          </p>
        </div>
      </article>

      <article className="about__bottom">
        <div className="about__bottomContent">
          <p className="about__bottomText">
            We’d love to hear more about your project, reach us at  —
          </p>
          <a href="https://help@yourkithandkin.com" className="about__bottomLink">
            help@yourkithandkin.com
          </a>
        </div>
      </article>
    </main>
  );
}

export default About;