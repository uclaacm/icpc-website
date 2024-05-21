import React from 'react';
import { Link, Image } from "@chakra-ui/react";

import { useMediaQuery } from 'hooks';

const Sponsor = ({ sponsor_name, external_link, img_src }) => {
  const isMobile = !useMediaQuery('(min-width: 768px)');
  return (
    <Link href={external_link} isExternal>
      <Image
        alt={sponsor_name}
        mx="auto"
        my="10px"
        objectFit="fit"
        src={img_src}
        width={isMobile ? "80%" : "200px"}
        // maxHeight={isMobile ? null : "400px"}
        // maxWidth={isMobile ? null : "400px"}
      />
    </Link>
  );
};

export default Sponsor;
