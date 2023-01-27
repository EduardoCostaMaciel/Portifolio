interface IPropsHeader {
  text: string;
}

export function Header({ text }: IPropsHeader) {
  return (
    <header
      className='
        relative
        w-full
        top-0 px-2 py-2
        flex items-center justify-between
        text-primary-300
        transition-all ease-out duration-1000
      '
    >
      <h1 className='text-lg bg-opaced-100 px-2 py-1 rounded-lg'>{text}</h1>
    </header>
  );
}
