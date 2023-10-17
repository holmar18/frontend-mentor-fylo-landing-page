import Image from "next/image";
import BackDrop from "@/components/BackDrop";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className=''>
      {/* All your files in one secure location secion */}
      <MaxWidthWrapper className='flex flex-row-reverse xs:flex-col'>
        <div className='py-8'>
          <Image
            src={"assets/illustration-1.svg"}
            alt='Files image'
            width={1132.93}
            height={839.14}
          />
        </div>
        <div className='pr-24 xs:text-center xs:pr-0'>
          <h1 className='text-darkGray py-6'>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className='text-darkGray font-medium'>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className='flex flex-row items-center py-8 xs:flex-col'>
            <input
              className='border-[1px] h-12 rounded-md py-3 px-7 border-darkGray xs:w-full'
              placeholder='Enter your email...'
            />
            <button className='text-white font-bold h-12 drop-shadow-xl bg-brightBlue p-4 xs:my-8 hover:drop-shadow-none hover:bg-btnActiveBlue hover:scale-[0.99] transition-all duration-700 xs:w-full'>
              Get Started
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className='w-full h-40 bg-blueCurveTopDesktop bg-cover xs:bg-blueCurveTopMobile xs:h-20'></div>
      <div className='w-full bg-lightGrayBlue'>
        {/* Stay productive, wherever you are */}
        <MaxWidthWrapper className='flex flex-row-reverse xs:flex-col'>
          <div>
            <Image
              src={"assets/illustration-2.svg"}
              alt='Files image'
              width={1132.93}
              height={839.14}
            />
          </div>
          <div>
            <div className='xs:text-center'>
              <h1 className='text-darkGray py-6'>
                Stay productive, wherever you are
              </h1>
              <p className='text-darkGray font-medium'>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs
              </p>
              <p className='text-darkGray font-medium pt-4 pb-8'>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <div className='flex justify-center items-center gap-2 text-moderateGreen underline underline-offset-[0.8rem] pb-16'>
                <p className='font-semibold'>See how Fylo works</p>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            </div>
            <Testimonial
              testimonial={
                "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine"
              }
              image={"bg-testiMonial"}
            />
          </div>
        </MaxWidthWrapper>
      </div>

      <div className='w-full bg-desaturatedBlue'>
        {/* Stay productive, wherever you are */}
        <MaxWidthWrapper className='flex xs:flex-col'>
          <div className='xs:text-center text-white pt-16'>
            <h1 className='text-2xl pb-6'>Get early access today</h1>
            <p className='font-medium'>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <div className='flex flex-row py-8 xs:flex-col'>
              <input
                className='border-[1px] rounded-md py-3 px-5 border-darkGray'
                placeholder='email@example.com'
              />
              <button className='text-white drop-shadow-xl bg-brightBlue p-4 my-4 hover:drop-shadow-none hover:bg-btnActiveBlue hover:scale-[0.99] transition-all duration-700'>
                Get Started For Free
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}

