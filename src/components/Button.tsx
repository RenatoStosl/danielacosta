export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
      <button className='text-left bg-primary-color rounded-3xl h-14 w-44 flex items-center p-4 justify-center'>
        {children}
      </button>
    );
  }