import clsx from "clsx";

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        "mx-auto px-6 sm:px-6 md:px-4 lg:px-6 xl:px-12",
        className
      )}
      {...props}
    />
  );
};

export default Container;
