import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTabs = () => {
  const autoBrands = [
    "Mobihel",
    "Body",
    "Standox",
    "Spies Hecker",
    "Cromax",
    "Novol",
    "Hssuiw",
    "Dowiu",
    "Whhsjs",
    "Wisijsj",
    "Glasurit",
    "PPG",
    "DuPont",
    "BASF",
    "Axalta",
    "Sherwin-Williams",
    "Mipa",
    "Valspar",
  ];

  const buildingBrands = [
    "Dulux",
    "Текс",
    "Tikkurila",
    "Belinka",
    "Caparol",
    "Alpina",
    "Benjamin Moore",
    "Farrow & Ball",
    "Little Greene",
    "Johnstone's",
    "Crown Paints",
    "Zinsser",
  ];

  const artisticBrands = [
    "Гамма",
    "Невская палитра",
    "Сонет",
    "Winsor & Newton",
    "Schmincke",
    "Golden",
    "Liquitex",
    "Amsterdam",
    "Rembrandt",
    "Daler Rowney",
    "Holbein",
    "M. Graham",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Бренды красок
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите категорию для просмотра доступных марок красок и материалов
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {autoBrands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="building" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {buildingBrands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artistic" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {artisticBrands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;
