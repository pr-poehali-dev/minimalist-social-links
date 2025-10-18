import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SocialLink = ({ 
  name, 
  icon, 
  url, 
  gradient 
}: { 
  name: string; 
  icon: string; 
  url: string; 
  gradient: string;
}) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block w-full"
  >
    <Card className={`${gradient} p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-0 cursor-pointer group`}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
          <Icon name={icon} size={28} className="text-white" />
        </div>
        <span className="text-xl font-medium text-white">{name}</span>
      </div>
    </Card>
  </a>
);

const Index = () => {
  const socialLinks = [
    {
      name: "TikTok",
      icon: "Music",
      url: "https://www.tiktok.com/@dikixx__?_t=ZS-90eK966gSCf&_r=1",
      gradient: "bg-gradient-to-r from-[#00f2ea] to-[#ff0050]"
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://www.instagram.com/dikixx__?igsh=MTg3bHBpMm12dGxqeg%3D%3D&utm_source=qr",
      gradient: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
    },
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/DIKIXX_dm",
      gradient: "bg-gradient-to-r from-[#0088cc] to-[#2da5dc]"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block">
            <img 
              src="https://cdn.poehali.dev/files/d5fab0fc-defd-4601-8024-3508c15c46f9.jpeg" 
              alt="DIKIXX Logo" 
              className="w-24 h-24 mx-auto rounded-full object-cover shadow-2xl shadow-primary/30 mb-4"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-black">
            DIKIXX
          </h1>
          <p className="text-muted-foreground text-lg">
            Мы в других социальных сетях
          </p>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;