import Image from "next/image";
import Link from "next/link";

const Consultations = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="rounded-sm overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
          <Image
            src="/assets/servicespage/consultation.jpg"
            alt="Consultation Service"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h4 className="text-yellow-500 font-bold text-sm md:text-base uppercase tracking-wider">
            Consultations
          </h4>
          <h2 className="text-xl md:text-xl lg:text-3xl xl:text-3xl font-extrabold text-gray-800 leading-tight">
            One-on-One Real Estate Consultations with Surya Vruksha Property Junction
          </h2>
          <p className="text-gray-600 text-sm md:text-sm lg:text-sm xl:text-lg">
            We offer personalized consultation services that go beyond listings.
            Whether you&apos;re buying, selling, or exploring options, our team
            listens to your needs and offers expert insights to guide your
            decisions.
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            Gain access to local market intelligence, property comparisons,
            legal clarity, and investment strategies — all designed to help you
            act with confidence.
          </p>

          <div>
            <Link href="/contact-us" passHref>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-semibold rounded-sm px-8 py-4 text-base md:text-lg transition-all duration-300 shadow-lg"
              >
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultations;
