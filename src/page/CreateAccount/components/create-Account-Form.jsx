import { useState } from "react";
import CommonButton from "../../../components/button";
import CommonInput from "../../../components/input";

export default function CreateAccountForm({ children }) {
  const [createAccount, setCreateAccount] = useState({
    name: "",
    id: "",
    pw: "",
  });
  const onChange = (e, filed) => {
    const value = e.target.value;

    setCreateAccount((state) => {
      return {
        ...state,
        [filed]: value,
      };
    });
  };

  return (
    <form className="flex flex-col items-center justify-center w-3/4">
      <CommonInput
        type="text"
        id="name"
        value={createAccount.name}
        onChange={(e) => onChange(e, "name")}
      >
        이름
      </CommonInput>
      <CommonInput
        type="text"
        id="id"
        value={createAccount.id}
        onChange={(e) => onChange(e, "id")}
      >
        아이디
      </CommonInput>
      <CommonInput
        type="password"
        id="pw"
        value={createAccount.pw}
        onChange={(e) => onChange(e, "pw")}
      >
        비밀번호
      </CommonInput>
      {/* 전공을 선택할 수 있는 카드 만들어주기 */}
      <CommonButton>회원가입</CommonButton>
      {children}
    </form>
  );
}
