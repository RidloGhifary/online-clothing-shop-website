import Navbar from './navbar/layout'
import Header from './header/layout'
import ProductSection from './productSection/page'

export default function Home() {
  return (
    <div className='mb-[200px]'>
      <Navbar />
      <Header />
      <ProductSection />
    </div>
  )
}
