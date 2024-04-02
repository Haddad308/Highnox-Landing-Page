
import '@styles/globals.css';
import { Providers } from './Providers';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import NabBar from '@components/Nav';

export const metadata = {
  title: "Highnox",
  
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className='overflow-x-hidden' >
        <Providers>
          <div>
            <NabBar/>
            {children}
            {/* Section5 */}
            <div className="bg-white px-10 flex flex-col md:flex-row md:px-20 py-7 gap-5  justify-between" >
              <div className="flex flex-col gap-2" >
                <h1 className="font-bold text-2xl" >Get In Touch</h1>
                <p className=" py-3" >the quick fox jumps over the <br />
                  lazy dog</p>
                <div className="flex gap-5 text-[#31A0FE]" >
                  <FaFacebook size={25} className="cursor-pointer hover:text-black transition-colors duration-300" />
                  <FaInstagram size={25} className="cursor-pointer hover:text-black transition-colors duration-300" />
                  <FaTwitter size={25} className="cursor-pointer hover:text-black transition-colors duration-300" />
                </div>
              </div>
              <div className="flex flex-col gap-2" >
                <h1 className="font-bold text-2xl" >Company info</h1>

                <div className="flex flex-col gap-5 font-semibold pt-3 text-gray-600 " >
                  <p className="cursor-pointer  w-28 hover:text-black transition-colors duration-300" >About Us</p>
                  <p className="cursor-pointer  w-28 hover:text-black transition-colors duration-300">Carrier</p>
                  <p className="cursor-pointer  w-28 hover:text-black transition-colors duration-300">We are hiring</p>
                  <p className="cursor-pointer  w-28 hover:text-black transition-colors duration-300">Blog</p>
                </div>
              </div>
              <div className="flex flex-col gap-2" >
                <h1 className="font-bold text-2xl" >Features</h1>
                <div className="flex flex-col gap-5 font-semibold pt-3 text-gray-600" >
                  <p className="cursor-pointer   hover:text-black transition-colors duration-300">Business Marketing</p>
                  <p className="cursor-pointer   hover:text-black transition-colors duration-300">User Analytic</p>
                  <p className="cursor-pointer   hover:text-black transition-colors duration-300">Live Chat</p>
                  <p className="cursor-pointer   hover:text-black transition-colors duration-300">Unlimited Support  </p>
                </div>
              </div>
            </div>
            {/* Section6 */}
            <div className="bg-[#e1f4ff] flex justify-center items-center p-5 mt-6" >
              <p className="font-semibold text-center">Made With Love By Mohamed El-Haddad All Right Reserved &copy;</p>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
