import { useId, useState } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../../Utils/UserContext';
import Button from '../Button/Index';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleInputChange = (e) => { 
    setSearchValue(e.target.value); 
    onSearch(e.target.value);
  };
  


  return (
    <nav className=' fixed top-0 left-0 z-50 w-full h-16px px-[150px] py-2.5 bg-[#4c37ee] shadow justify-between items-center inline-flex'>
        <ul>
          <li className='flex items-center justify-center'>
            <Link to='/' ><img src="/src/assets/JARA.png" alt="logo navbar" className='h-[44px] h-auto'/></Link>
          </li>
        </ul>
        {/* <ul className='h-[19px] justify-start items-center gap-5 inline-flex'>
          <Link to='/' className='justify-center items-center gap-2.5 flex'>
            <li className='text-[#fffff0] text-base font-semibold font-family-["Plus Jakarta Sans"] leading-[19px] hover:text-[#fb6816] transition border-b-2 border-[#4c37ee] hover:border-[#fb6816] cursor-pointer '>Mentoring</li>
          </Link>
          <Link to='/' className='justify-center items-center gap-2.5 flex'>
            <li className='text-[#fffff0] text-base font-semibold font-family-["Plus Jakarta Sans"] leading-[19px] hover:text-[#fb6816] transition border-b-2 border-[#4c37ee] hover:border-[#fb6816] cursor-pointer '>E-Learning</li>
          </Link>
          <Link to='/' className='justify-center items-center gap-2.5 flex'>
            <li className='text-[#fffff0] text-base font-semibold font-family-["Plus Jakarta Sans"] leading-[19px] hover:text-[#fb6816] transition border-b-2 border-[#4c37ee] hover:border-[#fb6816] cursor-pointer '>Artikel Karir</li>
          </Link>
        </ul> */}
        <ul className='flex justify-center items-center'>
          <li className='w-full'>
            <input type=
              "text" className='text-black active:text-black rounded-md w-[600px] focus:text-black px-4 py-2 w-full' 
              name="search" 
              id={inputId} 
              placeholder='Search product...' 
              value={searchValue} 
              onChange={handleInputChange}  
            />
          </li>
        </ul>
        {!isLoggedIn ? (
            <ul className='flex gap-2 justify-end'>
            <li className='text-[#fffff0]'>
                {/* <Link to="">Sign in</Link> */}
                <Button type="button" classname='bg-[#fb6816] text-[#fffff0] shadow-inner-md transition hover:bg-[#fdab7f] ' onClick={ login}>Masuk</Button>
            </li>
        </ul>
        )
        : (
            <ul className='flex justify-end gap-2'>
            <li >
                <Link to='/orders' className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>My Orders</Link>
            </li>
            <li>
                <button onClick={logout} className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>Sign out</button>
            </li>
            <li >
                <Link to="/editprofile" className='w-[25px] h-[25px]'>
                <FontAwesomeIcon icon={faCircleUser} className="mb-0 w-[25px] text-[#FFFFF0] h-[25px]"/>
                </Link>
            </li>
            </ul>
        )}
    </nav>
  )
}

