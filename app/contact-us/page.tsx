import React from 'react';
import Contact from "@/components/shared/contact";
import { savedContact } from "@/app/api/contact";

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

            <Contact  savedContact={savedContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
