import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  MapPin, 
  Phone, 
  Star,
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Agendamento = () => {
  const [step, setStep] = useState(1); // 1: Serviços, 2: Profissional, 3: Data/Hora, 4: Confirmação
  const [selectedServico, setSelectedServico] = useState<any>(null);
  const [selectedProfissional, setSelectedProfissional] = useState<any>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<any>(null);

  // Mock data - barbearia selecionada
  const barbearia = {
    nome: "Barbearia Elite",
    endereco: "Rua das Flores, 123 - São Paulo, SP",
    telefone: "(11) 99999-9999",
    avaliacao: 4.8,
    totalAvaliacoes: 245
  };

  const servicos = [
    {
      id: 1,
      nome: "Corte Masculino",
      descricao: "Corte tradicional ou moderno",
      preco: 35,
      duracao: 30,
      categoria: "Cortes"
    },
    {
      id: 2,
      nome: "Barba Completa",
      descricao: "Aparar, fazer e finalizar",
      preco: 25,
      duracao: 20,
      categoria: "Barba"
    },
    {
      id: 3,
      nome: "Corte + Barba",
      descricao: "Combo completo",
      preco: 55,
      duracao: 45,
      categoria: "Combo",
      popular: true
    },
    {
      id: 4,
      nome: "Corte Infantil",
      descricao: "Para crianças até 12 anos",
      preco: 25,
      duracao: 25,
      categoria: "Cortes"
    },
    {
      id: 5,
      nome: "Corte + Lavagem",
      descricao: "Corte com lavagem e finalização",
      preco: 45,
      duracao: 40,
      categoria: "Premium"
    },
    {
      id: 6,
      nome: "Tratamento Capilar",
      descricao: "Hidratação e tratamento",
      preco: 60,
      duracao: 50,
      categoria: "Premium"
    }
  ];

  const profissionais = [
    {
      id: 1,
      nome: "Carlos Silva",
      especialidade: "Cortes Clássicos",
      experiencia: "5 anos",
      avaliacao: 4.9,
      avatar: "CS",
      disponivel: true
    },
    {
      id: 2,
      nome: "Ricardo Santos",
      especialidade: "Barba e Bigode",
      experiencia: "8 anos",
      avaliacao: 4.8,
      avatar: "RS",
      disponivel: true
    },
    {
      id: 3,
      nome: "João Oliveira",
      especialidade: "Cortes Modernos",
      experiencia: "3 anos",
      avaliacao: 4.7,
      avatar: "JO",
      disponivel: false
    }
  ];

  const horariosDisponiveis = [
    { hora: "09:00", disponivel: true },
    { hora: "09:30", disponivel: false },
    { hora: "10:00", disponivel: true },
    { hora: "10:30", disponivel: true },
    { hora: "11:00", disponivel: false },
    { hora: "11:30", disponivel: true },
    { hora: "14:00", disponivel: true },
    { hora: "14:30", disponivel: true },
    { hora: "15:00", disponivel: false },
    { hora: "15:30", disponivel: true },
    { hora: "16:00", disponivel: true },
    { hora: "16:30", disponivel: false }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Escolha seu Serviço</h2>
        <p className="text-muted-foreground">Selecione o serviço que deseja agendar</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicos.map((servico) => (
          <Card 
            key={servico.id}
            className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
              selectedServico?.id === servico.id ? 'border-secondary border-2' : ''
            }`}
            onClick={() => setSelectedServico(servico)}
          >
            {servico.popular && (
              <div className="absolute -top-2 left-4">
                <Badge className="bg-secondary text-primary">Mais Popular</Badge>
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{servico.nome}</CardTitle>
                  <CardDescription>{servico.descricao}</CardDescription>
                  <Badge variant="outline" className="mt-2">{servico.categoria}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">{formatCurrency(servico.preco)}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {servico.duracao}min
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={() => setStep(2)}
          disabled={!selectedServico}
          className="bg-gradient-to-r from-secondary to-primary-glow text-primary"
        >
          Continuar
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Escolha o Profissional</h2>
        <p className="text-muted-foreground">Selecione o barbeiro de sua preferência</p>
      </div>

      <div className="space-y-4">
        {profissionais.map((profissional) => (
          <Card 
            key={profissional.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              !profissional.disponivel ? 'opacity-50' : ''
            } ${
              selectedProfissional?.id === profissional.id ? 'border-secondary border-2' : ''
            }`}
            onClick={() => profissional.disponivel && setSelectedProfissional(profissional)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-secondary">{profissional.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{profissional.nome}</h3>
                    <p className="text-muted-foreground">{profissional.especialidade}</p>
                    <p className="text-sm text-muted-foreground">{profissional.experiencia} de experiência</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 text-secondary fill-current" />
                      <span className="text-sm font-medium">{profissional.avaliacao}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={profissional.disponivel ? 'default' : 'secondary'}
                  >
                    {profissional.disponivel ? 'Disponível' : 'Ocupado'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button 
          onClick={() => setStep(3)}
          disabled={!selectedProfissional}
          className="bg-gradient-to-r from-secondary to-primary-glow text-primary"
        >
          Continuar
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Escolha Data e Horário</h2>
        <p className="text-muted-foreground">Selecione o melhor horário para você</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar mockup */}
        <Card>
          <CardHeader>
            <CardTitle>Selecione o Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map((dia) => (
                <div key={dia} className="p-2 text-sm font-medium text-muted-foreground">
                  {dia}
                </div>
              ))}
              
              {/* Mock calendar days */}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 6; // Start from previous month
                const isCurrentMonth = day > 0 && day <= 31;
                const isToday = day === 15;
                const isSelected = day === 16;
                
                return (
                  <button
                    key={i}
                    className={`p-2 text-sm rounded-lg transition-colors ${
                      !isCurrentMonth
                        ? 'text-muted-foreground/30'
                        : isSelected
                        ? 'bg-secondary text-primary font-bold'
                        : isToday
                        ? 'bg-accent font-medium'
                        : 'hover:bg-accent'
                    }`}
                    onClick={() => day === 16 && setSelectedDateTime({ ...selectedDateTime, date: '2024-01-16' })}
                  >
                    {Math.abs(day) || ''}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Time slots */}
        <Card>
          <CardHeader>
            <CardTitle>Horários Disponíveis</CardTitle>
            <CardDescription>Terça-feira, 16 de Janeiro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {horariosDisponiveis.map((horario) => (
                <Button
                  key={horario.hora}
                  variant={selectedDateTime?.time === horario.hora ? "default" : "outline"}
                  disabled={!horario.disponivel}
                  className={`${
                    selectedDateTime?.time === horario.hora
                      ? 'bg-secondary text-primary'
                      : horario.disponivel
                      ? 'hover:bg-secondary/10'
                      : 'opacity-50'
                  }`}
                  onClick={() => 
                    horario.disponivel && 
                    setSelectedDateTime({ date: '2024-01-16', time: horario.hora })
                  }
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {horario.hora}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(2)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button 
          onClick={() => setStep(4)}
          disabled={!selectedDateTime?.date || !selectedDateTime?.time}
          className="bg-gradient-to-r from-secondary to-primary-glow text-primary"
        >
          Continuar
        </Button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Confirmar Agendamento</h2>
        <p className="text-muted-foreground">Revise os detalhes do seu agendamento</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumo do Agendamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Barbearia Info */}
          <div className="flex items-start space-x-4 p-4 bg-accent rounded-lg">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{barbearia.nome}</h3>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span>{barbearia.endereco}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{barbearia.telefone}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-secondary fill-current" />
              <span className="text-sm font-medium">{barbearia.avaliacao} ({barbearia.totalAvaliacoes})</span>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Serviço</label>
                <div className="mt-1">
                  <div className="font-medium text-foreground">{selectedServico?.nome}</div>
                  <div className="text-sm text-muted-foreground">{selectedServico?.descricao}</div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">Profissional</label>
                <div className="mt-1">
                  <div className="font-medium text-foreground">{selectedProfissional?.nome}</div>
                  <div className="text-sm text-muted-foreground">{selectedProfissional?.especialidade}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Data e Horário</label>
                <div className="mt-1">
                  <div className="font-medium text-foreground">Terça-feira, 16 de Janeiro</div>
                  <div className="text-sm text-muted-foreground">{selectedDateTime?.time}</div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">Valor Total</label>
                <div className="mt-1">
                  <div className="text-2xl font-bold text-success">{formatCurrency(selectedServico?.preco || 0)}</div>
                  <div className="text-sm text-muted-foreground">Duração: {selectedServico?.duracao}min</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Info Form */}
          <div className="border-t border-border pt-6">
            <h4 className="font-medium text-foreground mb-4">Seus Dados</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Nome Completo</label>
                <input 
                  type="text" 
                  className="mt-1 w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Telefone</label>
                <input 
                  type="tel" 
                  className="mt-1 w-full p-3 border border-border rounded-lg bg-background"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(3)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button 
          className="bg-gradient-to-r from-secondary to-primary-glow text-primary px-8"
        >
          Confirmar Agendamento
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Agendar Horário</h1>
                <p className="text-sm text-muted-foreground">{barbearia.nome}</p>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      stepNum <= step 
                        ? 'bg-secondary text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div 
                      className={`w-8 h-0.5 ${
                        stepNum < step ? 'bg-secondary' : 'bg-muted'
                      }`} 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </main>
    </div>
  );
};

export default Agendamento;