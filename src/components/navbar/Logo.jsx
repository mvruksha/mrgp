import Link from "next/link";
import clsx from "clsx";
import logo from "../../../public/assets/logo/mlogo.svg";
import Image from "next/image";

const Logo = ({ className, ...props }) => {
  return (
    <Link href="/">
      <div
        className={clsx(
          "flex items-center font-bold text-white hover:text-gray-900 duration-300",
          className
        )}
        {...props}
      >
        {/* Desktop Logo */}
        <div className="hidden sm:block">
          <Image src={logo} alt="logo" width={220} height={120} priority />
        </div>

        {/* Mobile Logo */}
        <div className="block sm:hidden">
          <Image src={logo} alt="logo" width={180} height={80} priority />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
