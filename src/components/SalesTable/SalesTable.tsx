import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const orders = [
  {
    id: "001",
    productName: "Panel Solar Elios G8",
    quantity: 2,
    orderDate: "2025-04-20",
    total: "$104,000 MXN",
  },
  {
    id: "002",
    productName: "Inversor Solar Pro Max",
    quantity: 1,
    orderDate: "2025-04-21",
    total: "$35,000 MXN",
  },
  // Puedes agregar más filas aquí
];

export function SalesTable() {
  return (
    <Card className="w-full max-w-screen-xl p-6 rounded-md shadow-sm mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="border-b">
              {[
                "ID del pedido",
                "Nombre del producto",
                "Cantidad",
                "Fecha de orden",
                "Total",
                "Detalles",
              ].map((header) => (
                <th
                  key={header}
                  className="text-[13px] font-medium text-black font-sans py-3"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-4 text-[14px] font-medium font-sans">{order.id}</td>
                <td className="py-4 text-[14px] font-medium font-sans">{order.productName}</td>
                <td className="py-4 text-[14px] font-medium font-sans">{order.quantity}</td>
                <td className="py-4 text-[14px] font-medium font-sans">{order.orderDate}</td>
                <td className="py-4 text-[14px] font-medium font-sans">{order.total}</td>
                <td className="py-4">
                  <Button
                    className="w-[88px] h-[32px] text-white text-[13px] font-medium font-sans rounded-[20px]"
                    style={{ backgroundColor: "#258429", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                  >
                    Ver más
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default SalesTable;
