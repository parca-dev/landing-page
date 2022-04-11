import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import DiscordIcon from './images/discord.inline.svg';
import PlayIcon from './images/play.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';
import YoutubeIcon from './images/youtube.inline.svg';

const title = 'Join the community! Join users and companies that are using Parca in production:';
const icons = [
  { label: 'Slack', icon: SlackIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Discord', icon: DiscordIcon },
  { label: 'YouTube', icon: YoutubeIcon },
];
const subtitle = 'Join us on a bi-weekly public meetings:';

const Community = () => {
  const { image1, image2, image3, image4, image5, image6 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "pages/home/community/image-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 384)
        }
      }
      image2: file(relativePath: { eq: "pages/home/community/image-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 384)
        }
      }
      image3: file(relativePath: { eq: "pages/home/community/image-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 384)
        }
      }
      image4: file(relativePath: { eq: "pages/home/community/image-4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 384)
        }
      }
      image5: file(relativePath: { eq: "pages/home/community/image-5.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 384)
        }
      }
      image6: file(relativePath: { eq: "pages/home/community/image-6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 384)
        }
      }
    }
  `);

  const items = [
    {
      cover: image1,
      description: 'Parca Office Hours (2022-03-24)',
    },
    {
      cover: image2,
      description: 'Parca Office Hours (2022-03-10)',
    },
    {
      cover: image3,
      description: 'Parca Office Hours (2022-02-24)',
    },
    {
      cover: image4,
      description: 'Parca Office Hours (2022-02-08)',
    },
    {
      cover: image5,
      description: 'Parca Office Hours (2022-03-10)',
    },
    {
      cover: image6,
      description: 'Parca Office Hours (2022-03-24)',
    },
  ];
  return (
    <section className="safe-paddings mt-96 bg-black pt-40 pb-[200px] text-white">
      <div className="container">
        <h2 className="heading-6xl">{title}</h2>
        <ul className="mt-16 flex space-x-11">
          {icons.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon className="h-[104px] w-[104px]" aria-label={label} />
            </li>
          ))}
        </ul>
        <h3 className="heading-5xl mt-40">{subtitle}</h3>
        <ul className="grid-gap-x mt-16 grid grid-cols-3 gap-y-16">
          {items.map(({ cover, description }, index) => (
            <li key={index}>
              <div className="relative">
                <GatsbyImage
                  className="rounded-lg"
                  imgClassName="rounded-lg"
                  image={getImage(cover)}
                  loading="lazy"
                />
                <PlayIcon className="absolute top-4 left-4 h-12 w-12" aria-hidden />
              </div>
              <p className="mt-4 text-lg">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Community;
