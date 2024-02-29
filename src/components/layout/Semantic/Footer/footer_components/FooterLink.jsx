import Link from "next/link";

export const FooterLink = ({ el }) => {
  return (
    <li className="cursor-pointer">
      <Link
        className="text-black text-center text-sm font-light rounded-3xl hover:underline transition duration-200"
        href={el.href}
      >
        {el.name}
      </Link>
    </li>
  );
};
