import React from 'react';

const ContactUs = () => {
  return (
    <div
      className="z-10 w-full px-5 xl:px-0"
    >
      <div className="bg-black bg-opacity-60 py-20 px-4 sm:px-6 lg:px-8 relative"       style={{
        backgroundImage: 'url("/uganda-hippo.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "500px"
      }}>
        <div className="absolute bottom-0 left-0 py-20 px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl font-extrabold text-gray-950">Contact Us</h1>
          <p className="mt-4 text-lg  text-gray-950">Talk to us about visiting East Africa</p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Talk To Us</h2>
              <hr className="border-t-2 border-gray-400 my-2" />
              <p className="text-gray-600 mt-4">
                We are excited to hear from you and committed to using our expertise and connections to help you. You can send us a quick email via the contact form below.
              </p>
              <p className="text-gray-600 mt-4">
                Alternatively, you can give us a direct email or call, and we can talk some more. Just click any of the following links.
              </p>
              <ul className="mt-4">
                <li className="text-gray-600">
                  E-mail: <a href="mailto:info@primateworldsafaris.com" className="text-blue-600">aleku399@gmail.com</a>
                </li>
                <li className="text-gray-600">
                  Phone: <a href="tel:+256703904099" className="text-blue-600">+256 755 574905</a>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                Let us know your queries, and we will assist as soon as possible.
              </p>
            </div>

            <div>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        Your Names *
                      </label>
                      <div className="flex flex-col sm:flex-row">
                        <input
                          className="w-full mb-2 sm:w-1/2 sm:mr-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder="First"
                        />
                        <input
                          className="w-full mb-2 sm:w-1/2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder="Last"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Your Email *
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Your Phone
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Your Phone"
                            maxLength={15}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Your Message
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows={4}
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                <div className="flex items-center justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
