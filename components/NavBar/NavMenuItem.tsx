import Link from "next/link";

interface NavMenuItemProps {
  title: string;
  address: string;
}

export default function NavMenuItem({ title, address }: NavMenuItemProps) {
  return (
    <Link
      href={address}
      className="py-1 min-w-[60px] font-bold hover:text-primary transition-colors"
    >
      {title}
    </Link>
  );
}
