import Image from "next/image";
import { promises as fs } from "fs";
import ProductActions from "./ProductAction";

export default async function CardProduct() {
  const file = await fs.readFile(process.cwd() + "/data/products.json", "utf8");
  const datas = JSON.parse(file);

  return datas?.map((data, index) => (
    <div
      id={data.id}
      className="w-[170px] rounded-md border bg-white shadow-md dark:shadow-sm dark:shadow-neutral-500 md:w-[200px]"
      key={index}
    >
      <div className="w-full">
        <Image
          src={data.mainImage}
          alt={data.description}
          width={200}
          height={200}
          className="w-full rounded-t-md object-cover object-center"
        />
      </div>

      <div className="p-3">
        <p className="font-medium dark:text-neutral-800">{data.name}</p>
        <ProductActions
          dataSize={data.size}
          price={data.price}
          id={data.id}
          name={data.name}
          image={data.mainImage}
          color={data.color}
          amount={data.amount}
        />
      </div>
    </div>
  ));
}
