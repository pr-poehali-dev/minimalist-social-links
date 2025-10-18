import Icon from '@/components/ui/icon';

const socialLinks = [
  { 
    name: 'TikTok', 
    icon: 'Music', 
    url: 'https://www.tiktok.com/@dikixx__?_t=ZS-90eK966gSCf&_r=1'
  },
  { 
    name: 'Instagram', 
    icon: 'Instagram', 
    url: 'https://www.instagram.com/dikixx__?igsh=MTg3bHBpMm12dGxqeg%3D%3D&utm_source=qr'
  },
  { 
    name: 'Telegram', 
    icon: 'Send', 
    url: 'https://t.me/DIKIXX_dm'
  },
  { 
    name: 'YouTube', 
    icon: 'Youtube', 
    url: 'https://youtube.com/@dikixx'
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10 space-y-4">
          <div className="mb-6">
            <img 
              src="https://cdn.poehali.dev/files/d5fab0fc-defd-4601-8024-3508c15c46f9.jpeg" 
              alt="DIKIXX" 
              className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-border"
            />
          </div>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            DIKIXX
          </h1>
          <p className="text-muted-foreground text-sm">
            Мы в других социальных сетях
          </p>
        </div>

        <div className="space-y-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-card border border-border rounded-xl p-4 transition-all duration-200 hover:bg-muted/50 hover:border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon name={link.icon} size={20} className="text-foreground" />
                    </div>
                    <span className="text-base font-medium text-foreground">
                      {link.name}
                    </span>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={18} 
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-12 text-center text-muted-foreground text-xs">
          © 2025 DIKIXX
        </footer>
      </div>
    </div>
  );
}
