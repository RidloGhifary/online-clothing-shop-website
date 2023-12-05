import Colors from "./colors/page";
import BannerPage from "./compents/banner/page";
import Header from "./header/layout";
import InformationPage from "./informationPage/page";
import Map from "./map/page";
import ProductSection from "./productSection/page";

export default function Page() {

  return (
    <>
      <Header />
      <Colors />
      <ProductSection />
      <BannerPage />
      <InformationPage />
      <Map />
      <Colors />
    </>
  )
}