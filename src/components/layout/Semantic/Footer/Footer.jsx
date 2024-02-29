import Image from "next/image";
import Link from "next/link";
import { FooterLink } from "./footer_components/FooterLink";

const footerElements = [
  { id: 1, name: "link1", href: "href1" },
  { id: 2, name: "link2", href: "href2" },
  { id: 3, name: "link3", href: "href3" },
  { id: 4, name: "link4", href: "href4" },
  { id: 5, name: "link5", href: "href5" },
  { id: 6, name: "link6", href: "href6" },
  { id: 7, name: "link7", href: "href7" },
  { id: 8, name: "link8", href: "href8" },
  { id: 9, name: "link9", href: "href9" },
  { id: 10, name: "link10", href: "href10" },
  { id: 11, name: "link11", href: "href11" },
];

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-start items-start gap-2">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Website Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/2 h-auto"
        />
      </Link>
      <div className="footer-navigation flex flex-col items-start gap-2">
        <h6 className="text-lg font-semibold mb-3">Navigation</h6>
        <ul className="flex flex-col justify-between items-start gap-5 flex-wrap max-h-40">
          {footerElements.map((el) => {
            return <FooterLink key={el.id} el={el} />;
          })}
        </ul>
      </div>
    </footer>
  );
};
