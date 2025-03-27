abstract class Funcionario {
  protected nome: string;
  protected salario: number;
  protected cargo: string;

  constructor(nome: string, salario: number, cargo: string) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  abstract calcularVencimentos(): number;

  public getNome(): string {
    return this.nome;
  }
}

class FuncionarioEfetivo extends Funcionario {
  private bonusAnual: number;

  constructor(
    nome: string,
    salario: number,
    cargo: string,
    bonusAnual: number
  ) {
    super(nome, salario, cargo);
    this.bonusAnual = bonusAnual;
  }

  calcularVencimentos(): number {
    return this.salario + this.bonusAnual;
  }
}

class FuncionarioTerceirizado extends Funcionario {
  private custoPorProjeto: number;

  constructor(
    nome: string,
    salario: number,
    cargo: string,
    custoPorProjeto: number
  ) {
    super(nome, salario, cargo);
    this.custoPorProjeto = custoPorProjeto;
  }

  calcularVencimentos(): number {
    return this.salario + this.custoPorProjeto;
  }
}

const efetivo = new FuncionarioEfetivo("João Silva", 5000, "Analista", 2000);
console.log(
  `Vencimentos de ${efetivo.getNome()}: R$${efetivo.calcularVencimentos()}`
);

const terceirizado = new FuncionarioTerceirizado(
  "Maria Santos",
  3000,
  "Desenvolvedora",
  1500
);
console.log(
  `Vencimentos de ${terceirizado.getNome()}: R$${terceirizado.calcularVencimentos()}`
);
