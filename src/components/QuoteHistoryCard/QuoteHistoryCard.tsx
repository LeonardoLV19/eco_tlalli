import React from 'react';

interface QuoteHistoryCardProps {
    price: string;
    date: string;
    energyCurrent: number;
    energyWithProduct: number;
    moneyCurrent: number;
    moneyWithProduct: number;
}

const QuoteHistoryCard: React.FC<QuoteHistoryCardProps> = ({
    price,
    date,
    energyCurrent,
    energyWithProduct,
    moneyCurrent,
    moneyWithProduct,
}) => {
    const energySaved = energyWithProduct - energyCurrent;
    const moneySaved = moneyWithProduct - moneyCurrent;

    return (
        <div className='bg-white rounded-2xl shadow-2xl items-center p-6 flex flex-col md:flex-row justify-between gap-8 w-full max-w-8xl mx-auto'>

            <div className='flex flex-col justify-start min-w-[200px]'>
                <p className='text-green-700 font-bold text-xl'>{price}</p>
                <p className='text-black font-semibold mt-2 text-sm'>
                    Cotización del {date}
                </p>
            </div>

            <div className='flex flex-col gap-10 flex-grow'>
                <div>
                    <h4 className='text-lg font-bold text-gray-900 mb-2'>
                        Ahorro energético anual total
                    </h4>
                    <div className='flex items-center gap-4'>
                        <span className='text-xs text-gray-500 w-8'>KWH</span>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='relative bg-gray-200 h-4 rounded-full'>
                                <div
                                    className='absolute bg-gray-800 h-4 rounded-full'
                                    style={{ width: `${(energyCurrent / energyWithProduct) * 100}%` }}
                                />
                            </div>
                            <div className='relative bg-gray-200 h-4 rounded-full'>
                                <div
                                    className='absolute bg-green-500 h-4 rounded-full'
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col text-xs ml-2 text-gray-500'>
                            <span>-{energyCurrent}kWs</span>
                            <span>-{energyWithProduct}kWs</span>
                        </div>
                    </div>
                    <p className='text-green-700 text-sm font-bold mt-2'>
                        Ahorro total = {energySaved} kWs
                    </p>
                </div>

                <div>
                    <h4 className='text-lg font-bold text-gray-900 mb-2'>
                        Ahorro económico anual total
                    </h4>
                    <div className='flex items-center gap-4'>
                        <span className='text-xs text-gray-500 w-8'>MX$</span>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='relative bg-gray-200 h-4 rounded-full'>
                                <div
                                    className='absolute bg-gray-800 h-4 rounded-full'
                                    style={{ width: `${(moneyCurrent / moneyWithProduct) * 100}%` }}
                                />
                            </div>
                            <div className='relative bg-gray-200 h-4 rounded-full'>
                                <div
                                    className='absolute bg-green-500 h-4 rounded-full'
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col text-xs ml-2 text-gray-500'>
                            <span>-{moneyCurrent.toLocaleString()}mx$</span>
                            <span>-{moneyWithProduct.toLocaleString()}mx$</span>
                        </div>
                    </div>
                    <p className='text-green-700 text-sm font-bold mt-2'>
                        Ahorro total = ${moneySaved.toLocaleString()} MXN
                    </p>
                </div>

                <div className='flex gap-6 text-xs mt-2 text-gray-500 items-center'>
                    <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 bg-gray-800 rounded-full'></span> Tu consumo actual
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-3 h-3 bg-green-500 rounded-full'></span> Consumo con nuestros productos
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteHistoryCard;
