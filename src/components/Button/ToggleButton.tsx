import React, { MouseEvent } from 'react';

type IToggleButtonProps = {
  isActive: boolean;
  onClick: (event?: MouseEvent) => any;
  children: any;
};

export default function ToggleButton({ isActive, onClick, children }: IToggleButtonProps) {
  return (
    <button
      className={`${
        isActive ? 'bg-[#fddea29b] rounded-[30px] text-[#21242f]' : 'bg-transparent text-[#cdcccc]'
      } py-2 px-4 flex justify-center text-[1em] font-Syne font-[400]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
