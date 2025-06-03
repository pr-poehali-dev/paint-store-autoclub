import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductTabs from "@/components/ProductTabs";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductTabs />
      <ContactInfo />
    </div>
  );
};

export default Index;
