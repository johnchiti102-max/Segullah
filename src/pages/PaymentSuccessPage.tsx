import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const PaymentSuccessPage = () => {
  return (
    <>
      <div className="pt-32 pb-24 bg-gray-900 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="bg-black rounded-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payment Successful!
            </h1>

            <p className="text-gray-300 text-lg mb-6">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>

            <p className="text-gray-400 mb-8">
              You will receive an order confirmation email shortly with your order details and tracking information.
            </p>

            <div className="space-y-3">
              <Link
                to="/"
                className="inline-block w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Return to Home
              </Link>
              <Link
                to="/store"
                className="inline-block w-full md:w-auto px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-colors duration-300 md:ml-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentSuccessPage;
