export default function CommonButton({ children }) {
  return (
    <button
      className="w-11/12 my-1 p-2 bg-[#38b4ff] hover:bg-[#2f8bc4] text-white rounded-md "
      type="submit"
    >
      {children}
    </button>
  );
}
