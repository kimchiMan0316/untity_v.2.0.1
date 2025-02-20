import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/g-contents/dark-slice";

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(toggleDarkMode());
        }}
      >
        다크모드
      </button>
      <h1 className="dark:bg-stone-900 dark:text-cyan-200">home</h1>
    </>
  );
}
