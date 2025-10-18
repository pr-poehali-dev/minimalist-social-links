import { useState } from 'react';
import Icon from '@/components/ui/icon';

const socialLinks = [
  { 
    name: 'TikTok', 
    icon: 'Music', 
    url: 'https://www.tiktok.com/@dikixx__?_t=ZS-90eK966gSCf&_r=1', 
    color: 'from-cyan-400 to-pink-500' 
  },
  { 
    name: 'Instagram', 
    icon: 'Instagram', 
    url: 'https://www.instagram.com/dikixx__?igsh=MTg3bHBpMm12dGxqeg%3D%3D&utm_source=qr', 
    color: 'from-purple-600 to-pink-600' 
  },
  { 
    name: 'Telegram', 
    icon: 'Send', 
    url: 'https://t.me/DIKIXX_dm', 
    color: 'from-blue-500 to-cyan-500' 
  },
];

export default function Index() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-12 space-y-4">
          <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full shadow-2xl shadow-purple-500/30 border-2 border-purple-500/30">
            <img 
              src="https://cdn.poehali.dev/files/d5fab0fc-defd-4601-8024-3508c15c46f9.jpeg" 
              alt="DIKIXX" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            DIKIXX
          </h1>
          <p className="text-gray-400 text-lg">Мы в других социальных сетях</p>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="block group"
            >
              <div className={`
                relative overflow-hidden
                bg-gray-900/50 backdrop-blur-sm
                border border-gray-800
                rounded-2xl p-5
                transition-all duration-300 ease-out
                hover:border-gray-700
                hover:shadow-2xl hover:shadow-purple-500/20
                hover:scale-[1.02]
                hover:-translate-y-1
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300
                `}></div>
                
                <div className="relative flex items-center gap-4">
                  <div className={`
                    p-3 rounded-xl bg-gradient-to-br ${link.color}
                    transition-transform duration-300
                    ${hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100'}
                  `}>
                    <Icon name={link.icon} size={24} className="text-white" />
                  </div>
                  
                  <span className="text-xl font-medium text-gray-200 flex-1">
                    {link.name}
                  </span>
                  
                  <Icon 
                    name="ChevronRight" 
                    size={24} 
                    className={`
                      text-gray-600 transition-all duration-300
                      ${hoveredIndex === index ? 'translate-x-2 text-gray-400' : ''}
                    `}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Все права защищены
          </p>
        </div>
      </div>
    </div>
  );
}
