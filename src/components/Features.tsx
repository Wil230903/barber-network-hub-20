import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Crown, 
  Users, 
  Calendar, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Shield, 
  Zap,
  Settings,
  Globe,
  DollarSign,
  Bell
} from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Sistema Multi-Nível",
    description: "4 níveis hierárquicos: Super Admin, Revendedor, Barbearia e Cliente Final. Controle total com segurança de dados.",
    category: "Arquitetura"
  },
  {
    icon: Palette,
    title: "White Label Completo",
    description: "Logotipo, cores e domínio personalizado para cada revendedor. Sua marca, sua identidade.",
    category: "Personalização"
  },
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Sistema completo de agendamento com controle de disponibilidade, conflitos e notificações automáticas.",
    category: "Agendamento"
  },
  {
    icon: Users,
    title: "Gestão de Profissionais",
    description: "Controle completo de barbeiros, especialidades, horários e comissões. Escale sua equipe.",
    category: "Gestão"
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description: "Dashboard com métricas em tempo real, relatórios financeiros e análise de performance.",
    category: "Analytics"
  },
  {
    icon: Smartphone,
    title: "App Mobile Responsivo",
    description: "Interface otimizada para todos os dispositivos. Seus clientes agendam de qualquer lugar.",
    category: "Mobile"
  },
  {
    icon: Shield,
    title: "Multi-Tenant Seguro",
    description: "Isolamento completo de dados entre revendedores. Arquitetura enterprise com máxima segurança.",
    category: "Segurança"
  },
  {
    icon: Bell,
    title: "Notificações Automáticas",
    description: "WhatsApp, e-mail e SMS. Confirmações, lembretes e comunicação automatizada.",
    category: "Comunicação"
  },
  {
    icon: DollarSign,
    title: "Planos de Assinatura",
    description: "Sistema completo de cobrança recorrente. Revendedores pagam ao Super Admin, barbearias ao revendedor.",
    category: "Monetização"
  },
  {
    icon: Settings,
    title: "Configurações Flexíveis",
    description: "Personalize horários, serviços, preços e regras de negócio para cada barbearia.",
    category: "Flexibilidade"
  },
  {
    icon: Globe,
    title: "Domínio Personalizado",
    description: "Cada revendedor pode ter seu próprio domínio e subdomínios para suas barbearias.",
    category: "Branding"
  },
  {
    icon: Zap,
    title: "Performance Enterprise",
    description: "Arquitetura escalável que suporta milhares de usuários simultâneos com latência mínima.",
    category: "Performance"
  }
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recursos
            <span className="bg-gradient-to-r from-secondary to-primary-glow bg-clip-text text-transparent"> Poderosos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa com tudo que você precisa para escalar seu negócio de barbearias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary-glow/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {feature.title}
                      </CardTitle>
                      <div className="text-xs text-secondary font-medium uppercase tracking-wide">
                        {feature.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;