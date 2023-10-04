import React from 'react';

export interface PricingCardProps {
  title: string;
  originalPrice: number;
  discountedPrice?: number;
  subtitle: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  discountedPrice,
  subtitle,
  features,
}) => {
  return (
    <div className="p-4 rounded-lg  min-w-[250px]">
      <div className="relative flex flex-col items-center p-8 border-2 rounded-md border-slate-700">
        {discountedPrice !== undefined && ( 
        <span className="absolute px-6 pt-1 pb-2 font-medium text-white bg-blue-400 rounded-full -top-4">
          Save {discountedPrice} %
        </span>
         )}
        <div className="flex items-center justify-center space-x-2 font-bold">
            <span className="pb-2 text-2xl">{title}</span>
        </div>
        <span className="mt-2 mb-2 text-sm font-bold">{subtitle}</span>
        <ul className="flex-1 space-y-2">
          {features.map((feature, index) => (
            <li className="flex items-center space-x-2" key={index}>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
