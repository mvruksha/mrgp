import Image from "next/image";
import Link from "next/link";

const AdvisorySupport = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h4 className="text-yellow-500 font-bold text-sm md:text-base uppercase tracking-wider">
            Advisory Support
          </h4>
          <h2 className="text-xl md:text-xl lg:text-3xl xl:text-3xl font-extrabold text-gray-800 leading-tight">
            Strategic Real Estate Guidance with Surya Vruksha Property Junction
          </h2>
          <p className="text-gray-600 text-sm md:text-sm lg:text-sm xl:text-lg">
            Our advisory team is committed to helping you make informed
            decisions — whether it&apos;s buying your dream home, investing in
            commercial property, or selling with confidence. We analyze market
            trends, legal parameters, and financing options to provide tailored
            advice.
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            From site visits to paperwork and post-sale support, MR Geniune
            Properties stands by you at every step, making your real estate
            journey worry-free and successful.
          </p>

          <div>
            <Link href="/contact-us" passHref>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-semibold rounded-sm px-8 py-4 text-base md:text-lg transition-all duration-300 shadow-lg"
              >
                Talk to Our Experts
              </button>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="rounded-sm overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
          <Image
            src="/assets/servicespage/advisory.jpg"
            alt="Advisory Team Support"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AdvisorySupport;
