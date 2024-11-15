import { Button } from 'components/ui/button';
import Link from 'next/link';
import { getClient } from '../../sanity/lib/client';
import { POPUP_CONTENT_QUERY } from '../../sanity/lib/queries';
import { token } from '../../sanity/lib/token';
import { SanityDocument } from 'next-sanity';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

import { useEffect, useState } from 'react';
import preview from 'next-sanity/preview';
import { Cross2Icon } from '@radix-ui/react-icons';

type PageProps = {
  isVisible: boolean;
  content: any;
};

const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
  const cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};

export default function PopupBanner(props) {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const bannerDismissed = getCookie('bannerDismissed');
    if (props.props.isActive && !bannerDismissed) {
      setIsBannerVisible(true);
    }
  }, [props.props.isActive]);

  const closeBanner = () => {
    setIsBannerVisible(false);
    // Set cookie for 7 days when banner is dismissed
    setCookie('bannerDismissed', 'true', 7);
  };

  if (!isBannerVisible) return null;

  const components: Partial<PortableTextReactComponents> = {
    block: {
      // Ex. 1: customizing common block types

      h1: ({ children }) => <h1 className='text-8xl'>{children}</h1>,
      h2: ({ children }) => <h3 className='text-6xl'>{children}</h3>,
      h3: ({ children }) => <h3 className='text-4xl'>{children}</h3>,
      h4: ({ children }) => <h4 className='text-2xl'>{children}</h4>,
      normal: ({ children }) => <p className='text-2xl'>{children}</p>,
      a: ({ children }) => (
        <a className='text-lg transition-all no-underline hover:underline '>
          {children}
        </a>
      ),
      blockquote: ({ children }) => (
        <blockquote className=''>{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className='text-lg text-primary text-purple-700'>{children}</h2>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul className='list-disc list-inside mt-xl'>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className='list-decimal list-inside mt-lg'>{children}</ol>
      ),

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className='m-auto text-lg'>{children}</ol>
      ),
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined;
        return (
          <a
            className='transition-all not-italic underline hover:italic '
            href={value?.href}
            target={target}
            rel={target === '_blank' && 'noindex nofollow'}
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className='clear fixed top-0 z-50'>
      <div
        className='h-screen w-screen flex justify-center items-center bg-black bg-opacity-40 animate-appear'
        onClick={closeBanner}
      >
        <div className='w-[48rem] h-[48rem] bg-[#878E76] rounded-full flex justify-center items-center'>
          <div className=''>
            <div className='px-4 py-2 leading-loose  text-center'>
              <PortableText
                components={components}
                value={props.props.content}
              />
              <button
                onClick={closeBanner}
                className=' text-white pt-10 rounded text-center'
              >
                <Cross2Icon className='h-10 w-10 flex items-center' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
