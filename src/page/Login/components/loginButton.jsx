export default function LoginButton({ children }) {
  return (
    <>
      <button
        className="w-11/12 my-2 bg-[#38b4ff] hover:bg-[#2f8bc4] text-white rounded-md p-2"
        type="submit"
      >
        {children}
      </button>
    </>
  );
}
