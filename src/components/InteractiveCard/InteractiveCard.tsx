import React, { useState } from 'react';

const InteractiveCard: React.FC = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (value: string) => {
    return value
      .replace(/[^0-9]/g, '')
      .slice(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
    setExpiryDate(value);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCvv(value);
  };

  return (
    <div className="flex flex-col justify-around bg-gray-800 p-4 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs mx-auto">
      <div className="flex flex-row items-center justify-between mb-3">
        <input
          className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3 flex-grow"
          type="text"
          name="cardName"
          id="cardName"
          placeholder="Full Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <div className="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md">
          <svg
            className="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <input
          className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <div className="flex flex-row justify-between space-x-3">
          <input
            className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
            type="text"
            name="expiryDate"
            id="expiryDate"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
          <input
            className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
            type="text"
            name="cvv"
            id="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={handleCVVChange}
            maxLength={3}
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
