interface Props {
  value: string;
  bgColor: string;
  // onClick: () => void;
  onClick:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}
function Button({ value, bgColor, onClick }: Props) {
  const styleClass = `p-3.5 px-5 me-2 mb-2 text-sm font-medium
    focus:outline-none  rounded-lg border text-zinc-800
    border-gray-200 hover:bg-gray-100 hover:text-blue-700 
    focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 
     dark:text-gray-200 dark:border-gray-600 dark:hover:text-white
    dark:hover:bg-gray-700 ${bgColor} border-none `;

  return (
    <>
      <button
        type="button"
        className={styleClass}
        onClick={onClick}
        value={value}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
