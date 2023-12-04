import Header from "./header/layout";
import Map from "./map/page";
import ProductSection from "./productSection/page";

export default function Page() {

  return (
    <div>
      <Header />
      <ProductSection />
      <Map />
    </div>
  )
}