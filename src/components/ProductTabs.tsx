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

  const equipment = [
    "Окрасочные аппараты",
    "Шлифмашины",
    "Краскопульты",
    "Компрессоры",
    "Полировальные машины",
    "Пескоструйные аппараты",
    "Сварочное оборудование",
    "Пневмоинструмент",
  ];

  const tools = [
    "Домкраты",
    "Головки торцевые",
    "Ключи гаечные",
    "Отвертки",
    "Трещотки",
    "Съемники",
    "Молотки",
    "Плоскогубцы",
    "Тиски",
    "Напильники",
  ];

  const batteries = [
    "Прямая полярность отечественные",
    "Обратная полярность отечественные",
    "Прямая полярность импортные",
    "Обратная полярность импортные",
    "Аккумуляторы 55Ah",
    "Аккумуляторы 60Ah",
    "Аккумуляторы 75Ah",
    "Аккумуляторы 90Ah",
  ];

  const aerosols = [
    "Грунтовки аэрозольные",
    "Краски аэрозольные",
    "Лаки аэрозольные",
    "Очистители аэрозольные",
    "WD-40",
    "Смазки аэрозольные",
    "Антикоррозийные составы",
    "Обезжириватели",
  ];

  const consumables = [
    "Малярный скотч",
    "Наждачная бумага",
    "Растворители",
    "Шпатлевки",
    "Полировальные пасты",
    "Ветошь",
    "Кисти",
    "Валики",
    "Абразивные круги",
    "Защитная пленка",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4 font-montserrat text-3xl font-extrabold">
            Наш ассортимент{" "}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto"></p>
        </div>

        <Tabs defaultValue="auto" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="auto" className="text-center">
              🚗 Краски
            </TabsTrigger>
            <TabsTrigger value="equipment" className="text-center">
              🔧 Оборудование
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-center">
              🛠️ Инструменты
            </TabsTrigger>
            <TabsTrigger value="batteries" className="text-center">
              🔋 Аккумуляторы
            </TabsTrigger>
            <TabsTrigger value="aerosols" className="text-center">
              💨 Аэрозоли
            </TabsTrigger>
            <TabsTrigger value="consumables" className="text-center">
              📦 Расходники
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

          <TabsContent value="equipment" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {tools.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-slate-100 border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="batteries" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {batteries.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="aerosols" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {aerosols.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50 to-blue-100 border border-cyan-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="consumables" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {consumables.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
                >
                  <span className="font-semibold text-gray-800">{item}</span>
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
