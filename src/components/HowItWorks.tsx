import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Settings, 
  Store, 
  Calendar,
  ArrowRight,
  Crown,
  Users,
  Smartphone
} from "lucide-react";

const steps = [
  {
    icon: Crown,
    title: "Super Admin",
    description: "Controla toda a plataforma",
    details: [
      "Gerencia todos os revendedores",
      "Define planos e preços",
      "Relatórios globais",
      "Configurações da plataforma"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Revendedor",
    description: "Seu próprio negócio SaaS",
    details: [
      "White label completo",
      "Gerencia suas barbearias",
      "Define preços e planos",
      "Relatórios de vendas"
    ],
    color: "from-secondary to-primary-glow"
  },
  {
    icon: Store,
    title: "Barbearia",
    description: "Gestão completa do negócio",
    details: [
      "Cadastra profissionais",
      "Define serviços e preços",
      "Controla agenda",
      "Atende clientes"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Cliente Final",
    description: "Experiência simplificada",
    details: [
      "Escolhe serviços",
      "Seleciona profissional",
      "Agenda horário",
      "Recebe notificações"
    ],
    color: "from-green-500 to-green-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como
            <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent"> Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema hierárquico de 4 níveis que permite escalar seu negócio de forma organizada e lucrativa
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {step.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-secondary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Revenue Flow */}
        <div className="bg-gradient-to-r from-accent to-muted rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Fluxo de Receita Inteligente
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada nível gera receita do nível abaixo, criando um modelo sustentável e lucrativo para todos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 mb-4">
                <Crown className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Super Admin</div>
                <div className="text-sm opacity-90">Recebe de revendedores</div>
              </div>
              <div className="text-secondary font-semibold">R$ 50-200/mês por revendedor</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary text-primary rounded-2xl p-6 mb-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Revendedor</div>
                <div className="text-sm opacity-90">Recebe de barbearias</div>
              </div>
              <div className="text-secondary font-semibold">R$ 30-150/mês por barbearia</div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 mb-4">
                <Store className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Barbearia</div>
                <div className="text-sm opacity-90">Atende clientes finais</div>
              </div>
              <div className="text-secondary font-semibold">Sem limite de faturamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;