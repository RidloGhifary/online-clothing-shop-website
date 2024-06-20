import Image from "next/image";

export default function ShopAdd({ imagePath, title, description }) {
  return (
    <div className="relative mb-3 w-full rounded-lg border shadow-md">
      <Image
        src={imagePath}
        alt={title}
        loading="lazy"
        width={400}
        height={400}
        className="aspect-auto w-full rounded-lg border object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 w-full rounded-lg border bg-black/30 p-4 py-[50%]">
        <h3 className="m-auto text-6xl font-semibold text-neutral-100 md:text-4xl md:leading-10">
          {title}
        </h3>
        <p className="mt-4 text-base font-medium leading-snug text-neutral-100 md:mt-2 md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
