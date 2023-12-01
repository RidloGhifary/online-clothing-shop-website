import Image from 'next/image';
import { promises as fs } from 'fs';
import ComponentProducts from './componentProducts/componenProducts';

export default async function CartProduct() {
  const file = await fs.readFile(process.cwd() + '/data/products.json', 'utf8');
  const datas = JSON.parse(file);

  return (
    datas?.map((data, index) => {

      return (
        <div id={data.id} className='w-[200px] border rounded-md shadow-md bg-white' key={index}>
          <div className='w-full'>
            <Image src={data.mainImage} alt={data.description} width={200} height={200}
              className='w-full object-cover object-center rounded-t-md' />
          </div>

          <div className='p-3'>
            <p className='font-medium'>{data.name}</p>
            <ComponentProducts
              dataSize={data.size}
              price={data.price}
              id={data.id}
              name={data.name}
              image={data.mainImage} />
          </div>
        </div>
      );

    })
  );
} 
