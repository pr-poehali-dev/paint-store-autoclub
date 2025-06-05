const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
          Кузовные технологии - Простые решения с АВТОКЛУБ
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Профессиональные краски для автомобилей, строительства и творчества.
          Качественные материалы от ведущих производителей по выгодным ценам.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              🚗
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Автомобильные краски
            </h3>
            <p className="text-gray-600 text-sm">
              Эмали, лаки, грунтовки для кузовного ремонта
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              🏠
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Строительные краски
            </h3>
            <p className="text-gray-600 text-sm">
              Фасадные, интерьерные краски и покрытия
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              🎨
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Художественные материалы
            </h3>
            <p className="text-gray-600 text-sm">
              Краски для творчества и художественных работ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
