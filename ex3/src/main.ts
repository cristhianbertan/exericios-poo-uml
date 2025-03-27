class ContaBancaria {
  protected numero: string;
  protected saldo: number;

  constructor(numero: string, saldoInicial: number = 0) {
    this.numero = numero;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
      return true;
    } else {
      console.log("Saldo insuficiente ou valor de saque inválido.");
      return false;
    }
  }

  getSaldo(): number {
    return this.saldo;
  }

  getNumero(): string {
    return this.numero;
  }
}

class ContaCorrente extends ContaBancaria {
  private limiteChequeEspecial: number;

  constructor(numero: string, limiteChequeEspecial: number = 0) {
    super(numero);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor: number): boolean {
    const saldoDisponivel = this.saldo + this.limiteChequeEspecial;
    if (valor > 0 && valor <= saldoDisponivel) {
      this.saldo -= valor;
      console.log(
        `Saque de ${valor} realizado (incluindo cheque especial). Novo saldo: ${this.saldo}`
      );
      return true;
    } else {
      console.log("Saldo insuficiente ou limite do cheque especial excedido.");
      return false;
    }
  }
}

class ContaPoupanca extends ContaBancaria {
  private taxaJuros: number;

  constructor(numero: string, taxaJuros: number) {
    super(numero);
    this.taxaJuros = taxaJuros;
  }

  aplicarJuros(): void {
    const juros = this.saldo * this.taxaJuros;
    this.depositar(juros);
    console.log(`Juros de ${juros} aplicados. Novo saldo: ${this.saldo}`);
  }
}

const contaCorrente = new ContaCorrente("CC123", 100);
contaCorrente.depositar(500);
contaCorrente.sacar(650);
console.log(`Saldo da conta corrente: ${contaCorrente.getSaldo()}`);

const contaPoupanca = new ContaPoupanca("CP456", 0.01);
contaPoupanca.depositar(1000);
contaPoupanca.aplicarJuros();
console.log(`Saldo da conta poupança: ${contaPoupanca.getSaldo()}`);
