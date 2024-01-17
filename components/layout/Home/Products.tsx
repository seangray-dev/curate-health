import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProductExample from 'public/images/product-example.png';
import { useEffect, useRef, useState } from 'react';
import { SwipeCarousel } from './Carousel';
import HoverLink from './HoverLink';

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: 'Custom Foot Orthotics',
      description: 'Treat or prevent abnormal motion, or rolling of the foot',
      image: ProductExample,
    },
    {
      title: 'Compression Stockings',
      description: 'Improve blood flow in the veins of your legs',
      image: ProductExample,
    },
    {
      title: 'Tens Machines',
      description:
        'Reduce the pain signals going to the spinal cord and brain, which amy help relieve pain and relax muscles',
      image: ProductExample,
    },
  ];

  const totalProducts = products.length;
  const currentProduct = products[currentIndex];

  const nextProduct = () => {
    setCurrentIndex((current) => (current + 1) % totalProducts);
  };

  const prevProduct = () => {
    setCurrentIndex((current) => (current - 1 + totalProducts) % totalProducts);
  };

  return (
    <section className='bg-white'>
      <div className='container pt-9'>
        <h2 className='mb-8 text-black md:text-xl'>Products</h2>
      </div>
      <SwipeCarousel />
      <HoverLink
        href='/products'
        text='View All Products'
        textColor='text-black'
      />
    </section>
  );
}
