import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTabs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4 font-montserrat text-2xl font-semibold">
            Наши товары и услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Скоро здесь появится актуальная информация о наших продуктах
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
