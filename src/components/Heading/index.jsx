export const Heading = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-black text-5xl">{children}</h2>
      <div  className="h-2.5 w-40 mt-3 bg-madureira-100"/>
    </div>
  );
};
