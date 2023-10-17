import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {ReactNode} from "react";
import Logo from "./Logo";

const Navigation = (): ReactNode => {
  return (
    <nav className='h-32 flex items-center'>
      <MaxWidthWrapper>
        <div className='w-full flex justify-between'>
          <div className='w-40 h-8 xs:w-28 xs:scale-[0.65] animate-scaleRotate'>
            <Logo fillColorLogo='#BDBAFA' fillColorText='#000' />
          </div>
          <table className='flex items-center font-semibold'>
            <tr className='flex gap-16 text-desaturatedBlue xs:gap-6 xs:text-sm'>
              <td className='hoverAnimation'>Features</td>
              <td className='hoverAnimation'>Team</td>
              <td className='hoverAnimation'>Sign In</td>
            </tr>
          </table>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navigation;
