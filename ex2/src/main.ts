abstract class Veiculo {
  protected modelo: string;
  protected capacidade: number;

  constructor(modelo: string, capacidade: number) {
    this.modelo = modelo;
    this.capacidade = capacidade;
  }

  abstract calcularConsumo(distancia: number, passageiros?: number): number;
}

class Onibus extends Veiculo {
  private consumoPorKm: number;

  constructor(modelo: string, capacidade: number, consumoPorKm: number) {
    super(modelo, capacidade);
    this.consumoPorKm = consumoPorKm;
  }

  calcularConsumo(distancia: number): number {
    return distancia * this.consumoPorKm;
  }
}

class Taxi extends Veiculo {
  private taxaPorPassageiro: number;

  constructor(modelo: string, capacidade: number, taxaPorPassageiro: number) {
    super(modelo, capacidade);
    this.taxaPorPassageiro = taxaPorPassageiro;
  }

  calcularConsumo(distancia: number, passageiros: number = 1): number {
    return distancia * passageiros * this.taxaPorPassageiro;
  }
}

const onibus = new Onibus("Ônibus Modelo X", 50, 0.5);
console.log(
  `Consumo do ônibus para 100 km: ${onibus.calcularConsumo(100)} litros`
);

const taxi = new Taxi("Táxi Modelo Y", 4, 2);
console.log(
  `Consumo do táxi para 100 km com 3 passageiros: ${taxi.calcularConsumo(
    100,
    3
  )} unidades`
);
