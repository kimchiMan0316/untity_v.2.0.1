import { Fragment, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  // 다크 모드가 토글될 때마다 HTML 태그에 'dark' 클래스 추가/제거
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
