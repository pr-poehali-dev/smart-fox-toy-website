import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const foxColors = {
    orange: {
      name: "Классический оранжевый",
      image: "https://cdn.poehali.dev/projects/ec745dbf-8723-4725-a251-b62c8be5f7df/files/e4b95b2b-3226-4c5f-ba6a-1540a7a0bd06.jpg",
      gradient: "from-[#FF8C42] to-[#FFB86F]",
    },
    pink: {
      name: "Пастельно-розовый",
      image: "https://cdn.poehali.dev/projects/ec745dbf-8723-4725-a251-b62c8be5f7df/files/d322f22a-d33b-4cf3-922c-22e4567085fa.jpg",
      gradient: "from-[#FFB5C5] to-[#FFD4DF]",
    },
    gray: {
      name: "Голубовато-серый",
      image: "https://cdn.poehali.dev/projects/ec745dbf-8723-4725-a251-b62c8be5f7df/files/f4b3642b-e545-43af-ae52-ad377a5b46e2.jpg",
      gradient: "from-[#A8C5D6] to-[#C8DCE8]",
    },
  };

  const features = [
    {
      icon: "MessageCircle",
      title: "Развитие речи",
      description: "Интерактивные диалоги помогают расширить словарный запас и улучшить произношение",
    },
    {
      icon: "Brain",
      title: "Тренировка мышления",
      description: "Логические задачки и загадки развивают критическое мышление",
    },
    {
      icon: "Heart",
      title: "Эмоциональный интеллект",
      description: "Учимся распознавать эмоции и выражать чувства",
    },
    {
      icon: "Sparkles",
      title: "Творческие игры",
      description: "Сочиняем истории и развиваем воображение вместе",
    },
  ];

  const testimonials = [
    {
      name: "Мария К.",
      text: "Дочка не расстаётся с лисёнком! За месяц словарный запас заметно расширился. Отличная альтернатива гаджетам.",
      rating: 5,
    },
    {
      name: "Дмитрий Т.",
      text: "Сын в восторге от игр с лисёнком. Теперь сам просит позаниматься. Качество на высоте!",
      rating: 5,
    },
    {
      name: "Елена С.",
      text: "Покупали для 5-летнего сына. Игрушка стала любимой! Помогает развивать речь в игровой форме.",
      rating: 5,
    },
  ];

  const skills = [
    { icon: "Mic", label: "Речь" },
    { icon: "Puzzle", label: "Логика" },
    { icon: "Users", label: "Общение" },
    { icon: "BookOpen", label: "Память" },
    { icon: "Zap", label: "Внимание" },
    { icon: "Smile", label: "Эмоции" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/files/c4507e16-450b-40e8-acfc-0c1f9f674802.jpg" alt="ЛИССИ" className="h-10 w-auto" />
            <span className="font-bold text-xl text-primary">ЛИССИ</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#development" className="text-foreground hover:text-primary transition-colors">
              Развитие
            </a>
            <a href="#colors" className="text-foreground hover:text-primary transition-colors">
              Цвета
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6">
            Заказать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Учиться легко. Играть умно.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Интерактивный помощник для развития речи, мышления и общения.<br />
                Учим и играем вместе — каждый день, с интересом и пользой!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8">
                  Выбрать цвет
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full px-8"
                >
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className={`absolute inset-0 bg-gradient-to-br ${foxColors[selectedColor as keyof typeof foxColors].gradient} rounded-3xl blur-3xl opacity-30`}></div>
              <img
                src={foxColors[selectedColor as keyof typeof foxColors].image}
                alt="Умный Лисёнок"
                className="relative rounded-3xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Возможности</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что умеет наш умный лисёнок?
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-2"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="development" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Развитие навыков</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Комплексное развитие вашего ребёнка
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={skill.icon as any} className="text-primary" size={28} />
                </div>
                <span className="font-semibold text-foreground text-center">{skill.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="colors" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Выберите цвет</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Три уникальных цвета на выбор
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(foxColors).map(([key, color]) => (
              <Card
                key={key}
                onClick={() => setSelectedColor(key)}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-2 ${
                  selectedColor === key ? "ring-4 ring-primary shadow-2xl" : ""
                }`}
              >
                <div className={`bg-gradient-to-br ${color.gradient} rounded-2xl p-4 mb-4 aspect-square flex items-center justify-center`}>
                  <img src={color.image} alt={color.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-center text-foreground">{color.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Отзывы родителей</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-2 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 md:p-12 bg-white border-2">
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-center text-muted-foreground mb-8">
              Остались вопросы? Мы с радостью ответим!
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
              >
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="https://cdn.poehali.dev/files/c4507e16-450b-40e8-acfc-0c1f9f674802.jpg" alt="ЛИССИ" className="h-12 w-auto" />
            <span className="font-bold text-2xl">ЛИССИ</span>
          </div>
          <p className="text-white/70 mb-6">
            Обучающий помощник для детей 4–8 лет
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-white/50 text-sm">© 2024 Умный Лисёнок. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;