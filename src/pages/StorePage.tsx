import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import Footer from '../components/Footer';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 'tshirt-1',
    name: 'Classic T-Shirt',
    price: 250,
    image: '/customised coffee mugs.jpg',
    category: 'T-Shirts',
  },
  {
    id: 'tshirt-2',
    name: 'Premium T-Shirt',
    price: 350,
    image: '/customised water bottles.jpg',
    category: 'T-Shirts',
  },
  {
    id: 'keyholder-1',
    name: 'Leather Keyholder',
    price: 150,
    image: '/customised key holders.jpg',
    category: 'Keyholdiers',
  },
  {
    id: 'keyholder-2',
    name: 'Metal Keyholder',
    price: 200,
    image: '/customised key holders1.jpg',
    category: 'Keyholdiers',
  },
];

const StorePage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <>
      <div className="pt-24 pb-16 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Store
            </h1>
            <p className="text-gray-400 text-lg">
              Browse our collection of custom merchandise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-black rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-orange-500 text-sm font-medium mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {product.name}
                  </h3>

                  <div className="mt-auto">
                    <p className="text-white text-2xl font-bold mb-4">
                      R{product.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                    >
                      <ShoppingCart size={20} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StorePage;
