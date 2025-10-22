import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('wall');

  const menuItems = [
    { icon: 'Home', label: 'Моя страница', id: 'wall' },
    { icon: 'Users', label: 'Современники', id: 'friends' },
    { icon: 'Image', label: 'Фотографии', id: 'photos', count: 404 },
    { icon: 'Video', label: 'Видеозаписи', id: 'videos' },
    { icon: 'Music', label: 'Аудиозаписи', id: 'music' },
  ];

  const photos = [
    'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg',
    'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg',
    'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg',
    'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg'
  ];

  const posts = [
    {
      date: '25 декабря 1925',
      text: 'До свиданья, друг мой, до свиданья.\nМилый мой, ты у меня в груди.\nПредназначенное расставанье\nОбещает встречу впереди.',
      likes: 1243,
      comments: 89,
      shares: 156
    },
    {
      date: '15 ноября 1925',
      text: 'Не жалею, не зову, не плачу,\nВсё пройдёт, как с белых яблонь дым.\nУвяданья золотом охваченный,\nЯ не буду больше молодым.',
      likes: 2145,
      comments: 134,
      shares: 234
    }
  ];

  return (
    <div className="min-h-screen bg-[#edeef0]">
      <div className="bg-[#517598] h-12 flex items-center px-4 shadow-md">
        <div className="flex items-center gap-2 text-white">
          <Icon name="Menu" size={20} />
          <span className="font-semibold">ВКонтакте</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Icon name="Bell" size={20} className="text-white cursor-pointer" />
          <Icon name="MessageCircle" size={20} className="text-white cursor-pointer" />
          <Icon name="Search" size={20} className="text-white cursor-pointer" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 px-4 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-4">
        <aside className="hidden lg:block">
          <Card className="p-0 overflow-hidden">
            <nav className="text-sm">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors ${
                    activeSection === item.id ? 'bg-muted/70' : ''
                  }`}
                >
                  <Icon name={item.icon} size={18} className="text-[#517598]" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && (
                    <span className="text-xs text-muted-foreground">{item.count}</span>
                  )}
                </button>
              ))}
            </nav>
          </Card>
        </aside>

        <main className="space-y-4">
          <Card className="p-0 overflow-hidden">
            <div className="relative">
              <div className="h-40 bg-gradient-to-br from-[#517598] to-[#7fa3c4]"></div>
              <div className="px-6 pb-6 -mt-16 relative">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarImage src="https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg" />
                  <AvatarFallback>СЕ</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="px-6 pb-6 -mt-6">
              <h1 className="text-2xl font-semibold mb-1">Сергей Есенин</h1>
              <p className="text-sm text-muted-foreground mb-4">был(а) в сети 28 декабря 1925</p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={16} className="text-muted-foreground mt-0.5" />
                  <div>
                    <span className="text-muted-foreground">Дата рождения: </span>
                    <span>3 октября 1895</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="text-muted-foreground mt-0.5" />
                  <div>
                    <span className="text-muted-foreground">Город: </span>
                    <span>Константиново</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Briefcase" size={16} className="text-muted-foreground mt-0.5" />
                  <div>
                    <span className="text-muted-foreground">Деятельность: </span>
                    <span>Поэт, писатель</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-around text-center">
                <div className="cursor-pointer hover:opacity-70">
                  <div className="font-semibold text-lg">239</div>
                  <div className="text-xs text-muted-foreground">друзей</div>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <div className="font-semibold text-lg">131</div>
                  <div className="text-xs text-muted-foreground">подписчиков</div>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <div className="font-semibold text-lg">824</div>
                  <div className="text-xs text-muted-foreground">фотографий</div>
                </div>
                <div className="cursor-pointer hover:opacity-70">
                  <div className="font-semibold text-lg">27</div>
                  <div className="text-xs text-muted-foreground">отметок</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button className="flex-1 bg-[#517598] hover:bg-[#456785]">
                  Написать сообщение
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="MoreHorizontal" size={18} />
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Мои фотографии</h3>
              <a href="#" className="text-sm text-[#517598] hover:underline">
                Показать все
              </a>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4">
            {posts.map((post, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg" />
                    <AvatarFallback>СЕ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Сергей Есенин</div>
                    <div className="text-xs text-muted-foreground">{post.date}</div>
                    <p className="mt-3 whitespace-pre-line leading-relaxed">{post.text}</p>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex items-center gap-6 text-sm">
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-[#517598] transition-colors">
                        <Icon name="Heart" size={16} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-[#517598] transition-colors">
                        <Icon name="MessageCircle" size={16} />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-[#517598] transition-colors">
                        <Icon name="Share2" size={16} />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <aside className="hidden lg:block space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold text-sm mb-3">Что у Вас нового?</h3>
            <textarea
              className="w-full border rounded p-2 text-sm resize-none"
              rows={3}
              placeholder="Что нового?"
            />
            <Button size="sm" className="mt-2 bg-[#517598] hover:bg-[#456785] text-xs">
              Отправить
            </Button>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold text-sm mb-3">Подписки</h3>
            <div className="space-y-3">
              {['Александр Блок', 'Анна Ахматова', 'Владимир Маяковский'].map((name, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs flex-1">{name}</span>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Index;
