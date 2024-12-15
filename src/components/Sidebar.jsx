import React from 'react';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpenFlag)

  if(!isMenuOpen)return null;
  const menuItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Explore', icon: '🔍' },
    { name: 'Subscriptions', icon: '📺' },
    { name: 'Library', icon: '📚' },
    { name: 'History', icon: '🕒' },
    { name: 'Your Videos', icon: '🎥' },
    { name: 'Watch Later', icon: '⏰' },
    { name: 'Liked Videos', icon: '👍' },
  ];

  return (
    <div className="bg-gray-100 h-screen w-64 top-0 left-0 shadow-md">
      <div className="flex flex-col">
        <div className="mt-2 ">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer"
            >
              <span className="text-lg mr-4">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
