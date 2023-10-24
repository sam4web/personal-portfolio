import { createElement } from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiGitlab,
  FiChrome,
  FiTwitter,
  FiYoutube,
  FiGlobe,
} from 'react-icons/fi';

const SOCIAL_ICONS = {
  FacebookIcon: FiFacebook,
  InstagramIcon: FiInstagram,
  LinkedinIcon: FiLinkedin,
  GithubIcon: FiGithub,
  GitlabIcon: FiGitlab,
  ChromeIcon: FiChrome,
  YoutubeIcon: FiYoutube,
  TwitterIcon: FiTwitter,
  GlobeIcon: FiGlobe,
};

const createSocialIcon = (icon) => {
  if (SOCIAL_ICONS[icon] !== undefined)
    return createElement(SOCIAL_ICONS[icon]);
  else return createElement(SOCIAL_ICONS['GlobeIcon']);
};

export default createSocialIcon;
