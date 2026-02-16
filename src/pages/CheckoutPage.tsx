import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { buildPayFastPaymentUrl, storePaymentData } from '../services/paymentService';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  if (items.length === 0) {
    return (
      <>
        <div className="pt-32 pb-24 bg-gray-900 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Checkout</h1>
            <p className="text-gray-400 text-lg mb-8">Your cart is empty</p>
            <button
              onClick={() => navigate('/store')}
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Go to Store
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const paymentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        amount: total,
        items: items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      storePaymentData(paymentData);
      clearCart();

      const paymentUrl = buildPayFastPaymentUrl(paymentData);
      window.location.href = paymentUrl;
    } catch (error) {
      console.error('Payment error:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <div className="pt-24 pb-16 bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-black rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Billing Information
                </h2>

                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
                    {errors.submit}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border-2 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border-2 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg border-2 transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-700 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="+27 123 456 7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
                  >
                    {isLoading ? 'Processing...' : 'Pay Now'}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-black rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto border-b border-gray-700 pb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-gray-300">
                      <span>{item.name} x{item.quantity}</span>
                      <span>R{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-white text-xl font-bold">
                    <span>Total</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
