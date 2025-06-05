import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Palette" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
                Автоклуб
              </h1>
              <p className="text-sm text-gray-600">
                Магазин красок в Альметьевске
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Phone" size={16} />
              <span className="text-sm">+7 (8553) 32 46 30</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Clock" size={16} />
              <span className="text-sm">Пн-Сб: 9:00-19:00 Вс: 9:00-17:00</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Icon name="MessageCircle" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
