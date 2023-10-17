const BackDrop = () => {
  return (
    <>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
        <div
          style={{
            clipPath:
              "polygon(49% 51%, 2% 2%, 15% 11%, 55% 0%, 5% 51%, 58% 31%, 89% 21%, 73% 13%, 59% 14%, 46% 24%, 76% 55%, 54% 71%, 27% 67%, 33% 48%, 71% 77%, 66% 98%, 55% 100%, 34% 100%, 22% 87%, 33% 27%, 6% 74%, 7% 94%, 88% 82%)",
          }}
          className='relative left-[calc(40%-11rem)] aspect-[1055/678] w-[46.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lightPink to-pink opacity-20 sm:left-[calc(40%-30rem)] sm:w-[74.1875rem]'
        />
      </div>
    </>
  );
};

export default BackDrop;
