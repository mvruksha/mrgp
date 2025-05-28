import Image from "next/image";
import Link from "next/link";

const Sales = () => {
  return (
    <section className="container mx-auto px-4 py-12 mt-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Stack */}
        <div className="relative w-full h-full">
          {/* Main Image */}
          <div className="rounded-sm overflow-hidden shadow-xl">
            <Image
              src="/assets/servicespage/sales1.jpg"
              alt="Our Sales Team"
              width={700}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Overlapping Image */}
          <div className="absolute bottom-[-40px] right-[-40px] w-[300px] border-8 border-white rounded-sm shadow-2xl hidden lg:block">
            <Image
              src="/assets/servicespage/sales2.jpg"
              alt="Client Consultation"
              width={400}
              height={280}
              className="w-full h-auto object-cover rounded-sm transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-yellow-600 font-bold text-sm md:text-base uppercase tracking-wider">
              Sales
            </h4>
            <h2 className="text-2xl md:text-xl lg:text-3xl xl:text-3xl font-extrabold text-gray-800 leading-tight">
              Your Trusted Partner in Real Estate Across Doddaballapura
            </h2>
            <p className="text-gray-600 text-sm md:text-sm lg:text-sm xl:text-lg">
              At MR Geniune Properties, we help you buy and sell residential and
              commercial properties with ease. Our team works closely with you
              to understand your goals, match your preferences, and ensure a
              seamless, transparent experience.
            </p>
          </div>

          <p className="text-gray-600 text-base md:text-lg">
            Whether you&apos;re a first-time buyer, an experienced investor, or
            looking to sell, our end-to-end advisory services ensure every
            decision is backed by insights, local expertise, and market trends —
            making your journey smooth and rewarding.
          </p>

          <div>
            <Link href="/contact-us" passHref>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-semibold rounded-sm px-8 py-4 text-base md:text-lg transition-all duration-300 shadow-lg"
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
