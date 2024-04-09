import FooterInfoDeliveryArea from "@/components/footerInfo/FooterInfoDeliveryArea";
import { getUserLayout } from "@/components/layout/UserLayout";

export default function DeliveryArea() {
  return (
    <>
      <FooterInfoDeliveryArea />
    </>
  );
}

DeliveryArea.getLayout = getUserLayout;
