interface PayFastPaymentData {
  name: string;
  email: string;
  phone: string;
  amount: number;
  items: Array<{ name: string; quantity: number; price: number }>;
}

export const buildPayFastPaymentUrl = (paymentData: PayFastPaymentData): string => {
  const merchantId = import.meta.env.VITE_PAYFAST_MERCHANT_ID;
  const merchantKey = import.meta.env.VITE_PAYFAST_MERCHANT_KEY;

  const isProduction = import.meta.env.PROD;
  const baseUrl = isProduction
    ? 'https://www.payfast.co.za/eng/process'
    : 'https://sandbox.payfast.co.za/eng/process';

  const data: Record<string, string | number> = {
    merchant_id: merchantId || '',
    merchant_key: merchantKey || '',
    return_url: `${window.location.origin}/payment-success`,
    cancel_url: `${window.location.origin}/payment-cancelled`,
    notify_url: `${window.location.origin}/api/payfast/notify`,
    name_first: paymentData.name.split(' ')[0] || '',
    name_last: paymentData.name.split(' ').slice(1).join(' ') || '',
    email_address: paymentData.email,
    cell_number: paymentData.phone,
    m_payment_id: `order_${Date.now()}`,
    amount: (paymentData.amount * 100).toFixed(0),
    item_name: paymentData.items.map(item => `${item.name} x${item.quantity}`).join(', '),
    item_description: paymentData.items.map(item => `${item.name} (${item.quantity})`).join(', '),
  };

  const queryString = Object.entries(data)
    .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
    .join('&');

  return `${baseUrl}?${queryString}`;
};

export const storePaymentData = (paymentData: PayFastPaymentData) => {
  sessionStorage.setItem('payfast_payment_data', JSON.stringify(paymentData));
};

export const getPaymentData = (): PayFastPaymentData | null => {
  const data = sessionStorage.getItem('payfast_payment_data');
  return data ? JSON.parse(data) : null;
};

export const clearPaymentData = () => {
  sessionStorage.removeItem('payfast_payment_data');
};
