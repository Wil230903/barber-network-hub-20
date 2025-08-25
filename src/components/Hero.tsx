import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent to-muted overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Barbearia profissional moderna com equipamentos de ponta"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Sistema SaaS Multi-Nível</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Revolucione sua
            <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent"> Barbearia</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Plataforma completa de agendamento com sistema white label para revendedores. 
            Gerencie múltiplas barbearias, profissionais e clientes em um só lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary to-primary-glow text-primary font-semibold px-8 py-6 text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-6 text-lg transition-all duration-300"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Barbearias Ativas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10k+</div>
              <div className="text-muted-foreground">Agendamentos/Mês</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;