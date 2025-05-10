import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Навигационная панель */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-[#1A1F2C]">
            <span className="text-red-500">China</span>Trade
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-slate-700 hover:text-red-500 transition-colors"
            >
              О курсе
            </a>
            <a
              href="#program"
              className="text-slate-700 hover:text-red-500 transition-colors"
            >
              Программа
            </a>
            <a
              href="#examples"
              className="text-slate-700 hover:text-red-500 transition-colors"
            >
              Примеры цен
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-red-500 transition-colors"
            >
              Контакты
            </a>
            <Button className="bg-red-500 hover:bg-red-600">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-[#1A1F2C]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Обучение по выкупу товара из Китая
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Всего 5000 руб за полный курс с надёжными посредниками и
              поддержкой 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-500 hover:bg-red-600 text-lg px-8 py-6">
                Начать обучение
              </Button>
              <Button
                variant="outline"
                className="border-slate-500 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Что входит в обучение
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Video" className="text-indigo-600" size={24} />
                </div>
                <CardTitle>Видеосвязь с экспертом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Персональные консультации по видеосвязи для решения ваших
                  вопросов в реальном времени
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name="Presentation"
                    className="text-indigo-600"
                    size={24}
                  />
                </div>
                <CardTitle>Детальная презентация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Структурированные материалы, которые помогут вам разобраться
                  во всех деталях процесса
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-4">
                  <Icon name="Headset" className="text-indigo-600" size={24} />
                </div>
                <CardTitle>Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Круглосуточная помощь от наших надёжных посредников, которые
                  помогут решить любые вопросы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Программа обучения */}
      <section id="program" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Программа обучения
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#1A1F2C] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Поиск надёжных поставщиков
                  </h3>
                  <p className="text-slate-600">
                    Научитесь выбирать проверенных поставщиков на китайских
                    площадках и избегать мошенников
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#1A1F2C] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Проверка качества товара
                  </h3>
                  <p className="text-slate-600">
                    Освоите методы контроля качества и способы минимизации
                    рисков при заказе товаров
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#1A1F2C] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Логистика и таможня
                  </h3>
                  <p className="text-slate-600">
                    Изучите оптимальные способы доставки и прохождения
                    таможенного оформления
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[#1A1F2C] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Расчёт себестоимости
                  </h3>
                  <p className="text-slate-600">
                    Научитесь правильно калькулировать все расходы для получения
                    максимальной прибыли
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#1A1F2C] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Безопасные платежи</h3>
                  <p className="text-slate-600">
                    Изучите методы безопасной оплаты и перевода средств
                    китайским партнерам
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-[#1A1F2C] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Практическое задание
                  </h3>
                  <p className="text-slate-600">
                    Выполните реальный заказ под руководством эксперта с
                    применением полученных знаний
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок с ценой и условиями */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Стоимость обучения
          </h2>
          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-[#1A1F2C]">
              <CardHeader className="text-center bg-[#1A1F2C] text-white">
                <CardTitle className="text-2xl">Полный курс обучения</CardTitle>
                <CardDescription className="text-slate-300">
                  Все необходимые знания для старта
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold">5000 ₽</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" />
                    <span>Персональные видеоконсультации</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" />
                    <span>Полная презентация по работе с Китаем</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" />
                    <span>Поддержка надёжных посредников 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" />
                    <span>Доступ к закрытому сообществу</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" />
                    <span>Бонусные материалы и шаблоны</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full py-6 text-lg bg-red-500 hover:bg-red-600">
                  Записаться на обучение
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Примеры цен на товары из Китая
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Посмотрите, насколько выгодно закупать товары напрямую у китайских
            производителей. Маржинальность при перепродаже может достигать
            200-300%!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Товар 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="Беспроводные наушники"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Беспроводные наушники</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500">Цена в Китае:</p>
                    <p className="text-xl font-bold text-green-600">
                      ¥68 (~680₽)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Цена в России:</p>
                    <p className="text-lg font-semibold text-slate-800">
                      2 500 - 3 000₽
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Товар 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Умные часы"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Умные часы</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500">Цена в Китае:</p>
                    <p className="text-xl font-bold text-green-600">
                      ¥120 (~1 200₽)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Цена в России:</p>
                    <p className="text-lg font-semibold text-slate-800">
                      3 500 - 4 500₽
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Товар 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                  alt="Портативная колонка"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Портативная колонка</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500">Цена в Китае:</p>
                    <p className="text-xl font-bold text-green-600">
                      ¥95 (~950₽)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Цена в России:</p>
                    <p className="text-lg font-semibold text-slate-800">
                      2 900 - 3 500₽
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Товар 4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                  alt="Спортивная обувь"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Спортивная обувь</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-500">Цена в Китае:</p>
                    <p className="text-xl font-bold text-green-600">
                      ¥180 (~1 800₽)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Цена в России:</p>
                    <p className="text-lg font-semibold text-slate-800">
                      5 000 - 7 000₽
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-red-500 hover:bg-red-600 px-8 py-6 text-lg">
              Узнать, как начать зарабатывать на товарах из Китая
            </Button>
            <p className="mt-4 text-slate-600">
              Полный курс обучения научит вас всем тонкостям поиска, проверки
              качества и выкупа товаров напрямую у производителей
            </p>
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Остались вопросы?
          </h2>
          <div className="max-w-lg mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>
                  Мы с радостью ответим на ваши вопросы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Имя
                      </label>
                      <input
                        id="name"
                        className="w-full p-2 border rounded"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-2 border rounded"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border rounded h-32"
                      placeholder="Ваш вопрос или комментарий"
                    ></textarea>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1A1F2C]">Отправить</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал сайта */}
      <footer className="bg-[#1A1F2C] text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="font-bold text-2xl mb-4 md:mb-0">
              <span className="text-red-500">China</span>Trade
            </div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-red-400 transition-colors">
                О курсе
              </a>
              <a
                href="#program"
                className="hover:text-red-400 transition-colors"
              >
                Программа
              </a>
              <a
                href="#contact"
                className="hover:text-red-400 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} ChinaTrade. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
