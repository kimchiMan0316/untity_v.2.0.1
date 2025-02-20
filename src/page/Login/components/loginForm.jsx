import { useState } from "react";
import LoginButton from "./loginButton";
import CommonInput from "../../../components/input";

export default function LoginForm({ children }) {
  const [loginInf, setLoginInf] = useState({
    id: "",
    pw: "",
    loginError: false,
  });

  const onChange = (e, filed) => {
    const value = e.target.value;
    setLoginInf((state) => {
      return {
        ...state,
        [filed]: value,
        loginError: false,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginInf.id.trim() === "" || loginInf.pw.trim() === "") {
      setLoginInf((state) => {
        return {
          ...state,
          loginError: true,
        };
      });
    }
    console.log(loginInf);
  };

  return (
    <form
      className="w-full my-3 h-auto flex flex-col justify-center items-center min-w-72"
      onSubmit={(e) => handleLogin(e)}
    >
      <CommonInput
        onChange={(e) => onChange(e, "id")}
        value={loginInf.id}
        id={"id"}
        placeholder="아이디"
        type="text"
      >
        아이디
      </CommonInput>
      <CommonInput
        onChange={(e) => onChange(e, "pw")}
        value={loginInf.pw}
        id={"password"}
        placeholder="비밀번호"
        type="password"
      >
        비밀번호
      </CommonInput>
      {loginInf.loginError && (
        <div className="text-center text-red-600 text-sm font-semibold m-1">
          로그인 정보를 확인해주세요
        </div>
      )}
      <LoginButton>로그인</LoginButton>
      {children}
    </form>
  );
}
