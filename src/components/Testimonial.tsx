import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {ReactNode} from "react";
import Image from "next/image";

type IReview = {
  testimonial: String;
  image: String;
};

const Testimonial = ({testimonial, image}: IReview): ReactNode => {
  return (
    <div className='bg-white text-darkGray drop-shadow-xl cursor-default rounded-md hover:rotate-6 transition-all duration-1000 p-8 mb-28 lg:w-9/12 xl:w-8/12'>
      <FontAwesomeIcon icon={faQuoteLeft} className='pb-2 text-darkGray' />
      <p>{testimonial}</p>
      <div className='flex gap-4 pt-4'>
        <div
          className={`${image} bg-fit bg-no-repeat bg-contain rounded-full h-12 w-12`}></div>
        <div className='flex flex-col justify-center align-middle'>
          <h6 className='text-sm font-extrabold'>Kyle Burton</h6>
          <p className='text-[10px] pt-1'>Founter & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
