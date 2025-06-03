import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Контакты
          </h2>
          <p className="text-gray-600">
            Мы всегда готовы помочь с выбором красок и материалов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
              <CardTitle>Адрес магазина</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                г. Альметьевск
                <br />
                ул. Ленина, 15
                <br />
                ТЦ "Строитель", 2 этаж
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="Navigation" size={16} />
                Проложить маршрут
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">
                <strong>+7 (8553) 12-34-56</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Консультации и заказы
                <br />
                Пн-Пт: 8:00-18:00
              </p>
              <Button
                size="sm"
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <Icon name="Phone" size={16} />
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                <Icon name="MessageCircle" className="text-white" size={24} />
              </div>
              <CardTitle>Онлайн поддержка</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Чат с консультантом
                <br />
                Подбор красок
                <br />
                Расчет количества
              </p>
              <Button
                size="sm"
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                <Icon name="MessageCircle" size={16} />
                Написать
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Почему выбирают нас?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-gray-600">
                    Широкий ассортимент красок и материалов
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-gray-600">
                    Профессиональные консультации
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-gray-600">Конкурентные цены</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-gray-600">
                    Быстрая доставка по городу
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Более 5 лет на рынке
              </h4>
              <p className="text-gray-600">
                Тысячи довольных клиентов в Альметьевске и области
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
