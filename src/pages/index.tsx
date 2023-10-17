"use client";
import Image from "next/image";
import BackDrop from "@/components/BackDrop";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Testimonial from "@/components/Testimonial";
import {ReactNode} from "react";
import useEmailValidation from "@/hooks/useEmailValidation";

export default function Home(): ReactNode {
  const {isValid, mailOne, mailTwo, validate, setEmails} = useEmailValidation();

  return (
    <main className='animate-fade'>
      {/* All your files in one secure location secion */}
      <MaxWidthWrapper className='flex flex-row-reverse xs:flex-col mdx:w-11/12'>
        <div className='py-8 my-auto animate-scaleRotate'>
          <Image
            src={"assets/illustration-1.svg"}
            alt='Files image'
            width={1132.93}
            height={839.14}
          />
        </div>
        <div className='pr-24 xs:text-center my-auto xs:pr-0 sm:pr-4 md:pr-4'>
          <h1 className='text-darkGray py-6'>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className='text-darkGray font-medium'>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className='flex flex-row items-center relative py-8 xs:flex-col sm:flex-col md:flex-col'>
            <input
              className={`border-[1px] h-12 rounded-md py-3 px-7 border-${
                isValid === 1 ? "red-500" : "darkGray"
              } w-full focus:outline-none focus:ring focus:ring-bg-brightBlue`}
              placeholder='Enter your email...'
              value={mailOne || ""}
              onChange={(e) => setEmails(e.target.value, 1)}
            />
            {isValid === 1 ? (
              <p className='absolute top-[5.2rem] left-2 text-red-500 text-xs'>
                Please Check Your Email
              </p>
            ) : null}
            <button
              onClick={() => validate(1, mailOne)}
              className='text-white font-bold h-12 drop-shadow-xl bg-brightBlue w-full hover:drop-shadow-none hover:bg-btnActiveBlue hover:scale-[0.99] transition-all duration-700 xs:my-8 sm:my-6 md:my-6 mdx:ml-4 lg:ml-4 xl:ml-8 lg:w-5/12 xl:w-4/12'>
              Get Started
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className='w-full h-40 bg-blueCurveTopDesktop bg-cover xs:bg-blueCurveTopMobile xs:h-20'></div>
      <div className='w-full bg-lightGrayBlue'>
        {/* Stay productive, wherever you are */}
        <MaxWidthWrapper className='flex flex-row-reverse xs:flex-col mdx:w-11/12'>
          <div className='animate-scaleRotate'>
            <Image
              src={"assets/illustration-2.svg"}
              alt='Files image'
              width={1132.93}
              height={839.14}
              className='sm:mt-16 md:mt-20'
            />
          </div>
          <div>
            <div className='xs:text-center'>
              <h1 className='text-darkGray py-6'>
                Stay productive, wherever you are
              </h1>
              <p className='text-darkGray font-medium'>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className='text-darkGray font-medium pt-4 pb-8'>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <div className='flex items-center gap-2 text-moderateGreen underline underline-offset-[0.8rem] pb-16 xs:justify-center transition-all duration-500 cursor-pointer hover:text-gray-300 hover:scale-[0.97]'>
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
        <MaxWidthWrapper className='flex sm:w-10/12 md:w-10/12 lg:w-10/12 mdx:w-8/12 xl:pb-10'>
          <div className='xs:text-center text-white pt-16 flex flex-col lg:flex-row xl:flex-row'>
            <div className='lg:w-7/12 lg:mr-24'>
              <h1 className='text-2xl pb-6 xl:text-3xl'>
                Get early access today
              </h1>
              <p className='font-medium xl:w-7/12'>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
            <div className='flex flex-row py-8 xs:flex-col items-center justify-between relative lg:flex-col lg:w-5/12 xl:flex-col xl:w-6/12'>
              <input
                className={`text-black border-[1px] rounded-md py-3 px-5 border-${
                  isValid === 2 ? "red-500" : "darkGray"
                } h-12 focus:outline-none focus:ring focus:ring-bg-brightBlue xs:w-full sm:w-7/12 md:w-7/12 mdx:w-8/12 lg:w-full xl:w-full`}
                placeholder='email@example.com'
                value={mailTwo || ""}
                onChange={(e) => setEmails(e.target.value, 2)}
              />
              {isValid === 2 ? (
                <p className='absolute left-2 text-gray-200 text-xs top-[5.4rem] sm:top-[7.4rem] md:top-[7.4rem] mdx:top-[7.4rem]'>
                  Please Check Your Email
                </p>
              ) : null}
              <button
                onClick={() => validate(2, mailTwo)}
                className='text-white h-12 drop-shadow-xl bg-brightBlue px-4 my-8 hover:drop-shadow-none hover:bg-btnActiveBlue hover:scale-[0.99] transition-all duration-700 mdx:ml-4 xs:w-full lg:mr-auto xl:mr-auto'>
                Get Started For Free
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}

