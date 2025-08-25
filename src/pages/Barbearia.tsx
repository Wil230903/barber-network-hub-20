import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Users, 
  Scissors, 
  Calendar, 
  DollarSign, 
  Clock,
  Plus,
  Settings,
  Eye,
  Edit,
  MoreVertical,
  Phone,
  Mail
} from "lucide-react";

const Barbearia = () => {
  // Mock data - será substituído por dados reais do Supabase
  const barbeariaInfo = {
    nome: "Barbearia Elite",
    endereco: "Rua das Flores, 123 - São Paulo",
    telefone: "(11) 99999-9999",
    email: "contato@barbeariaelite.com"
  };

  const stats = {
    profissionais: 4,
    servicos: 12,
    agendamentosHoje: 18,
    receitaMensal: 8500
  };

  const profissionais = [
    {
      id: 1,
      nome: "Carlos Silva",
      especialidade: "Cortes Clássicos",
      experiencia: "5 anos",
      agendamentosHoje: 6,
      status: "Disponível",
      proximoHorario: "14:30"
    },
    {
      id: 2,
      nome: "Ricardo Santos",
      especialidade: "Barba e Bigode",
      experiencia: "8 anos", 
      agendamentosHoje: 4,
      status: "Ocupado",
      proximoHorario: "16:00"
    },
    {
      id: 3,
      nome: "João Oliveira",
      especialidade: "Cortes Modernos",
      experiencia: "3 anos",
      agendamentosHoje: 5,
      status: "Disponível",
      proximoHorario: "15:15"
    }
  ];

  const servicos = [
    {
      id: 1,
      nome: "Corte Masculino",
      preco: 35,
      duracao: 30,
      categoria: "Cortes"
    },
    {
      id: 2,
      nome: "Barba Completa",
      preco: 25,
      duracao: 20,
      categoria: "Barba"
    },
    {
      id: 3,
      nome: "Corte + Barba",
      preco: 55,
      duracao: 45,
      categoria: "Combo"
    },
    {
      id: 4,
      nome: "Corte Infantil",
      preco: 25,
      duracao: 25,
      categoria: "Cortes"
    }
  ];

  const agendamentosHoje = [
    {
      id: 1,
      cliente: "João Silva",
      servico: "Corte + Barba",
      profissional: "Carlos Silva",
      horario: "14:00",
      status: "Confirmado",
      valor: 55
    },
    {
      id: 2,
      cliente: "Pedro Santos",
      servico: "Corte Masculino",
      profissional: "Ricardo Santos",
      horario: "14:30",
      status: "Em Andamento",
      valor: 35
    },
    {
      id: 3,
      cliente: "Lucas Costa",
      servico: "Barba Completa",
      profissional: "João Oliveira",
      horario: "15:00",
      status: "Aguardando",
      valor: 25
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{barbeariaInfo.nome}</h1>
                <p className="text-sm text-muted-foreground">{barbeariaInfo.endereco}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-secondary to-primary-glow text-primary">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profissionais</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.profissionais}</div>
              <p className="text-xs text-muted-foreground">
                3 disponíveis agora
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Serviços</CardTitle>
              <Scissors className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.servicos}</div>
              <p className="text-xs text-muted-foreground">
                4 categorias
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Agendamentos Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.agendamentosHoje}</div>
              <p className="text-xs text-muted-foreground">
                3 em andamento
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(stats.receitaMensal)}</div>
              <p className="text-xs text-success">
                +15% vs mês anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Profissionais */}
          <Card>
            <CardHeader>
              <CardTitle>Profissionais</CardTitle>
              <CardDescription>
                Gerencie sua equipe de barbeiros
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profissionais.map((profissional) => (
                  <div key={profissional.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{profissional.nome}</div>
                        <div className="text-sm text-muted-foreground">{profissional.especialidade}</div>
                        <div className="text-xs text-muted-foreground">{profissional.experiencia} de experiência</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={profissional.status === 'Disponível' ? 'default' : 'secondary'}>
                        {profissional.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        Próximo: {profissional.proximoHorario}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {profissional.agendamentosHoje} agendamentos hoje
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Profissional
              </Button>
            </CardContent>
          </Card>

          {/* Serviços */}
          <Card>
            <CardHeader>
              <CardTitle>Serviços</CardTitle>
              <CardDescription>
                Gerencie serviços e preços
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {servicos.map((servico) => (
                  <div key={servico.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Scissors className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{servico.nome}</div>
                        <div className="text-sm text-muted-foreground">{servico.categoria}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-success">{formatCurrency(servico.preco)}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {servico.duracao}min
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Serviço
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Agendamentos de Hoje */}
        <Card>
          <CardHeader>
            <CardTitle>Agendamentos de Hoje</CardTitle>
            <CardDescription>
              Gerencie os agendamentos do dia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Horário</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Cliente</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Serviço</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Profissional</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Valor</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {agendamentosHoje.map((agendamento) => (
                    <tr key={agendamento.id} className="border-b border-border/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{agendamento.horario}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-foreground">{agendamento.cliente}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-muted-foreground">{agendamento.servico}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-muted-foreground">{agendamento.profissional}</span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={
                            agendamento.status === 'Confirmado' ? 'default' :
                            agendamento.status === 'Em Andamento' ? 'secondary' : 'outline'
                          }
                        >
                          {agendamento.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-success">
                          {formatCurrency(agendamento.valor)}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-secondary" />
                <span>Novo Agendamento</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Agendar novo cliente</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>Gerenciar Profissionais</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Adicionar ou editar barbeiros</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scissors className="w-5 h-5 text-secondary" />
                <span>Gerenciar Serviços</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Editar serviços e preços</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-secondary" />
                <span>Relatórios</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Análises financeiras</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Barbearia;