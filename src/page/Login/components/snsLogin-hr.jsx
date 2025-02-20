export default function SnsLoginHr({ children }) {
  return (
    <div className="w-full flex items-center justify-center my-3">
      <div className="bg-stone-700 h-[1px] w-full"></div>
      <div className="font-medium text-stone-600 text-sm mx-3 flex-shrink-0">
        {children}
      </div>
      <div className="bg-stone-700 h-[1px] w-full"></div>
    </div>
  );
}
