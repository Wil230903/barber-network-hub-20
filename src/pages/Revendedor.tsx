import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Store, 
  DollarSign, 
  TrendingUp, 
  Plus,
  Settings,
  Palette,
  Globe,
  Calendar,
  Eye,
  Edit,
  MoreVertical
} from "lucide-react";

const Revendedor = () => {
  // Mock data - será substituído por dados reais do Supabase
  const revendedorInfo = {
    nome: "João Silva",
    empresa: "Barber Pro Network",
    dominio: "barberpro.com",
    plano: "Professional"
  };

  const stats = {
    barbearias: 15,
    clientesAtivos: 1240,
    receitaMensal: 18750,
    crescimento: 12.3
  };

  const barbearias = [
    {
      id: 1,
      nome: "Barbearia Elite",
      endereco: "Rua das Flores, 123 - São Paulo",
      profissionais: 4,
      clientesAtivos: 180,
      receitaMensal: 8500,
      status: "Ativa",
      ultimoAgendamento: "2024-01-15"
    },
    {
      id: 2,
      nome: "Cut & Style",
      endereco: "Av. Paulista, 456 - São Paulo", 
      profissionais: 6,
      clientesAtivos: 245,
      receitaMensal: 12300,
      status: "Ativa",
      ultimoAgendamento: "2024-01-15"
    },
    {
      id: 3,
      nome: "Premium Cuts",
      endereco: "Rua Augusta, 789 - São Paulo",
      profissionais: 3,
      clientesAtivos: 95,
      receitaMensal: 4200,
      status: "Ativa", 
      ultimoAgendamento: "2024-01-14"
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
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary-glow rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Painel Revendedor</h1>
                <p className="text-sm text-muted-foreground">{revendedorInfo.empresa}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Palette className="w-4 h-4 mr-2" />
                White Label
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="w-4 h-4 mr-2" />
                {revendedorInfo.dominio}
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-secondary to-primary-glow text-primary">
                <Plus className="w-4 h-4 mr-2" />
                Nova Barbearia
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
              <CardTitle className="text-sm font-medium">Minhas Barbearias</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.barbearias}</div>
              <p className="text-xs text-muted-foreground">
                +2 novas este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.clientesAtivos.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +127 novos este mês
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
                +{stats.crescimento}% vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Crescimento</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+{stats.crescimento}%</div>
              <p className="text-xs text-muted-foreground">
                Crescimento mensal
              </p>
            </CardContent>
          </Card>
        </div>

        {/* White Label Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Configurações White Label</CardTitle>
              <CardDescription>
                Personalize sua marca e domínio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Logo da Empresa</label>
                  <div className="w-32 h-20 bg-gradient-to-br from-secondary/20 to-primary-glow/20 rounded-lg flex items-center justify-center border-2 border-dashed border-secondary/30">
                    <Palette className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Domínio Personalizado</label>
                    <div className="mt-1 p-3 bg-accent rounded-lg">
                      <span className="text-secondary font-medium">{revendedorInfo.dominio}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Plano Atual</label>
                    <div className="mt-1">
                      <Badge className="bg-secondary text-primary">{revendedorInfo.plano}</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Palette className="w-4 h-4 mr-2" />
                  Personalizar Cores
                </Button>
                <Button variant="outline">
                  <Globe className="w-4 h-4 mr-2" />
                  Configurar Domínio
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo Financeiro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Receita Bruta</span>
                <span className="font-medium">{formatCurrency(25000)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Taxa Plataforma</span>
                <span className="font-medium text-destructive">-{formatCurrency(6250)}</span>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Receita Líquida</span>
                  <span className="font-bold text-success text-lg">{formatCurrency(stats.receitaMensal)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Barbearias Table */}
        <Card>
          <CardHeader>
            <CardTitle>Minhas Barbearias</CardTitle>
            <CardDescription>
              Gerencie todas as barbearias do seu network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Barbearia</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Profissionais</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Clientes</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Receita</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Último Agendamento</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {barbearias.map((barbearia) => (
                    <tr key={barbearia.id} className="border-b border-border/50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-foreground">{barbearia.nome}</div>
                          <div className="text-sm text-muted-foreground">{barbearia.endereco}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{barbearia.profissionais}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-medium">{barbearia.clientesAtivos}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-success">
                          {formatCurrency(barbearia.receitaMensal)}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={barbearia.status === 'Ativa' ? 'default' : 'destructive'}>
                          {barbearia.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{new Date(barbearia.ultimoAgendamento).toLocaleDateString('pt-BR')}</span>
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
                <Plus className="w-5 h-5 text-secondary" />
                <span>Nova Barbearia</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Cadastrar nova barbearia no seu network</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5 text-secondary" />
                <span>Personalizar Marca</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Configurar logo, cores e domínio</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>Relatórios</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Análises de performance e vendas</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-secondary" />
                <span>Configurações</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Gerenciar conta e preferências</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Revendedor;