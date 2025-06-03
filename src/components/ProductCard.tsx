import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  brand: string;
  inStock: boolean;
}

const ProductCard = ({
  name,
  description,
  price,
  brand,
  inStock,
}: ProductCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center mb-3">
          <Icon name="Palette" size={32} className="text-gray-400" />
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900">
          {name}
        </CardTitle>
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 font-medium">{brand}</span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              inStock
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {inStock ? "В наличии" : "Под заказ"}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Icon name="ShoppingCart" size={16} />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
