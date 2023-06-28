export const Heading = ({ style, children }) => {
  return (
    <div className={`flex flex-col items-center ${style}`}>
      <h2 className="font-black text-5xl text-center">{children}</h2>
      <div className="h-2.5 w-40 mt-3 bg-madureira-100" />
    </div>
  );
};
