import Footer from "@/components/footer";
import FooterInfoDeliveryArea from "@/components/footerinfodeliveryarea";
import Header from "@/components/header";
import ResponsiveAppBar from "@/components/header";
import SignUpSection from "@/components/signupsection";
import TermsOfService from "@/components/termsofservice";

export default function Home() {
  return (
    <div>
        <Header />
        <TermsOfService />
        <Footer />
    </div>
  )
}
