import Link from 'next/link';

interface MenuUIProps {
  onClose?: () => void;
}

export default function MenuUI({ onClose }: MenuUIProps) {
    const menuItems = [
      { name: "HOME", href: "/" },
      { name: "ABOUT", href: "/about" },
      { name: "PROJECTS", href: "/project" },
      { name: "CONTACT", href: "/contact" }
    ];
  return (
    <div className="h-screen w-full bg-black flex flex-col justify-center text-white mt-10 ">

      {menuItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          onClick={onClose}
          className="w-full border-t border-amber-600 last:border-b flex justify-center items-center hover:bg-neutral-900   transition-colors duration-300"
        >
          <h1 className="text-[6vw]  hover:scale-0.8 leading-none font-bold  py-10 tracking-wide">
            {item.name}
          </h1>
        </Link>
      ))}

    </div>
  );
}
