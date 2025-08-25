import { Button } from "@/components/ui/button";
import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary-glow rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Barber Network</h1>
              <p className="text-xs text-muted-foreground">Sistema SaaS Multi-Nível</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#recursos" className="text-foreground hover:text-secondary transition-colors">
              Recursos
            </a>
            <a href="#planos" className="text-foreground hover:text-secondary transition-colors">
              Planos
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-secondary transition-colors">
              Como Funciona
            </a>
            <a href="#contato" className="text-foreground hover:text-secondary transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="/agendamento">Demo Cliente</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/barbearia">Barbearia</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/revendedor">Revendedor</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/super-admin">Super Admin</a>
            </Button>
            <Button className="bg-gradient-to-r from-secondary to-primary-glow text-primary font-semibold hover:shadow-lg transition-all duration-300">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#recursos" className="text-foreground hover:text-secondary transition-colors">
                Recursos
              </a>
              <a href="#planos" className="text-foreground hover:text-secondary transition-colors">
                Planos
              </a>
              <a href="#como-funciona" className="text-foreground hover:text-secondary transition-colors">
                Como Funciona
              </a>
              <a href="#contato" className="text-foreground hover:text-secondary transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Entrar
                </Button>
                <Button 
                  className="bg-gradient-to-r from-secondary to-primary-glow text-primary font-semibold"
                  size="sm"
                >
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;