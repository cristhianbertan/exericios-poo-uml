import Item from "./Item";

class Pedido {
  protected numero: number;
  protected itens: Item[];

  constructor(numero: number) {
    this.numero = numero;
    this.itens = [];
  }

  public adicionarItem(item: Item): void {
    this.itens.push(item);
  }

  public calcularTotal(): number {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }

  public getNumero(): number {
    return this.numero;
  }

  public getItens(): Item[] {
    return this.itens;
  }
}

export default Pedido;
