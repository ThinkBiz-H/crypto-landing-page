import { TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">CryptoVest</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors text-xl font-medium">
            Why Us
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-xl font-medium">
            How It Works
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors text-xl font-medium">
            Benefits
          </a>
          <a href="#invest" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-xl hover:opacity-90 transition-opacity">
            Start Investing
          </a>
        </nav>
        <a href="#invest" className="md:hidden bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-xl">
          Invest Now
        </a>
      </div>
    </header>
  );
};

export default Header;
