import Link from "next/link";

export const Footer = ({ className = "" }: { className?: string }) => {
  return (
    <section
      className={`border-t w-full p-4 flex justify-between gap-2 ${className}`}
    >
      <p>Site is under construction</p>
      <span className="flex gap-2">
        <Link className="hover:text-blue-500" href="/contact-us">
          Contact Us
        </Link>
        <Link className="hover:text-blue-500" href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className="hover:text-blue-500" href="/terms-and-condition">
          Terms and Condition
        </Link>
        <Link className="hover:text-blue-500" href="/cancellation">
          Cancellation
        </Link>
      </span>
    </section>
  );
};
