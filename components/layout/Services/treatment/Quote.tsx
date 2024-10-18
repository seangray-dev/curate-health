import { PortableText } from '@portabletext/react';
import { QuoteIcon } from 'lucide-react';

export default function Quote({treatment}) {
  return (
    <div className='bg-secondary opacity-100'>
      <div className='container py-44 text-black 2xl:flex flex-col 2xl:jusitfy-center'>
        <div className='ml-4 md:ml-8 rotate-180 w-[60px] h-[54px] md:w-[88px] md:h-[79px] 2xl:w-[160px] 2xl:h-[134px] 2xl:mx-auto'>
          <svg
            viewBox="0 0 160 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='fill-current text-primary rotate-180 mx-auto scale-[1.33]'
          >
            <path
              opacity="0.8"
              d="M44.2023 88.1732C51.6731 88.1732 57.4837 90.3002 61.6342 94.5541C66.1997 98.8081 68.4825 104.222 68.4825 110.797C68.4825 126.266 58.9364 134 39.8443 134C27.393 134 17.6394 129.746 10.5836 121.238C3.52785 112.343 0 99.7749 0 83.5325C0 68.0635 3.73535 53.7547 11.2062 40.6061C18.677 27.0707 29.6757 13.7287 44.2023 0.580118C44.6173 0.193376 45.2399 0 46.07 0C47.3151 0 48.3528 0.5801 49.1829 1.74028C50.013 2.90046 50.013 3.86727 49.1829 4.64071C28.8456 23.9769 18.677 46.7937 18.677 73.0909C18.677 83.9192 20.7523 91.8471 24.9027 96.8745C28.6382 91.0736 35.0713 88.1732 44.2023 88.1732ZM135.72 88.1732C143.191 88.1732 149.001 90.3002 153.152 94.5541C157.717 98.8081 160 104.222 160 110.797C160 126.266 150.454 134 131.362 134C118.91 134 109.157 129.746 102.101 121.238C95.0454 112.343 91.5175 99.7749 91.5175 83.5325C91.5175 68.0635 95.2529 53.7547 102.724 40.6061C110.195 27.0707 121.193 13.7287 135.72 0.580118C136.135 0.193376 136.757 0 137.588 0C138.833 0 139.87 0.5801 140.7 1.74028C141.53 2.90046 141.53 3.86727 140.7 4.64071C120.363 23.9769 110.195 46.7937 110.195 73.0909C110.195 83.9192 112.27 91.8471 116.42 96.8745C120.156 91.0736 126.589 88.1732 135.72 88.1732Z"
              fill="#283619"
            />
          </svg>
        </div>
        <div className='pt-20 2xl:px-60 2xl:text-center italic text-[16px] font-light md:text-[22px] 2xl:text-[32px]'>
          <PortableText value={treatment.quoteContent} />
        </div>
      </div>
    </div>
  );
}