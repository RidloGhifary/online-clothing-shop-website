import BannerPage from "./compents/banner/page";
import Header from "./header/layout";
import InformationPage from "./informationPage/page";
import Map from "./map/page";
import ProductSection from "./productSection/page";

export default function Page() {

  return (
    <div>
      <Header />
      <ProductSection />
      <BannerPage />
      <InformationPage />
      <Map />
    </div>
  )
}