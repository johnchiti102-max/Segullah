import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import Footer from '../components/Footer';

const PaymentCancelledPage = () => {
  return (
    <>
      <div className="pt-32 pb-24 bg-gray-900 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="bg-black rounded-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <XCircle size={64} className="text-red-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payment Cancelled
            </h1>

            <p className="text-gray-300 text-lg mb-6">
              Your payment has been cancelled. Your cart items are still saved.
            </p>

            <p className="text-gray-400 mb-8">
              You can review your order and try again whenever you're ready.
            </p>

            <div className="space-y-3">
              <Link
                to="/cart"
                className="inline-block w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Return to Cart
              </Link>
              <Link
                to="/"
                className="inline-block w-full md:w-auto px-8 py-3 border border-gray-700 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors duration-300 md:ml-4"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentCancelledPage;
