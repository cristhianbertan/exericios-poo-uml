import Item from "./Item";
import Pedido from "./Pedido";
import PedidoDelivery from "./PedidoDelivery";

const item1 = new Item("Hamburguer", 10);
const item2 = new Item("Batata Frita", 5);

const pedido = new Pedido(1);
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);

console.log(
  `Total do pedido ${pedido.getNumero()}: R$${pedido.calcularTotal()}`
);

const pedidoDelivery = new PedidoDelivery(2, 3);
pedidoDelivery.adicionarItem(item1);
pedidoDelivery.adicionarItem(item2);

console.log(
  `Total do pedido ${pedidoDelivery.getNumero()} (delivery): R$${pedidoDelivery.calcularTotal()}`
);
