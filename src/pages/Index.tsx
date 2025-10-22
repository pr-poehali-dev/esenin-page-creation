import { useState } from 'react';
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
    { name: 'Александр Блок', status: 'онлайн', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
    { name: 'Анна Ахматова', status: 'была 2 часа назад', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
    { name: 'Владимир Маяковский', status: 'онлайн', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
    { name: 'Марина Цветаева', status: 'была вчера', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
    { name: 'Николай Клюев', status: 'был на прошлой неделе', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
    { name: 'Борис Пастернак', status: 'онлайн', img: 'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg' },
  ];

  const posts = [
    {
      date: '28 дек в 1:00',
      text: 'До свиданья, друг мой, до свиданья.\nМилый мой, ты у меня в груди.\nПредназначенное расставанье\nОбещает встречу впереди.\n\nДо свиданья, друг мой, без руки, без слова,\nНе грусти и не печаль бровей, —\nВ этой жизни умирать неново,\nНо и жить, конечно, не новей.',
      likes: 3245,
      comments: 892,
      shares: 456,
    },
    {
      date: '15 окт в 14:23',
      text: 'Отговорила роща золотая\nБерёзовым, весёлым языком,\nИ журавли, печально пролетая,\nУж не жалеют больше ни о ком.',
      likes: 4521,
      comments: 1243,
      shares: 823,
    },
    {
      date: '12 мая в 19:45',
      text: 'Письмо к матери\n\nТы жива ещё, моя старушка?\nЖив и я. Привет тебе, привет!\nПусть струится над твоей избушкой\nТот вечерний несказанный свет.',
      likes: 5234,
      comments: 1567,
      shares: 1023,
    },
  ];

  const photos = [
    'https://cdn.poehali.dev/files/494f5424-9630-4e29-8fd0-87c93af6819c.jpg',
    'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/c322873e-192b-47b3-9477-bf25d43591de.jpg',
    'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/672c0347-1970-42fe-83c1-485a937d1244.jpg',
    'https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/fac07ea9-f108-4fd0-8289-109f03cb7889.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#edeef0] font-sans">
      <div className="bg-[#5181b8] h-[50px] flex items-center px-3 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white max-w-[1590px] mx-auto w-full">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
            <path d="M13.54 18.84c-.3.27-.84.49-1.26.49-.42 0-.96-.22-1.26-.49-.3-.27-.31-.7-.02-.99.3-.29.84-.51 1.28-.51.44 0 .98.22 1.28.51.29.29.28.72-.02.99zm1.98-7.35c-.3-.59-.8-1.14-1.42-1.56-.61-.42-1.32-.73-2.06-.88-.75-.15-1.51-.15-2.26 0-.74.15-1.45.46-2.06.88-.62.42-1.12.97-1.42 1.56-.23.45-.34.96-.34 1.47h1.5c0-.31.07-.61.21-.88.18-.34.47-.64.82-.87.35-.23.76-.4 1.2-.49.44-.09.9-.09 1.34 0 .44.09.85.26 1.2.49.35.23.64.53.82.87.14.27.21.57.21.88h1.5c0-.51-.11-1.02-.34-1.47zm3.48 0c-.52-1.02-1.37-1.96-2.45-2.67-1.08-.71-2.32-1.22-3.62-1.47-1.3-.25-2.63-.25-3.93 0-1.3.25-2.54.76-3.62 1.47-1.08.71-1.93 1.65-2.45 2.67-.39.77-.59 1.63-.59 2.51h1.5c0-.68.16-1.35.47-1.97.41-.81 1.08-1.53 1.91-2.09.83-.56 1.8-.97 2.82-1.16 1.02-.19 2.08-.19 3.1 0 1.02.19 1.99.6 2.82 1.16.83.56 1.5 1.28 1.91 2.09.31.62.47 1.29.47 1.97h1.5c0-.88-.2-1.74-.59-2.51z"/>
          </svg>
          <div className="hidden md:flex flex-1 max-w-[500px]">
            <input 
              type="text" 
              placeholder="Поиск" 
              className="bg-white/20 rounded text-white placeholder:text-white/80 text-[13px] px-3 py-1.5 w-full outline-none"
            />
          </div>
          <div className="ml-auto flex items-center gap-5">
            <Icon name="Bell" size={18} className="text-white cursor-pointer opacity-90 hover:opacity-100" />
            <Icon name="MessageCircle" size={18} className="text-white cursor-pointer opacity-90 hover:opacity-100" />
            <Icon name="User" size={18} className="text-white cursor-pointer opacity-90 hover:opacity-100" />
          </div>
        </div>
      </div>

      <div className="max-w-[1590px] mx-auto pt-3 px-3 grid grid-cols-1 lg:grid-cols-[230px_1fr_300px] gap-0">
        <aside className="hidden lg:block pr-3">
          <div className="bg-white shadow-sm rounded">
            <nav className="text-[12.5px]">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 hover:bg-[#f0f2f5] transition-colors ${
                    activeSection === item.id ? 'bg-[#f0f2f5]' : ''
                  }`}
                >
                  <Icon name={item.icon} size={16} className="text-[#5181b8]" />
                  <span className="flex-1 text-left text-[#2a5885]">{item.label}</span>
                  {item.count && (
                    <span className="text-[11px] text-[#939393]">{item.count}</span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="lg:px-3 space-y-3">
          <div className="bg-white shadow-sm rounded">
            <div className="relative">
              <div 
                className="h-[200px] bg-cover bg-center rounded-t"
                style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/0be336ad-19e5-4ddf-8403-5f7d0f6c3214/files/c322873e-192b-47b3-9477-bf25d43591de.jpg)` }}
              />
              <div className="px-5 pb-4">
                <img 
                  src="https://cdn.poehali.dev/files/04b6bbb7-2dc6-43b1-b9ad-150e951e795a.jpg"
                  className="w-[200px] h-[200px] rounded -mt-[100px] border-[3px] border-white object-cover"
                  alt="Сергей Есенин"
                />
              </div>
            </div>

            <div className="px-5 pb-5 -mt-3">
              <h1 className="text-[22px] font-bold text-[#2a5885] mb-0.5">Сергей Есенин</h1>
              <p className="text-[13px] text-[#939393] mb-4">был(а) в сети 28 декабря 1925 в 01:00</p>

              <div className="flex gap-2 mb-5">
                <button className="flex-1 bg-[#5181b8] hover:bg-[#5b88bd] text-white text-[12.5px] font-medium px-4 py-2 rounded transition-colors">
                  Написать сообщение
                </button>
                <button className="px-4 py-2 text-[12.5px] text-[#5181b8] hover:bg-[#f0f2f5] rounded transition-colors">
                  Ещё
                </button>
              </div>

              <div className="border-t border-[#e7e8ec] pt-4 space-y-2.5 text-[13px]">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={16} className="text-[#939393] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[#939393]">Дата рождения: </span>
                    <span className="text-[#2a5885]">3 октября 1895</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="text-[#939393] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[#939393]">Родной город: </span>
                    <a href="#" className="text-[#2a5885] hover:underline">Константиново</a>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e7e8ec] mt-4 pt-4 grid grid-cols-4 gap-3 text-center">
                <div>
                  <div className="text-[15px] font-semibold text-[#2a5885]">239</div>
                  <div className="text-[11px] text-[#939393]">друзей</div>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#2a5885]">131</div>
                  <div className="text-[11px] text-[#939393]">подписчиков</div>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#2a5885]">824</div>
                  <div className="text-[11px] text-[#939393]">фотографий</div>
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#2a5885]">245</div>
                  <div className="text-[11px] text-[#939393]">стихов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[15px] font-semibold text-[#2a5885]">Фотографии</h3>
              <a href="#" className="text-[13px] text-[#2a5885] hover:underline">Показать все</a>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {photos.map((photo, i) => (
                <div key={i} className="aspect-square bg-[#f0f2f5] rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {posts.map((post, i) => (
              <div key={i} className="bg-white shadow-sm rounded p-4">
                <div className="flex items-start gap-3">
                  <img 
                    src="https://cdn.poehali.dev/files/04b6bbb7-2dc6-43b1-b9ad-150e951e795a.jpg"
                    className="w-[50px] h-[50px] rounded-full object-cover flex-shrink-0"
                    alt="Сергей Есенин"
                  />
                  <div className="flex-1 min-w-0">
                    <a href="#" className="font-semibold text-[13px] text-[#2a5885] hover:underline">Сергей Есенин</a>
                    <div className="text-[12px] text-[#939393]">{post.date}</div>
                    <p className="mt-2.5 whitespace-pre-line leading-relaxed text-[13px] text-[#000]">{post.text}</p>
                    
                    <div className="border-t border-[#e7e8ec] mt-3 pt-2.5 flex items-center gap-5 text-[13px]">
                      <button className="flex items-center gap-1.5 text-[#939393] hover:text-[#5181b8] transition-colors">
                        <Icon name="Heart" size={15} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#939393] hover:text-[#5181b8] transition-colors">
                        <Icon name="MessageCircle" size={15} />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#939393] hover:text-[#5181b8] transition-colors">
                        <Icon name="Share2" size={15} />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="hidden lg:block pl-3 space-y-3">
          <div className="bg-white shadow-sm rounded p-4 sticky top-[60px]">
            <h3 className="text-[15px] font-semibold text-[#2a5885] mb-3">Друзья</h3>
            <div className="space-y-2">
              {friends.map((friend, i) => (
                <a key={i} href="#" className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#f0f2f5] transition-colors">
                  <img 
                    src={friend.img}
                    className="w-[40px] h-[40px] rounded-full object-cover"
                    alt={friend.name}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-[#2a5885] truncate">{friend.name}</div>
                    <div className="text-[11px] text-[#939393] truncate">{friend.status}</div>
                  </div>
                </a>
              ))}
              <a href="#" className="block text-[13px] text-[#2a5885] hover:underline pt-2">Показать всех друзей</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Index;
