import Image from "next/image";
import Link from "next/link";

import imageUrlBuilder from "@sanity/image-url";
import { Loading } from "components/Loading";

import { dataset, projectId } from "../../../sanity/env";
import styles from "../../../styles/CarouselNav.module.css";

const builder = imageUrlBuilder({ projectId, dataset });

export default function OurStory({ ourStory, aboutPages }) {
  if (!ourStory) {
    return <Loading />;
  }

  const {
    headerTitle,
    headerSubtitle,
    sectionOneTextContent,
    sectionOneTitle,
    quotationMark,
    sectionTwoTextContent,
    sectionThreeTextContent,
    sectionThreeTitle,
    sectionFiveTextContent,
    sectionFiveTitle,
    sectionSixTextContent,
    sectionSixTitle,
    sectionSevenCta,
    sectionSevenTextContent,
    sectionSevenTitle,
    sectionOneImage,
    sectionThreeImage,
    sectionFiveImage,
    sectionSixImage,
    sectionSevenBgImage,
    headerBgImage,
    ctaUrl,
  } = ourStory;

  return (
    <div className="flex w-full flex-col bg-white font-light">
      <section
        id="headerSection"
        className="relative w-full bg-white font-light"
      >
        <Image
          loading="lazy"
          width={1440}
          height={997}
          alt={`${headerBgImage.alt}`}
          src={builder.image(headerBgImage).width(1440).height(997).url()}
          className="h-[217px] w-full object-cover md:h-[336px] lg:h-[344px]"
        />
        <div className="absolute top-[216px] flex h-[450px] w-full flex-col bg-secondary pt-12 md:top-[288px] md:h-[390px] lg:top-[344px] lg:h-[468px]">
          <h1 className="ml-20 w-3/4 py-10 text-2xl leading-8 md:py-12 md:text-[40px] md:leading-10 lg:w-[900px] lg:text-7xl">
            {headerTitle}
          </h1>
          <p className="text-md ml-20 w-4/5 text-xs leading-5 text-primary md:text-sm md:leading-6 lg:w-[55%] lg:text-base">
            {headerSubtitle}
          </p>
        </div>
        <div className="bg-[#C3C7BB] backdrop-blur-3xl">
          <div className="mt-[520px] h-[68px] bg-[#C3C7BB] backdrop-blur-3xl md:mt-[342px] md:h-[68px] lg:mt-[468px] lg:h-[78px]">
            <div
              className={`container -mt-[128px] overflow-x-auto whitespace-nowrap md:-mt-0 ${styles.customScrollbar}`}
            >
              <div className="flex">
                <div className="-mr-8">
                  <div className="group p-1">
                    <Link href="/about/our-story">
                      <div className="flex border-none bg-transparent">
                        <div className="-ml-4 p-4 text-[12px] font-light leading-[14px] text-primary md:-ml-6 md:p-6 lg:text-[14px]">
                          About
                          <div className="mt-1 w-0 bg-primary transition-all duration-500 group-hover:w-full md:h-[0.5px] lg:h-[0.75px]"></div>
                        </div>
                        <div className="mx-3 -ml-4 p-4 font-light leading-[14px] text-primary md:-ml-6 md:p-6 lg:inline">
                          |
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {aboutPages.map((aboutPage, index) => (
                  <div key={index}>
                    <div className="group p-1">
                      <Link href={`/about/${aboutPage.slug}`}>
                        <div
                          className={`border-none bg-transparent ${aboutPage.title === "Our Story" ? "text-primary underline underline-offset-[6.5px]" : ""}`}
                        >
                          <div className="-mx-4 items-center justify-center p-4 px-6 text-[12px] font-light leading-[14px] text-primary md:p-6 lg:text-[14px]">
                            {aboutPage.title}
                            <div
                              className={`${aboutPage.title !== "Our Story" ? "mt-1 w-0 bg-primary transition-all duration-500 group-hover:w-full md:h-[0.5px] lg:h-[1.35px]" : ""}`}
                            ></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="sectionOne"
        className="flex w-full flex-col bg-white pt-[200px] font-light lg:grid lg:grid-cols-2 lg:pt-[300px]"
      >
        <Image
          loading="lazy"
          width={704}
          height={500}
          alt={`${sectionOneImage.alt}`}
          src={builder.image(sectionOneImage).width(704).height(500).url()}
          className="absolute left-0 h-[496px] w-[304px] translate-y-16 transform md:h-[600px] md:w-[708px] lg:h-[500px] lg:w-[704px]"
        />
        <div className="h-[460px] w-[288px] bg-secondary md:h-[450px] md:w-[624px] lg:h-[429px] lg:w-[608px]"></div>
        <div className="mx-[32px] flex w-[90%] flex-col justify-center md:mx-[60px] md:w-[85%] lg:mx-8 lg:h-[500px] lg:w-3/4">
          <h1 className="pt-44 text-base text-primary md:text-[32px] lg:pb-20 lg:pt-0 lg:text-[40px]">
            {sectionOneTitle}
          </h1>
          <p className="pt-6 text-xs leading-5 text-primary md:pl-1 md:pt-10 md:text-sm md:leading-7 lg:col-span-1 lg:pl-0 lg:pt-0 lg:text-base">
            {sectionOneTextContent}
          </p>
        </div>
      </section>
      <Image
        loading="lazy"
        width={160}
        height={134}
        alt={`${quotationMark.alt}`}
        src={builder.image(quotationMark).width(160).height(134).url()}
        className="mx-auto mt-28 h-[54px] w-[60px] md:mt-44 md:h-[79px] md:w-[88px] lg:mt-80 lg:h-[134px] lg:w-[160px]"
      />
      <section
        id="sectionTwo"
        className="relative flex w-full justify-center bg-white pt-[50px] font-light md:pt-[80px] lg:pt-[150px]"
      >
        <p className="top-48 w-2/3 text-center text-2xl italic leading-9 text-primary md:text-4xl md:leading-[50px] lg:text-6xl lg:leading-[66px]">
          {sectionTwoTextContent}
        </p>
      </section>
      <section
        id="sectionThree"
        className="flex w-full flex-col bg-white pt-[180px] font-light lg:grid lg:grid-cols-2 lg:pt-[300px]"
      >
        <div className="mx-[32px] flex w-[90%] flex-col justify-center md:mx-[60px] md:w-[85%] lg:mx-0 lg:w-[95%] lg:pl-40">
          <h1 className="pt-[600px] text-base leading-[52px] text-primary md:text-[32px] lg:pb-12 lg:pt-20 lg:text-[40px]">
            {sectionThreeTitle}
          </h1>
          <p className="pt-4 text-xs leading-5 text-primary md:pl-1 md:pt-8 md:text-sm md:leading-7 lg:col-span-1 lg:pl-0 lg:pt-10 lg:text-base">
            {sectionThreeTextContent}
          </p>
        </div>
        <Image
          loading="lazy"
          width={704}
          height={500}
          alt={`${sectionThreeImage.alt}`}
          src={builder.image(sectionThreeImage).width(704).height(500).url()}
          className="absolute z-10 h-[496px] w-[304px] translate-y-16 transform md:h-[600px] md:w-[708px] lg:right-0 lg:h-[500px] lg:w-[704px]"
        />
        <div className="absolute z-0 h-[460px] w-[288px] bg-secondary md:h-[450px] md:w-[624px] lg:right-0 lg:h-[429px] lg:w-[608px]"></div>
      </section>
      <section
        id="sectionFive"
        className="flex w-full flex-col bg-white pt-[200px] font-light lg:grid lg:grid-cols-2 lg:pt-[500px]"
      >
        <Image
          loading="lazy"
          width={704}
          height={500}
          alt={`${sectionFiveImage.alt}`}
          src={builder.image(sectionFiveImage).width(704).height(500).url()}
          className="absolute h-[496px] w-[304px] translate-y-16 transform md:h-[600px] md:w-[708px] lg:h-[500px] lg:w-[704px]"
        />
        <div className="top-[200px] h-[460px] w-[288px] bg-secondary md:h-[450px] md:w-[624px] lg:h-[429px] lg:w-[608px]"></div>
        <div className="mx-[32px] flex w-[90%] flex-col justify-center md:mx-[60px] md:w-[85%] lg:mx-8 lg:h-[500px] lg:w-3/4">
          <h1 className="pt-44 text-base leading-10 text-primary md:text-[32px] lg:pb-12 lg:pt-0 lg:text-[40px]">
            {sectionFiveTitle}
          </h1>
          <p className="pt-4 text-xs leading-5 text-primary md:pl-1 md:pt-8 md:text-sm md:leading-7 lg:col-span-1 lg:pl-0 lg:pt-10 lg:text-base">
            {sectionFiveTextContent}
          </p>
        </div>
      </section>
      <section
        id="sectionSix"
        className="flex w-full flex-col bg-white pt-[180px] font-light lg:grid lg:grid-cols-2 lg:pt-[400px]"
      >
        <div className="mx-[32px] flex w-[90%] flex-col justify-center md:mx-[60px] md:w-[85%] lg:mx-0 lg:h-[364px] lg:w-[95%] lg:pl-40 lg:pt-28">
          <h1 className="pt-[600px] text-base leading-10 text-primary md:text-[32px] lg:pb-12 lg:pt-0 lg:text-[40px]">
            {sectionSixTitle}
          </h1>
          <p className="pt-4 text-xs leading-5 text-primary md:pl-1 md:pt-8 md:text-sm md:leading-7 lg:col-span-1 lg:pl-0 lg:text-base">
            {sectionSixTextContent}
          </p>
        </div>
        <Image
          loading="lazy"
          width={704}
          height={500}
          alt={`${sectionSixImage.alt}`}
          src={builder.image(sectionSixImage).width(704).height(500).url()}
          className="absolute z-10 h-[496px] w-[304px] translate-y-16 transform md:h-[600px] md:w-[708px] lg:right-0 lg:h-[500px] lg:w-[704px]"
        />
        <div className="absolute z-0 h-[460px] w-[288px] bg-secondary md:h-[450px] md:w-[624px] lg:right-0 lg:h-[429px] lg:w-[608px]"></div>
      </section>
      <section
        id="sectionSeven"
        className="relative w-full bg-white pt-[100px] font-light text-white md:pt-[160px] lg:pt-[400px]"
      >
        <Image
          width={1440}
          height={1040}
          alt={`${sectionSevenBgImage.alt}`}
          src={builder
            .image(sectionSevenBgImage)
            .width(1440)
            .height(1040)
            .url()}
          className="h-[1040px] w-full object-cover md:h-[792px] lg:h-[1040px]"
        />
        <div className="absolute top-[30%] flex h-[413px] w-3/4 transform flex-col justify-center bg-secondary text-center text-white md:top-[34%] md:h-[487px] lg:left-1/2 lg:top-[48%] lg:h-[484px] lg:w-2/3 lg:-translate-x-1/2">
          <div className="flex flex-col px-2 md:px-[30px]">
            <h1 className="leading:6 w-2/3 self-start text-left text-base md:text-[32px] md:leading-10 lg:self-center lg:text-center lg:text-[40px] lg:leading-[52px]">
              {sectionSevenTitle}
            </h1>
            <p className="text:left w-3/4 self-start py-6 text-left text-xs leading-5 md:py-8 md:text-sm md:leading-7 lg:self-center lg:py-14 lg:text-center lg:text-base">
              {sectionSevenTextContent}
            </p>
            <a
              target="blank"
              href={ctaUrl}
              className="text:left self-start text-left text-sm italic md:text-lg md:hover:underline lg:self-center lg:text-center lg:text-2xl"
            >
              {sectionSevenCta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
