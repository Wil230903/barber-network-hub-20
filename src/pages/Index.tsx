import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  Quote
} from "lucide-react";

const Index = () => {
  const plans = [
    {
      name: "Starter",
      price: "97",
      description: "Perfeito para revendedores iniciantes",
      features: [
        "Até 5 barbearias",
        "White label básico",
        "Suporte por email",
        "Relatórios básicos",
        "App mobile",
        "Integrações essenciais"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "197",
      description: "Para revendedores em crescimento",
      features: [
        "Até 25 barbearias",
        "White label completo",
        "Suporte prioritário",
        "Relatórios avançados",
        "App mobile customizado",
        "Todas as integrações",
        "Domínio personalizado",
        "API completa"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "397",
      description: "Para grandes operações",
      features: [
        "Barbearias ilimitadas",
        "White label premium",
        "Suporte 24/7",
        "Analytics avançado",
        "Apps personalizados",
        "Integrações customizadas",
        "Multi-domínios",
        "Desenvolvimento customizado",
        "Gerente de conta dedicado"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Revendedor - 15 barbearias",
      content: "Consegui escalar meu negócio de forma incrível. Hoje tenho 15 barbearias usando a plataforma e faturamento mensal de R$ 50k+",
      rating: 5
    },
    {
      name: "Marcos Santos",
      role: "Dono da Barbearia Premium",
      content: "O sistema mudou completamente nossa operação. Reduzimos 80% dos no-shows e aumentamos nossa receita em 150%",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Revendedora - 8 barbearias",
      content: "A plataforma white label é perfeita. Meus clientes nem sabem que uso uma solução terceirizada. Tudo com minha marca!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      
      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Planos que
              <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent"> Escalam</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o plano ideal para começar sua jornada como revendedor de soluções para barbearias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'border-secondary border-2 scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-secondary to-primary-glow text-primary font-semibold px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-secondary to-primary-glow text-primary hover:shadow-xl hover:scale-105' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    Começar Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O que nossos
              <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent"> Clientes</span> dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-secondary">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pronto para Revolucionar seu Negócio?
          </h2>
          <p className="text-xl text-primary/80 mb-12 max-w-3xl mx-auto">
            Junte-se a centenas de revendedores que já estão faturando com nossa plataforma. 
            Comece hoje mesmo, sem risco!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all duration-300"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entre em
              <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent"> Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar você a começar sua jornada no mercado SaaS de barbearias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Resposta em até 2 horas</p>
                <a href="mailto:contato@barbernetwork.com" className="text-secondary hover:underline font-medium">
                  contato@barbernetwork.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Telefone</h3>
                <p className="text-muted-foreground mb-4">Atendimento comercial</p>
                <a href="tel:+5511999999999" className="text-secondary hover:underline font-medium">
                  (11) 99999-9999
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Escritório</h3>
                <p className="text-muted-foreground mb-4">São Paulo - SP</p>
                <p className="text-secondary font-medium">
                  Av. Paulista, 1000<br />
                  São Paulo - SP
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Barber Network Hub</h3>
              <p className="text-primary-foreground/70 mb-4">
                Plataforma SaaS multi-nível para revolucionar o mercado de barbearias.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#recursos" className="hover:text-secondary transition-colors">Recursos</a></li>
                <li><a href="#planos" className="hover:text-secondary transition-colors">Planos</a></li>
                <li><a href="#como-funciona" className="hover:text-secondary transition-colors">Como Funciona</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-secondary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-secondary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2024 Barber Network Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;