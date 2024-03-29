import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

import DiscordIcon from './images/discord.inline.svg';
import MastodonIcon from './images/mastodon.inline.svg';
import PlayIcon from './images/play.inline.svg';
import SlackIcon from './images/slack.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';
import YoutubeIcon from './images/youtube.inline.svg';

const icons = [
  { text: 'Slack', icon: SlackIcon, to: LINKS.slack },
  { text: 'Twitter', icon: TwitterIcon, to: LINKS.twitter },
  { text: 'Discord', icon: DiscordIcon, to: LINKS.discord },
  { text: 'YouTube', icon: YoutubeIcon, to: LINKS.youtube },
  { text: 'Mastodon', icon: MastodonIcon, to: LINKS.mastodon, rel: 'me' },
];
const subtitle = 'Join us on a bi-weekly public meetings:';

const Community = () => {
  const { image1, image2, image3, image4, image5, image6 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "pages/home/community/image-1.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image2: file(relativePath: { eq: "pages/home/community/image-2.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image3: file(relativePath: { eq: "pages/home/community/image-3.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image4: file(relativePath: { eq: "pages/home/community/image-4.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image5: file(relativePath: { eq: "pages/home/community/image-5.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      image6: file(relativePath: { eq: "pages/home/community/image-6.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
    }
  `);

  const items = [
    {
      cover: image1,
      description: 'Incoming Parca v0.15, Debuginfo signed upload API, Agent BTF support',
      to: 'https://www.youtube.com/watch?v=Bd3qPMlQdNI',
    },
    {
      cover: image2,
      description:
        'Parca Agent v0.10, System-wide profiling, stack unwinding using DWARF, and Grafana 9.3.0 with Parca',
      to: 'https://www.youtube.com/watch?v=gAoq-qFlBmQ',
    },
    {
      cover: image3,
      description:
        'Parca v0.14.0 Reduce API responsize, Auto-complete improvements; Parca Agent v0.10.0-rc.0 highlights',
      to: 'https://www.youtube.com/watch?v=KQR94iUL-k4',
    },
    {
      cover: image4,
      description:
        'Parca as Grafana Core plugin, DWARF-based native unwinding updates, Callgraph improvements',
      to: 'https://www.youtube.com/watch?v=5qLgqY_EaIs',
    },
    {
      cover: image5,
      description:
        'Parca v0.13.0, Grafana plugin, Parca Agents on targets page, Callgraph imporvements, Performance',
      to: 'https://www.youtube.com/watch?v=oGIVGQzpcyg',
    },
    {
      cover: image6,
      description: 'Impressive Query Performance Improvements, Stack Unwinding Updates',
      to: 'https://www.youtube.com/watch?v=jgDDk9kkkO8',
    },
  ];
  return (
    <section className="safe-paddings mt-80 bg-black pt-40 pb-[200px] text-white lg:mt-64 lg:pt-28 lg:pb-36 md:mt-48 md:pt-20 md:pb-24 sm:mt-28 sm:pt-14 sm:pb-20">
      <div className="container">
        <h2 className="heading-6xl">
          Join the{' '}
          <StaticImage
            className="inline-flex w-auto justify-center align-middle lg:max-w-[174px] md:max-w-[145px] sm:max-w-[116px]"
            src="./images/community.png"
            quality={95}
            width={203}
            height={56}
            objectFit="contain"
            formats={['png']}
            lazy="loading"
            alt="Community icons"
          />{' '}
          community!
        </h2>
        <ul className="mt-16 flex space-x-11 lg:mt-12 lg:space-x-8 md:mt-10 md:space-x-7 sm:mt-7 sm:space-x-5">
          {icons.map(({ text, icon: Icon, to, rel }, index) => (
            <li key={index}>
              <Link
                className="block transition-opacity duration-200 hover:opacity-80"
                to={to}
                target="_blank"
                rel={rel ?? 'noopener'}
              >
                <Icon
                  className="h-[104px] w-[104px] lg:h-20 lg:w-20 md:h-[72px] md:w-[72px] sm:h-14 sm:w-14"
                  aria-label={text}
                />
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="heading-5xl mt-40 lg:mt-32 md:mt-20 sm:mt-16">{subtitle}</h3>
        <div className="sm:-mx-4">
          <ul
            className={clsx(
              'grid-gap-x mt-16 grid grid-cols-3 gap-y-16',
              'lg:mt-12 lg:gap-y-14',
              'md:mt-10 md:grid-cols-2 md:gap-y-11',
              'sm:scrollbar-hidden sm:mt-6 sm:flex sm:gap-x-0 sm:space-x-4 sm:overflow-auto sm:pl-4 sm:after:shrink-0 sm:after:grow-0 sm:after:basis-4'
            )}
          >
            {items.map(({ cover, description, to }, index) => (
              <li className="sm:shrink-0 sm:grow-0 sm:basis-[242px]" key={index}>
                <Link
                  className="relative block transition-opacity duration-200 hover:opacity-80"
                  to={to}
                  target="_blank"
                  rel="noopener"
                >
                  <GatsbyImage
                    className="rounded-lg"
                    imgClassName="rounded-lg"
                    image={getImage(cover)}
                    loading="lazy"
                    alt="Cover"
                  />
                  <PlayIcon
                    className="absolute top-4 left-4 h-12 w-12 lg:h-10 lg:w-10 md:h-11 md:w-11 sm:top-2.5 sm:left-2.5 sm:h-8 sm:w-8"
                    aria-hidden
                  />
                </Link>
                <p className="mt-4 text-lg md:mt-3 md:text-base md:leading-snug sm:text-sm sm:leading-snug">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Community;
