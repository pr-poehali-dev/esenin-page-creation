import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('biography');

  const poems = [
    {
      title: 'Письмо к женщине',
      year: 1924,
      text: 'Вы помните,\nВы всё, конечно, помните,\nКак я стоял,\nПриблизившись к стене,\nВзволнованно ходили вы по комнате\nИ что-то резкое\nВ лицо бросали мне.',
      category: 'Лирика'
    },
    {
      title: 'Не жалею, не зову, не плачу',
      year: 1921,
      text: 'Не жалею, не зову, не плачу,\nВсё пройдёт, как с белых яблонь дым.\nУвяданья золотом охваченный,\nЯ не буду больше молодым.',
      category: 'Философская лирика'
    },
    {
      title: 'Письмо матери',
      year: 1924,
      text: 'Ты жива ещё, моя старушка?\nЖив и я. Привет тебе, привет!\nПусть струится над твоей избушкой\nТот вечерний несказанный свет.',
      category: 'Лирика'
    },
    {
      title: 'Шаганэ ты моя, Шаганэ',
      year: 1924,
      text: 'Шаганэ ты моя, Шаганэ!\nПотому, что я с севера, что ли,\nЯ готов рассказать тебе поле,\nПро волнистую рожь при луне.',
      category: 'Любовная лирика'
    }
  ];

  const timeline = [
    { year: 1895, event: 'Родился в селе Константиново Рязанской губернии' },
    { year: 1912, event: 'Переехал в Москву, начал публиковаться' },
    { year: 1915, event: 'Познакомился с Блоком, вышел первый сборник стихов' },
    { year: 1916, event: 'Вышел сборник "Радуница"' },
    { year: 1917, event: 'Женился на Зинаиде Райх' },
    { year: 1921, event: 'Брак с Айседорой Дункан' },
    { year: 1924, event: 'Расцвет творчества, написаны лучшие произведения' },
    { year: 1925, event: 'Трагическая гибель в Ленинграде' }
  ];

  const quotes = [
    'Другом роса медвяная / \'покойно дремлет лес, / И рогчех / Я дремлет трудливы, / И над рекоп туман...',
    'Не жалею, не зову, не плачу, / Всё пройдёт, как с белых яблонь дым.',
    'Я московский озорной гуляка.',
    'Лицом к лицу лица не увидать. / Большое видится на расстоянье.'
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl p-4 md:p-8">
        <Card className="mb-6 overflow-hidden border-none shadow-lg">
          <div className="h-32 bg-gradient-to-r from-primary/80 to-primary"></div>
          
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                <AvatarImage src="https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg" />
                <AvatarFallback>СЕ</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Сергей Есенин</h1>
                <p className="text-muted-foreground mb-4">Русский поэт</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <span>3 октября 1895 — 28 декабря 1925</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={18} className="text-primary" />
                    <span>Константиново, Рязань</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="BookOpen" size={18} className="text-primary" />
                    <span>245 стихотворений</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Icon name="Share2" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Heart" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="biography" className="flex items-center gap-2">
              <Icon name="User" size={16} />
              <span className="hidden sm:inline">Биография</span>
            </TabsTrigger>
            <TabsTrigger value="works" className="flex items-center gap-2">
              <Icon name="Feather" size={16} />
              <span className="hidden sm:inline">Творчество</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Icon name="Image" size={16} />
              <span className="hidden sm:inline">Галерея</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="flex items-center gap-2">
              <Icon name="Quote" size={16} />
              <span className="hidden sm:inline">Цитаты</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="biography" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="BookOpen" size={24} className="text-primary" />
                О поэте
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Сергей Александрович Есенин — один из самых популярных и читаемых русских поэтов XX века. 
                  Его лирика, пронизанная любовью к родине и русской природе, стала неотъемлемой частью культурного наследия России.
                </p>
                <p>
                  Родился в крестьянской семье в селе Константиново Рязанской губернии. С детства увлекался чтением 
                  и начал писать стихи. В 1912 году переехал в Москву, где работал в типографии и посещал 
                  литературные кружки.
                </p>
                <p>
                  Поэзия Есенина отличается удивительной музыкальностью, простотой и искренностью. 
                  Его произведения о любви, природе и родине стали классикой русской литературы.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Clock" size={24} className="text-primary" />
                Жизненный путь
              </h2>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                      <p className="text-foreground/80">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="works" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {poems.map((poem, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{poem.title}</h3>
                      <div className="flex gap-2">
                        <Badge variant="outline">{poem.year}</Badge>
                        <Badge>{poem.category}</Badge>
                      </div>
                    </div>
                    <Icon name="Feather" size={24} className="text-primary/40" />
                  </div>
                  <div className="text-foreground/80 leading-relaxed whitespace-pre-line font-serif text-sm">
                    {poem.text}
                  </div>
                  <Button variant="ghost" className="mt-4 w-full" size="sm">
                    Читать полностью
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name="Image" size={48} className="text-primary/40" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {quotes.map((quote, index) => (
                <Card key={index} className="p-8 relative overflow-hidden">
                  <Icon name="Quote" size={64} className="absolute top-4 right-4 text-primary/10" />
                  <p className="text-lg leading-relaxed text-foreground/90 relative z-10 italic">
                    {quote}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm font-semibold">Сергей Есенин</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
