import Image, { ImageProps } from "next/image";

export default function MDXImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt}
      className="overflow-hidden rounded-xl border border-slate-200 shadow-lg shadow-slate-200"
    />
  );
}
