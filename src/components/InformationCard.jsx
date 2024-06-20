import Image from "next/image";

export default function InformationCard({
  imagePath,
  title,
  description,
  additionalClassName,
}) {
  return (
    <div className={`grid grid-cols-2 items-center justify-center gap-3`}>
      <Image
        src={imagePath}
        alt={title}
        width={500}
        height={500}
        loading="lazy"
        className={`mx-auto h-[300px] w-[300px] rounded-md object-cover object-center shadow-md ${additionalClassName}`}
      />
      <div className="">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-200 md:text-5xl">
          {title}
        </h2>
        <p className="text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
