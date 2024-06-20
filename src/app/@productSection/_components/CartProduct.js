import Image from 'next/image';
import { promises as fs } from 'fs';
import ProductActions from './ProductActions';

export default async function CartProduct() {
  const file = await fs.readFile(process.cwd() + '/data/products.json', 'utf8');
  const datas = JSON.parse(file);

  return (
    datas?.map((data, index) => (
      <div id={data.id}
          className='w-[170px] md:w-[200px] border rounded-md shadow-md dark:shadow-neutral-500 dark:shadow-sm bg-white'
          key={index}>
          <div className='w-full'>
            <Image src={data.mainImage} alt={data.description} width={200} height={200}
              className='w-full object-cover object-center rounded-t-md' />
          </div>

          <div className='p-3'>
            <p className='font-medium dark:text-neutral-800'>{data.name}</p>
            <ProductActions
              dataSize={data.size}
              price={data.price}
              id={data.id}
              name={data.name}
              image={data.mainImage}
              color={data.color}
              amount={data.amount} />
          </div>
        </div>
    ))
  );
} 
