import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import { Loading } from "components/Loading";

import { dataset, projectId } from "../../../../sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

export default function AbovePicture({ treatment }) {
  if (!treatment) {
    return <Loading />;
  }

  return (
    <div className="">
      <Image
        loading="lazy"
        width={1440}
        height={2560}
        src={builder
          .image(treatment.aboveImage)
          .width(1440)
          .height(760)
          .quality(80)
          .url()}
        alt={treatment.title}
        className="h-[200px] w-full object-cover md:h-[300px] 2xl:h-[400px]"
      />
    </div>
  );
}
