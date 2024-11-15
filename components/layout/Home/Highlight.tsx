import imageUrlBuilder from '@sanity/image-url';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import highlightCircleText from 'public/images/CircleText.png';
import { dataset, projectId } from '../../../sanity/env';
import HoverLink from './HoverLink';

const builder = imageUrlBuilder({ projectId, dataset });

export default function Highlight({ highlightSection }) {
  const { title1, title2, highlightImage, hoverLinkText, hoverLinkHref } =
    highlightSection;

  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540]);

  return (
    <section className='w-full bg-primary'>
      <div className='container py-12 md:py-40 flex flex-col gap-20 text-left'>
        <div className='max-w-prose md:sticky md:top-60 z-20 md:pt-2'>
          <p className='max-w-[250px] md:text-2xl md:max-w-[350px] 2xl:max-w-[555px] font-light 2xl:text-[40px] 2xl:leading-10'>
            {title1}
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='relative inline-block'>
            <Image
              width={536}
              height={536}
              alt={`${highlightImage.alt}`}
              src={builder
                .image(highlightImage)
                .width(536)
                .height(536)
                .quality(80)
                .url()}
              className='w-[250px] md:w-[375px] 2xl:w-[536px]'
            />
            <motion.div
              className='absolute -top-5 -right-10 md:-right-20 2xl:-right-32'
              style={{ rotate }}>
              <Image
                src={highlightCircleText}
                width={287}
                height={287}
                alt=''
                className='w-[107px] md:w-[165px] 2xl:w-[287px]'
              />
            </motion.div>
          </div>
        </div>
        <div className='flex justify-end'>
          <p className='max-w-[250px] md:text-2xl md:max-w-[350px] 2xl:max-w-[555px] font-light 2xl:text-[40px] 2xl:leading-10'>
            {title2}
          </p>
        </div>
      </div>
      <HoverLink href={hoverLinkHref} text={hoverLinkText} />
    </section>
  );
}
