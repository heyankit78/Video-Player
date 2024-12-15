import { useState } from 'react';
import Button from './Button';

const Buttonlist = () => {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  return (
    <div className="flex">
      {['All', 'Songs', 'Comedy', 'Action','Podcasts','Skills','Stages','Information','Watched','Thrillers','Mixes','Live'].map((name) => (
        <Button
          key={name}
          name={name}
          active={activeButton === name}
          onClick={() => handleButtonClick(name)}
        />
      ))}
    </div>
  );
};

export default Buttonlist;
