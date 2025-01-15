
export function Features()
{
  return (
    <section className="bg-gray-100 p-10 md:p-16 lg:p-[112px] text-center md:text-start">
      <div className='container pb-10 lg:pb-20 md:w-1/2'>
        <h2 className='pb-6 text-4xl'>Why choose Easybank?</h2>
        <p className='text-gray-500 text-md'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 features">
        <div className="features-card">
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-online.svg" alt="" />
          <h3>Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>
        <div className="features-card">
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-budgeting.svg" alt="" />
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
        </div>
        <div className="features-card">
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-onboarding.svg" alt="" />
          <h3>Fast Onboarding</h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away </p>
        </div>
        <div className="features-card">
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-api.svg" alt="" />
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </section>
  )
}
