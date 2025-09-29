import manpowerLogo from "@/assets/manpower-logo.jpg";
import nightCityBg from "@/assets/night-city-bg.jpg";

// Declare global function
declare global {
  interface Window {
    sendLeadAndRedirect?: () => void;
  }
}

const Index = () => {
  const handleContactClick = () => {
    if (typeof window !== "undefined" && window.sendLeadAndRedirect) {
      window.sendLeadAndRedirect();
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${nightCityBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          {/* Glassmorphism container */}
          <div className="glass-container rounded-3xl p-8 text-center space-y-6">
            {/* Logo with glow effect */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-white/30 p-2 logo-glow animate-float">
                  <img 
                    src={manpowerLogo} 
                    alt="ManPower Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white text-glow mb-6 font-heading">
              РОБОТА В НІМЕЧЧИНІ
            </h1>

            {/* Description with emojis */}
            <div className="space-y-4 text-white/90 text-left">
              <p className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0 mt-0.5">🌍</span>
                <span>Manpower — допомагає знайти легальну роботу за кордоном та забезпечує повну підтримку у працевлаштуванні.</span>
              </p>
              
              <p className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0 mt-0.5">🟢</span>
                <span>Відповідь від оператора в Telegram всього за 2 хвилини</span>
              </p>
              
              <p className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-xl flex-shrink-0 mt-0.5">💬</span>
                <span>Натисніть кнопку та залиште заявку прямо зараз</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={handleContactClick}
                className="btn-primary w-full text-white font-semibold py-4 px-8 rounded-2xl text-lg border-0 cursor-pointer"
              >
                Написати менеджеру
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;