import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaOrcid } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
       <  FaLinkedinIn />
    </div>
    <div>
        < FaGithub/>
    </div>
    <div>
        <FaOrcid />
    </div>
  </div>
);

export default SocialMedia;