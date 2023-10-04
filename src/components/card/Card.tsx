import React from 'react';
import styles from './Card.module.css';
import { clsxm } from '../../utils';

const Card: React.FC<{ title: string; description: string; avatarUrl: string; tag: string }> = ({ title, description, avatarUrl, tag }) => {
  
return (
    <div className={styles.card}>
      <div className="flex items-center">
        <div className="w-3/4 pr-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="mt-2">
            <span className="bg-blue-200 text-blue-600 text-sm font-semibold rounded-full px-2 py-1">{tag}</span>
          </div>
        </div>
        <div className="w-1/4">
          <img src={avatarUrl} alt="Avatar" className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Card;
