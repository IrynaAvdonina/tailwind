
export function Articles()
{
  return (
    <section className="p-10 md:p-16 lg:p-[112px] bg-gray-50">
      <h2 className='pb-8 text-4xl text-center md:text-start'>Latest Articles</h2>
      <div className="grid grid-cols-1 grid-rows-4 gap-10 lg:gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 articles">
        <div className="article">
          <img src="https://tailwindpractice-easybank.netlify.app/images/image-currency.jpg" alt="" />
          <div className='article-info'>
            <p className='article-author'>By Claire Robinson</p>
            <h4><a>Receive money in any currency with no fees</a></h4>
            <p className='article-description'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single.So why should you be forced to only receive money in a single.</p>
          </div>
        </div>
        <div className="article">
          <img src="https://tailwindpractice-easybank.netlify.app/images/image-restaurant.jpg" alt="" />
          <div className='article-info'>
            <p className='article-author'>By Wilson Hutton</p>
            <h4><a>Treat yourself without worrying about money</a></h4>
            <p className='article-description'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means youOur simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you</p>
          </div>
        </div>
        <div className="article">
          <img src="https://tailwindpractice-easybank.netlify.app/images/image-plane.jpg" alt="" />
          <div className='article-info'>
            <p className='article-author'>By Wilson Hutton</p>
            <h4><a>Take your Easybank card wherever you go</a></h4>
            <p className='article-description'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you. We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you</p>
          </div>
        </div>
        <div className="article">
          <img src="https://tailwindpractice-easybank.netlify.app/images/image-confetti.jpg" alt="" />
          <div className='article-info'>
            <p className='article-author'>By Claire Robinson</p>
            <h4><a>Our invite-only Beta accounts are now live!</a></h4>
            <p className='article-description'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site, After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site</p>
          </div>
        </div>
      </div>
    </section>
  )
}
