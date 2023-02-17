import { Warning } from 'phosphor-react';

type PropsError = {
  err: string;
};

export function WarningError({ err }: PropsError) {
  return (
    <span className='w-80vw p-1 flex flex-col flex-grow items-center gap-2 bg-slate-800 text-center text-red-500 rounded-lg'>
      <small className='flex items-center gap-2 text-lg'>
        <Warning size={20} color='#FE0101' weight='fill' />
        Warning !
      </small>
      {err}
    </span>
  );
}
