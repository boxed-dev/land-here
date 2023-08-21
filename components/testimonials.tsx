export default function UpcomingFeatures() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Upcoming Features</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Stay tuned for our exciting new features!</p>
          </div>

          {/* Feature Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Feature Item 1 */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="124" height="24" viewBox="0 0 124 24" xmlns="http://www.w3.org/2000/svg">
                {/* Add your feature icon here */}
              </svg>
              <p className="text-gray-700 mt-2">Feature 1</p>
            </div>

            {/* Feature Item 2 */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="83" height="30" viewBox="0 0 83 30" xmlns="http://www.w3.org/2000/svg">
                {/* Add your feature icon here */}
              </svg>
              <p className="text-gray-700 mt-2">Feature 2</p>
            </div>

            {/* Feature Item 3 */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="125" height="39" viewBox="0 0 125 39" xmlns="http://www.w3.org/2000/svg">
                {/* Add your feature icon here */}
              </svg>
              <p className="text-gray-700 mt-2">Feature 3</p>
            </div>

            {/* Feature Item 4 */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="125" height="39" viewBox="0 0 125 39" xmlns="http://www.w3.org/2000/svg">
                {/* Add your feature icon here */}
              </svg>
              <p className="text-gray-700 mt-2">Feature 4</p>
            </div>

            {/* Feature Item 5 */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="125" height="39" viewBox="0 0 125 39" xmlns="http://www.w3.org/2000/svg">
                {/* Add your feature icon here */}
              </svg>
              <p className="text-gray-700 mt-2">Feature 5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
