import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Store, 
  Settings,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

const SuperAdmin = () => {
  // Mock data - será substituído por dados reais do Supabase
  const stats = {
    revendedores: 45,
    barbearias: 312,
    receitaMensal: 89750,
    crescimento: 23.5
  };

  const revendedores = [
    {
      id: 1,
      nome: "João Silva",
      empresa: "Barber Pro Network",
      barbearias: 15,
      receita: 8500,
      plano: "Professional",
      status: "Ativo",
      crescimento: 12.3
    },
    {
      id: 2,
      nome: "Maria Santos",
      empresa: "Elite Barber Solutions",
      barbearias: 23,
      receita: 12300,
      plano: "Enterprise",
      status: "Ativo",
      crescimento: 28.7
    },
    {
      id: 3,
      nome: "Carlos Oliveira",
      empresa: "Premium Cut SaaS",
      barbearias: 8,
      receita: 4200,
      plano: "Starter",
      status: "Ativo",
      crescimento: 5.2
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Super Admin</h1>
                <p className="text-sm text-muted-foreground">Controle total da plataforma</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-secondary to-primary-glow text-primary">
                <Plus className="w-4 h-4 mr-2" />
                Novo Revendedor
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
              <CardTitle className="text-sm font-medium">Total Revendedores</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.revendedores}</div>
              <p className="text-xs text-muted-foreground">
                +3 novos este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Barbearias</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.barbearias}</div>
              <p className="text-xs text-muted-foreground">
                +18 novas este mês
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

        {/* Revendedores Table */}
        <Card>
          <CardHeader>
            <CardTitle>Revendedores Ativos</CardTitle>
            <CardDescription>
              Gerencie todos os revendedores da plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Revendedor</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Barbearias</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Receita</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Plano</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Crescimento</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {revendedores.map((revendedor) => (
                    <tr key={revendedor.id} className="border-b border-border/50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-foreground">{revendedor.nome}</div>
                          <div className="text-sm text-muted-foreground">{revendedor.empresa}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Store className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{revendedor.barbearias}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-success">
                          {formatCurrency(revendedor.receita)}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={revendedor.plano === 'Enterprise' ? 'default' : 'secondary'}
                          className={revendedor.plano === 'Enterprise' ? 'bg-secondary text-primary' : ''}
                        >
                          {revendedor.plano}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={revendedor.status === 'Ativo' ? 'default' : 'destructive'}>
                          {revendedor.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-success" />
                          <span className="text-success font-medium">+{revendedor.crescimento}%</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5 text-secondary" />
                <span>Adicionar Revendedor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Cadastrar novo revendedor na plataforma</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-secondary" />
                <span>Configurações Globais</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Gerenciar configurações da plataforma</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span>Relatórios Avançados</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Análises detalhadas de performance</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SuperAdmin;