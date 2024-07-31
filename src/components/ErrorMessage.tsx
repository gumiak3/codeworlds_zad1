interface IErrorMessage {
  message: string;
}

export default function ErrorMessage({ message }: IErrorMessage) {
  return (
    <div className="text-red-600 w-full text-center">{`Error message: ${message}`}</div>
  );
}
