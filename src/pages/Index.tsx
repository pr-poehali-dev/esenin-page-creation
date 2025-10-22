import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('wall');

  const menuItems = [
    { icon: 'Home', label: 'Моя страница', id: 'wall' },
    { icon: 'Users', label: 'Современники', id: 'friends', count: 239 },
    { icon: 'Image', label: 'Фотографии', id: 'photos', count: 824 },
    { icon: 'Feather', label: 'Стихотворения', id: 'poems', count: 245 },
    { icon: 'BookOpen', label: 'Биография', id: 'bio' },
    { icon: 'Award', label: 'Достижения', id: 'awards' },
  ];

  const friends = [
    { name: 'Александр Блок', status: 'поэт-символист', avatar: 'АБ' },
    { name: 'Анна Ахматова', status: 'поэтесса', avatar: 'АА' },
    { name: 'Владимир Маяковский', status: 'поэт-футурист', avatar: 'ВМ' },
    { name: 'Марина Цветаева', status: 'поэтесса', avatar: 'МЦ' },
    { name: 'Николай Клюев', status: 'поэт', avatar: 'НК' },
    { name: 'Борис Пастернак', status: 'поэт, писатель', avatar: 'БП' },
  ];

  const stories = [
    { name: 'Константиново', img: 'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/672c0347-1970-42fe-83c1-485a937d1244.jpg' },
    { name: 'Москва 1912', img: 'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/fac07ea9-f108-4fd0-8289-109f03cb7889.jpg' },
    { name: 'Петроград', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
  ];

  const posts = [
    {
      date: '28 декабря 1925',
      text: 'До свиданья, друг мой, до свиданья.\nМилый мой, ты у меня в груди.\nПредназначенное расставанье\nОбещает встречу впереди.\n\nДо свиданья, друг мой, без руки, без слова,\nНе грусти и не печаль бровей, —\nВ этой жизни умирать неново,\nНо и жить, конечно, не новей.',
      likes: 3245,
      comments: 892,
      shares: 456,
      type: 'poem'
    },
    {
      date: '15 октября 1925',
      text: 'Отговорила роща золотая\nБерёзовым, весёлым языком,\nИ журавли, печально пролетая,\nУж не жалеют больше ни о ком.\n\nКого жалеть? Ведь каждый в мире странник —\nПройдёт, зайдёт и вновь оставит дом.\nО всех ушедших грезит конопляник\nС широким месяцем над голубым прудом.',
      likes: 4521,
      comments: 1243,
      shares: 823,
      type: 'poem'
    },
    {
      date: '12 мая 1924',
      text: 'Письмо к матери\n\nТы жива ещё, моя старушка?\nЖив и я. Привет тебе, привет!\nПусть струится над твоей избушкой\nТот вечерний несказанный свет.\n\nПишут мне, что ты, тая тревогу,\nЗагрустила шибко обо мне,\nЧто ты часто xодишь на дорогу\nВ старомодном ветxом шушуне.',
      likes: 5234,
      comments: 1567,
      shares: 1023,
      type: 'poem'
    },
    {
      date: '2 марта 1924',
      text: 'Не жалею, не зову, не плачу,\nВсё пройдёт, как с белых яблонь дым.\nУвяданья золотом охваченный,\nЯ не буду больше молодым.\n\nТы теперь не так уж будешь биться,\nСердце, тронутое холодком,\nИ страна берёзового ситца\nНе заманит шляться босиком.',
      likes: 6782,
      comments: 2134,
      shares: 1456,
      type: 'poem'
    }
  ];

  const photos = [
    { img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg', title: 'Портрет поэта' },
    { img: 'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/c322873e-192b-47b3-9477-bf25d43591de.jpg', title: 'Родные края' },
    { img: 'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/672c0347-1970-42fe-83c1-485a937d1244.jpg', title: 'Константиново' },
    { img: 'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/fac07ea9-f108-4fd0-8289-109f03cb7889.jpg', title: 'Из архива' },
    { img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg', title: 'Молодость' },
    { img: 'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/c322873e-192b-47b3-9477-bf25d43591de.jpg', title: 'Пейзаж' },
  ];

  return (
    <div className="min-h-screen bg-[#edeef0]">
      <div className="bg-[#517598] h-12 flex items-center px-4 shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3 text-white max-w-7xl mx-auto w-full">
          <Icon name="Menu" size={20} className="lg:hidden" />
          <div className="font-semibold text-lg">ВКонтакте</div>
          <div className="hidden md:block flex-1 max-w-md">
            <div className="bg-[#456785] rounded-full px-4 py-1.5 flex items-center gap-2">
              <Icon name="Search" size={16} className="text-white/70" />
              <input 
                type="text" 
                placeholder="Поиск" 
                className="bg-transparent border-none outline-none text-white placeholder:text-white/70 text-sm w-full"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Icon name="Bell" size={20} className="text-white cursor-pointer hover:opacity-80" />
            <Icon name="MessageCircle" size={20} className="text-white cursor-pointer hover:opacity-80" />
            <Icon name="User" size={20} className="text-white cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 px-4 grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4">
        <aside className="hidden lg:block">
          <Card className="p-0 overflow-hidden sticky top-16">
            <nav className="text-sm">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted/50 transition-colors ${
                    activeSection === item.id ? 'bg-muted/70' : ''
                  }`}
                >
                  <Icon name={item.icon} size={18} className="text-[#517598]" />
                  <span className="flex-1 text-left text-sm">{item.label}</span>
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
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/c322873e-192b-47b3-9477-bf25d43591de.jpg)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
              </div>
              <div className="px-6 pb-4 -mt-20 relative">
                <Avatar className="h-40 w-40 border-4 border-white shadow-xl">
                  <AvatarImage src="https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg" />
                  <AvatarFallback>СЕ</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="px-6 pb-5 -mt-10">
              <h1 className="text-2xl font-semibold mb-1">Сергей Александрович Есенин</h1>
              <p className="text-sm text-muted-foreground mb-4">был(а) в сети 28 декабря 1925 в 01:00</p>

              <div className="flex gap-2 mb-4">
                <Button className="flex-1 bg-[#517598] hover:bg-[#456785]">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать сообщение
                </Button>
                <Button variant="outline">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Добавить в друзья
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="MoreHorizontal" size={18} />
                </Button>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="font-semibold text-xl text-[#517598]">239</div>
                  <div className="text-xs text-muted-foreground">друзей</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl text-[#517598]">131</div>
                  <div className="text-xs text-muted-foreground">подписчиков</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl text-[#517598]">824</div>
                  <div className="text-xs text-muted-foreground">фотографий</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl text-[#517598]">245</div>
                  <div className="text-xs text-muted-foreground">стихов</div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Дата рождения: </span>
                    <a href="#" className="text-[#517598] hover:underline">3 октября 1895</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Родился в: </span>
                    <a href="#" className="text-[#517598] hover:underline">село Константиново, Рязанская губерния</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Briefcase" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Деятельность: </span>
                    <span>Поэт, представитель новокрестьянской поэзии</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Известные произведения: </span>
                    <span>"Радуница", "Москва кабацкая", "Персидские мотивы"</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Интересы: </span>
                    <span>Русская природа, деревенская жизнь, философская лирика</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Image" size={18} />
              Истории
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {stories.map((story, i) => (
                <div key={i} className="flex-shrink-0 w-24 cursor-pointer group">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden mb-1 ring-2 ring-[#517598]">
                    <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-xs text-center truncate">{story.name}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Icon name="Image" size={18} />
                Фотографии
                <Badge variant="secondary" className="ml-1">824</Badge>
              </h3>
              <a href="#" className="text-sm text-[#517598] hover:underline">
                Показать все
              </a>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img src={photo.img} alt={photo.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-3">
            {posts.map((post, i) => (
              <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src="https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg" />
                    <AvatarFallback>СЕ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <a href="#" className="font-semibold text-sm hover:underline">Сергей Есенин</a>
                      {post.type === 'poem' && (
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="Feather" size={10} className="mr-1" />
                          Стихотворение
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{post.date}</div>
                    <p className="mt-3 whitespace-pre-line leading-relaxed text-[15px]">{post.text}</p>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex items-center gap-6 text-sm">
                      <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors">
                        <Icon name="Heart" size={16} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-muted-foreground hover:text-[#517598] transition-colors">
                        <Icon name="MessageCircle" size={16} />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-muted-foreground hover:text-[#517598] transition-colors">
                        <Icon name="Share2" size={16} />
                        <span>{post.shares}</span>
                      </button>
                      <button className="ml-auto text-muted-foreground hover:text-[#517598] transition-colors">
                        <Icon name="Bookmark" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <aside className="hidden lg:block space-y-4">
          <Card className="p-4 sticky top-16">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Icon name="Users" size={16} />
              Друзья
              <Badge variant="secondary" className="ml-auto">239</Badge>
            </h3>
            <div className="space-y-2">
              {friends.map((friend, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 transition-colors"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-xs bg-[#517598] text-white">
                      {friend.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{friend.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{friend.status}</div>
                  </div>
                </a>
              ))}
              <a href="#" className="block text-sm text-[#517598] hover:underline pt-2">
                Показать всех друзей
              </a>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              Сборники стихов
            </h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-[#517598] hover:underline">📖 Радуница (1916)</a>
              <a href="#" className="block text-[#517598] hover:underline">📖 Москва кабацкая (1924)</a>
              <a href="#" className="block text-[#517598] hover:underline">📖 Персидские мотивы (1925)</a>
              <a href="#" className="block text-[#517598] hover:underline">📖 Стихи (1920)</a>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Icon name="Award" size={16} />
              Награды и признание
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Icon name="Award" size={14} className="mt-0.5 text-[#517598]" />
                <span>Один из самых читаемых русских поэтов XX века</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Star" size={14} className="mt-0.5 text-[#517598]" />
                <span>Музей-заповедник имени Есенина в Константиново</span>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Index;
