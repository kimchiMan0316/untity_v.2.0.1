import { Link } from "react-router-dom";
import CreateAccountForm from "./components/create-Account-Form";

export default function CreateAccount() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-stone-100">
      <h1>회원가입</h1>
      <CreateAccountForm>
        <Link
          to="/login"
          className="text-stone-700 text-sm hover:text-stone-500"
        >
          이미 계정이 있으신가요?
        </Link>
      </CreateAccountForm>
    </div>
  );
}
