export function Hero()
{
  return (
    <section className="flex flex-col items-center pl-2 text-center h-1/2 lg:h-screen bg-gray-50 md:flex-row lg:pl-28 md:text-start">
      <div className='container order-2 p-12 md:w-1/2 md:order-1'>
        <h1 className='text-5xl lg:text-7xl pb-9'>Next generation digital banking</h1>
        <p className='text-xl text-gray-500 pb-9'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className='btn-invite'>Request Invite</button>
      </div>
      <div className="container relative order-1 overflow-hidden bg-cover md:w-1/2 md:order-2 h-96 md:h-half-screen lg:h-full bg-intro">
        <img
          className="absolute bottom-0 object-cover max-w-full md:left-14 lg:left-28"
          src="https://tailwindpractice-easybank.netlify.app/images/image-mockups.png"
          alt="Easybank interface"
        />
      </div>

    </section>
  )
}
