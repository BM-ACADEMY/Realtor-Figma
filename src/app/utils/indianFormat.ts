// Utility functions for Indian formatting

export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    // 1 Crore = 10,000,000
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    // 1 Lakh = 100,000
    return `₹${(amount / 100000).toFixed(2)} Lakh`;
  } else {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}

export function formatIndianCurrencyCompact(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `₹${crores % 1 === 0 ? crores.toFixed(0) : crores.toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(2)} Lakh`;
  } else {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}

export function formatIndianPhone(phone: string): string {
  // Ensures phone number is in +91 format
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}
