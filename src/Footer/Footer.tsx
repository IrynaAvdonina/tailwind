

export function Footer()
{
  return (
    <footer className='grid grid-cols-1 h-auto justify-items-center md:justify-items-start md:h-[188px] items-center md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[1fr_2fr_1fr] text-white bg-dark-blue px-10 py-7 lg:px-28 gap-y-10 md:gap-0'>
      <img className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2" src="https://tailwindpractice-easybank.netlify.app/images/logo-white.svg" alt="" />
      <div className="flex gap-3 pt-5 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
        <a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-facebook.svg" alt="" /></a>
        <a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-youtube.svg" alt="" /></a>
        <a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-twitter.svg" alt="" /></a>
        <a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-pinterest.svg" alt="" /></a>
        <a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-instagram.svg" alt="" /></a>
      </div>
      <nav className='flex flex-col flex-wrap items-center md:pl-8 gap-x-12 lg:gap-x-24 md:flex-row md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 extend-navigation gap-y-2'>
        <ul>
          <li><a>About Us</a></li>
          <li><a>Contact</a></li>
          <li><a>Blog</a></li>
        </ul>
        <ul>
          <li><a>Careers</a></li>
          <li><a>Support</a></li>
          <li><a>Privacy Policy</a></li>
        </ul>
      </nav>
      <button className='md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3 justify-self-center btn-invite'>Request Invite</button>
      <p className='pt-3 text-gray-500 md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4'> © Easybank. All Rights Reserved</p>
    </footer>
  )
}
