
import { useState } from 'react';

function Header()
{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>
  {
    setIsOpen(!isOpen);
  };
  return (
    <header className="z-30 flex items-center justify-between h-20 px-6 md:h-24 md:px-12 lg:px-28">
      <img className="w-auto h-6" src="https://tailwindpractice-easybank.netlify.app/images/logo.svg" alt="" />
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-8 text-gray-500">
          <li> <a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </nav>
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden`}
        onClick={toggleMenu}
      >
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute top-20 w-3/4 text-center bg-white z-20 md:hidden text-gray-500 text-xl left-1/2 transform -translate-x-1/2 rounded-lg`}>
        <ul className="flex flex-col gap-8 p-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="burger md:hidden">
        <button onClick={toggleMenu}>
          <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#2D314D" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#2D314D" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#2D314D" stroke-width="2" stroke-linecap="round"></path> </g></svg></button>
      </div>

      <button className='hidden btn-invite lg:block'>Request Invite</button>
    </header>
  );
}

export default Header;