interface IActiveLabel {
  isActive: boolean;
}

export default function ActiveLabel({ isActive }: IActiveLabel) {
  return (
    <div>
      <p
        className={`${
          isActive ? 'bg-green-400' : 'bg-red-500'
        } w-fit rounded-full p-2 text-sm select-none`}
      >
        {isActive ? 'active' : 'not active'}
      </p>
    </div>
  );
}
