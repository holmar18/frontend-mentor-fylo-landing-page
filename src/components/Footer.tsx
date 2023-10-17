import MaxWidthWrapper from "./MaxWidthWrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneVolume, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import {
  faSquareFacebook,
  faInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import {ReactNode} from "react";

const Footer = (): ReactNode => {
  return (
    <footer className='bg-darkGray text-white p-12'>
      <MaxWidthWrapper className='flex flex-col lg:w-10/12 mdx:w-8/12 xl:pb-10'>
        {/* Logo & contact info */}
        <div className='w-64 h-8 pt-4 pb-24'>
          <Logo fillColorLogo='#fff' fillColorText='#fff' />
        </div>
        <div className='flex flex-row justify-between sm:text-sm xs:flex-col sm:gap-4'>
          <div className='py-8'>
            <div className='flex items-center gap-4 pb-2'>
              <FontAwesomeIcon icon={faPhoneVolume} />
              <p className='sm:text-sm'>Phone: +1-543-123-4567</p>
            </div>
            <div className='flex items-center gap-4'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p className='sm:text-sm'>example@fylo.com</p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className='py-8 sm:gap-2'>
            <table>
              <tr className='flex flex-col gap-4 cursor-pointer'>
                <td className='hoverAnimation'>About Us</td>
                <td className='hoverAnimation'>Jobs</td>
                <td className='hoverAnimation'>Press</td>
                <td className='hoverAnimation'>Blog</td>
              </tr>
            </table>
          </div>

          <div className='py-8'>
            <table>
              <tr className='flex flex-col gap-4 cursor-pointer'>
                <td className='hoverAnimation'>Contact Us</td>
                <td className='hoverAnimation'>Terms</td>
                <td className='hoverAnimation'>Privacy</td>
              </tr>
            </table>
          </div>

          {/* Socials */}
          <div className='flex justify-center pt-8'>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className='text-white fa-2x hoverAnimation'
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className='text-white fa-2x mx-4 hoverAnimation'
            />
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className='text-white fa-2x hoverAnimation'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
