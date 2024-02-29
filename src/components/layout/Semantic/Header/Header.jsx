import Image from "next/image";
import Link from "next/link";
import { HeaderLink } from "./header_components/HeaderLink";

const headerElements = [
  { id: 1, name: "link1", href: "href1" },
  { id: 2, name: "link2", href: "href2" },
];

export const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center gap-2">
        <Link href="/">
          <Image
            src="/next.svg"
            alt="Website Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-2/3 h-auto"
          />
        </Link>
        <ul className="flex flex-row items-center gap-3">
          {headerElements.map((el) => {
            return <HeaderLink key={el.id} el={el} />;
          })}
        </ul>
      </div>
    </header>
  );
};
