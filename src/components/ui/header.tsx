import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {  
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <div className="cursor-pointer hover:text-gray-300 hover:text-black">Option 1</div>
      <div className="cursor-pointer hover:text-gray-300 hover:text-black">Option 2</div>
      <div className="cursor-pointer hover:text-gray-300 hover:text-black">Option 3</div>
      <div className="cursor-pointer hover:text-gray-300 hover:text-black">Option 4</div>
      <button onClick={()=> navigate('/login')} 
      className="bg-[#2B9EB3] hover:brightness-110 text-white font-bold py-2 px-4 rounded">
        Log in
      </button>
    </div>
  );
};

export default Header;
