import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { Loading } from 'components/Loading';
import Image from 'next/image';
import { Button } from 'components/ui/button';
import {  ArrowRight } from 'lucide-react';
import { dataset, projectId } from '../../../sanity/env';

const builder = imageUrlBuilder({ projectId, dataset });

export default function ServiceDetails({ service, treatments }) {
  if (!service) {
    return <Loading />;
  }

  return (
<section className='relative text-black bg-white md:h-[560px] 2xl:h-[660px]' id={service.id}>
  <div className='w-full flex flex-col md:flex-row'>
    <div className='container mt-12 md:mt-32 mr-10 md:w-1/2  flex flex-col'>
      <h2 className='2xl:container text-stone-800 text-[24px] md:text-[35px] 2xl:text-[60px] font-Poppins whitespace-nowrap'>{service.title}</h2>
      <br/>
      <div className='2xl:ml-12 text-[12px] mb-10 md:text-[16px] md:leading-[30px] font-light font-Poppins leading-[20px] max-w-prose mx-auto'>
        <PortableText value={service.content} />
      </div>
    </div>
    <div className='md:w-1/2 flex'>
      <Image
        loading='lazy'
        width={1080}
        height={1440}
        src={builder
          .image(service.hero_image)
          .width(1080)
          .height(1440)
          .quality(80)
          .url()}
        alt={service.title}
        className='rounded-full w-[250px] h-[250px] md:mt-20 md:w-[350px] md:h-[350px] 2xl:w-[500px] 2xl:h-[500px] object-cover mx-auto group-hover:-translate-y-3 '/>
    </div>
  </div>
  <div className="md:w-1/2  pb-20 md:-mt-32 2xl:-mt-60 text-stone-800 text-[16px] md:text-[18px] 2xl:text-[24px] font-light italic font-Poppins leading-[30px] md:leading-[60px]">
    <div className="container mt-8">
          {treatments.map((treatment) => (
            <div key={treatment._id} className="flex items-center mb-2">
              <a
                href={`/services/${service.slug}/${treatment.slug}`}
                className="flex items-center hover:font-medium"
              >
                <span className="2xl:container 2xl:-mb-4 md:-mb-8 mr-2">{treatment.title}</span>
                <ArrowRight className='md:-mb-8 bg-transparent rounded-full hover:bg-transparent hover:scale-105 transition-all duration-300 border-none md:w-[90px]' />
              </a>
            </div>
          ))}
        </div>
      </div>
  </section>
  );
}

