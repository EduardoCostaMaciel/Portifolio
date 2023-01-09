interface IPropsHeader {
  text: string;
}

export function Header({ text }: IPropsHeader) {
  return (
    <header className='text-primary-300 sm:text-start transition-all ease-out duration-1000  sm:pt-1 sm:pl-2'>
      <h1>{text}</h1>
    </header>
  );
}
