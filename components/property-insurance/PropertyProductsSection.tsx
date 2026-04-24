"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";


const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

interface Product {
  title: string;
  description: string;
  href: string;
  image?: string;
}


export default function PropertyProductsSection( { products }: { products: Product[] } ) {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-2 mb-8 lg:mb-10"
        >
          <h2 className="font-body text-xl lg:text-2xl font-semibold text-dark-text">
            Choose your Property Insurance product
          </h2>
          <p className="font-body text-sm lg:text-base text-body-text">
            Select the type of cover
          </p>
        </motion.div>

        {/* Products grid — 3 cols, 5 items (last row has 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ title, description, href, image }, index) => (
            <motion.div
              key={title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: index * 0.08 }}
              className="border border-[#F3F4F6] rounded-lg"
            >
              <Link
                href={href}
                className="group flex flex-col overflow-hidden  transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red "
                aria-label={`Learn more about ${title}`}
              >
                {/* Card image */}
                <div className="relative h-[240px] lg:h-[300px] w-full overflow-hidden rounded-tl-lg rounded-tr-lg">
                  <Image
                    src={image || "/images/property-product.png"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card text */}
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="font-heading text-[20px] font-bold text-black capitalize leading-snug">
                    {title}
                  </h3>
                  <p className="font-body text-base text-body-text leading-[1.45]">
                    {description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
