type Props = {
  error: Error;
};

const ErrorBoundary: React.FC<Props> = ({ error }) => {
  return (
    <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0">
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="text-red-500">{error.message}</p>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Dismiss
      </button>
    </div>
  );
};

export default ErrorBoundary;
