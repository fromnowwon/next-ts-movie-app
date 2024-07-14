import Image from "next/image";

interface LoaderProps {
  size: {
    width: number;
    height: number;
  };
}

export default function Loader({ size }: LoaderProps) {
  return (
    <Image
      src="/spinner.svg"
      alt="Loading..."
      width={size.width}
      height={size.height}
    />
  );
}
