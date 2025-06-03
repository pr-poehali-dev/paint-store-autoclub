import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

const ProductTabs = () => {
  const autoProducts = [
    {
      name: "Эмаль акриловая 2К",
      description:
        "Двухкомпонентная акриловая эмаль для профессионального окрашивания",
      price: "2 850 ₽",
      brand: "Mobihel",
      inStock: true,
    },
    {
      name: "Грунт антикоррозийный",
      description: "Защитный грунт для металлических поверхностей",
      price: "1 240 ₽",
      brand: "Body",
      inStock: true,
    },
    {
      name: "Лак прозрачный 2К",
      description: "Двухкомпонентный прозрачный лак повышенной прочности",
      price: "3 150 ₽",
      brand: "Standox",
      inStock: false,
    },
  ];

  const buildingProducts = [
    {
      name: "Краска фасадная",
      description: "Атмосферостойкая краска для наружных работ",
      price: "1 890 ₽",
      brand: "Dulux",
      inStock: true,
    },
    {
      name: "Эмаль ПФ-115",
      description:
        "Универсальная алкидная эмаль для внутренних и наружных работ",
      price: "650 ₽",
      brand: "Текс",
      inStock: true,
    },
    {
      name: "Краска интерьерная",
      description: "Водоэмульсионная краска для внутренних работ",
      price: "1 320 ₽",
      brand: "Tikkurila",
      inStock: true,
    },
  ];

  const artisticProducts = [
    {
      name: "Акриловые краски набор",
      description: "Набор художественных акриловых красок 12 цветов",
      price: "980 ₽",
      brand: "Гамма",
      inStock: true,
    },
    {
      name: "Масляные краски",
      description: "Профессиональные масляные краски для живописи",
      price: "2 450 ₽",
      brand: "Невская палитра",
      inStock: true,
    },
    {
      name: "Акварельные краски",
      description: "Медовые акварельные краски 24 цвета",
      price: "1 150 ₽",
      brand: "Сонет",
      inStock: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Наш ассортимент
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите категорию товаров для просмотра доступных позиций и цен
          </p>
        </div>

        <Tabs defaultValue="auto" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="auto" className="text-center">
              🚗 Автомобильные краски
            </TabsTrigger>
            <TabsTrigger value="building" className="text-center">
              🏠 Строительные краски
            </TabsTrigger>
            <TabsTrigger value="artistic" className="text-center">
              🎨 Художественные материалы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="auto" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {autoProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="building" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artistic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisticProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;
