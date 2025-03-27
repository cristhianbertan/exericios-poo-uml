import Pedido from "./Pedido";
import Item from "./Item";

class PedidoDelivery extends Pedido {
  private taxaEntrega: number;

  constructor(numero: number, taxaEntrega: number) {
    super(numero);
    this.taxaEntrega = taxaEntrega;
  }

  public calcularTotal(): number {
    const totalItems = super.calcularTotal();
    return totalItems + this.taxaEntrega;
  }

  public getTaxaEntrega(): number {
    return this.taxaEntrega;
  }
}

export default PedidoDelivery;
