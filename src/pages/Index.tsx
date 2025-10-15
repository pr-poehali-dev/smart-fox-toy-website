import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const foxColors = {
    orange: {
      name: "Классический оранжевый",
      gradient: "from-orange-400 to-orange-300",
      bgClass: "bg-orange-100",
    },
    pink: {
      name: "Пастельно-розовый",
      gradient: "from-pink-300 to-pink-200",
      bgClass: "bg-pink-100",
    },
    gray: {
      name: "Голубовато-серый",
      gradient: "from-slate-300 to-blue-200",
      bgClass: "bg-slate-100",
    },
  };

  const features = [
    {
      icon: "MessageCircle",
      title: "Развитие речи",
      description: "Интерактивные диалоги и беседы расширяют словарный запас и улучшают произношение через игру",
    },
    {
      icon: "Brain",
      title: "Тренировка мышления",
      description: "Логические задачки, загадки и головоломки развивают критическое и аналитическое мышление",
    },
    {
      icon: "Heart",
      title: "Эмоциональный интеллект",
      description: "Учимся понимать эмоции, выражать чувства и взаимодействовать с окружающими",
    },
    {
      icon: "Sparkles",
      title: "Творческие игры",
      description: "Сочиняем истории, придумываем персонажей и развиваем богатое воображение",
    },
  ];

  const benefits = [
    {
      icon: "MonitorOff",
      title: "Без экранов",
      text: "Полностью безопасно для зрения — никаких дисплеев",
    },
    {
      icon: "ShieldCheck",
      title: "Безопасность",
      text: "Сертифицированные материалы, безопасные для детей",
    },
    {
      icon: "Battery",
      title: "До 12 часов работы",
      text: "Долгоиграющий аккумулятор для полного дня игр",
    },
    {
      icon: "Volume2",
      title: "Голосовое управление",
      text: "Естественное общение голосом без кнопок",
    },
  ];

  const skills = [
    { icon: "Mic", label: "Речь" },
    { icon: "Lightbulb", label: "Логика" },
    { icon: "Users", label: "Общение" },
    { icon: "BookOpen", label: "Память" },
    { icon: "Zap", label: "Внимание" },
    { icon: "Smile", label: "Эмоции" },
  ];

  const reviews = [
    {
      name: "Анна М.",
      text: "Дочка не расстаётся с лисёнком! За два месяца словарный запас заметно вырос. Лучшая покупка!",
      rating: 5,
    },
    {
      name: "Дмитрий К.",
      text: "Сын в восторге. Теперь сам просит позаниматься с игрушкой. Качество на высшем уровне!",
      rating: 5,
    },
    {
      name: "Елена Р.",
      text: "Взяли розового для 5-летней дочки. Игрушка стала любимой! Помогает развивать речь очень естественно.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🦊</div>
            <span className="font-bold text-2xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              ЛИССИ
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Возможности
            </a>
            <a href="#colors" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Цвета
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Отзывы
            </a>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-full px-6 shadow-lg">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-tight">
              Умный лисёнок для умных детей
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Интерактивная игрушка для развития речи, мышления и коммуникации в игровой форме. 
              Без экранов, без гаджетов — только живое общение!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold rounded-full px-10 py-6 text-lg shadow-xl">
                Выбрать цвет
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold rounded-full px-10 py-6 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {Object.entries(foxColors).map(([key, color]) => (
              <Card
                key={key}
                onClick={() => setSelectedColor(key)}
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  selectedColor === key ? "ring-4 ring-orange-400 shadow-2xl scale-105" : ""
                }`}
              >
                <div className={`h-64 rounded-2xl bg-gradient-to-br ${color.gradient} mb-4 flex items-center justify-center text-8xl`}>
                  🦊
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800">{color.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Что умеет лисёнок?</h2>
            <p className="text-xl text-gray-600">
              Полноценный обучающий помощник для вашего ребёнка
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-100">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} className="text-orange-500" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Развитие навыков</h2>
            <p className="text-xl text-gray-600">
              Комплексное развитие вашего ребёнка 4-8 лет
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center gap-4 hover:shadow-xl transition-all duration-300 hover:scale-110 bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Icon name={skill.icon as any} className="text-white" size={28} />
                </div>
                <span className="font-bold text-gray-800 text-center">{skill.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Отзывы родителей</h2>
            <p className="text-xl text-gray-600">
              Что говорят те, кто уже купил лисёнка
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.text}"</p>
                <p className="font-bold text-gray-800">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите цвет и закажите умного лисёнка прямо сейчас!
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold rounded-full px-12 py-6 text-lg shadow-2xl">
            Заказать ЛИССИ
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🦊</div>
                <span className="font-bold text-xl">ЛИССИ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Умная интерактивная игрушка для развития детей 4-8 лет
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <div className="space-y-2 text-gray-400">
                <div>Возможности</div>
                <div>Цвета</div>
                <div>Характеристики</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <div className="space-y-2 text-gray-400">
                <div>FAQ</div>
                <div>Доставка</div>
                <div>Гарантия</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>info@lissi.ru</div>
                <div>+7 (900) 123-45-67</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 ЛИССИ. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
