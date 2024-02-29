import Link from "next/link";

export const HeaderLink = ({ el }) => {
  return (
    <li className="cursor-pointer">
      <Link
        className="bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white text-center rounded-3xl transition duration-200"
        href={el.href}
      >
        {el.name}
      </Link>
    </li>
  );
};
