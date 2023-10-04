import React from 'react';
import styles from './Card.module.css';

const Card: React.FC<{ title: string; description: string; avatarUrl: string; tag: string }> = ({ title, description, avatarUrl, tag }) => {
  
return (
    <div className={styles.card}>
      <div className="flex items-center">
        <div className="w-3/4 pr-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="mt-2">
            <span className="px-2 py-1 text-sm font-semibold text-blue-600 bg-blue-200 rounded-full">{tag}</span>
          </div>
        </div>
        <div className="w-1/4">
          <img src={avatarUrl} alt="Avatar" className="w-12 h-12 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Card;
