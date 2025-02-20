import { Link } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Logo from "../../assets/untityLogo.png";
import KakaoLogin from "../../assets/kakao_login_large.png";
import SnsLoginHr from "./components/snsLogin-hr";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-stone-100">
      <div className="w-11/12 m-3 flex justify-center items-center flex-col sm:w-96 sm:border sm:border-stone-500">
        <div className="w-52 flex justify-center items-center">
          <img className="w-full h-auto" src={Logo} />
        </div>
        <div>
          <p className="text-sm font-medium text-stone-900 text-left">
            Awesome project we create together
          </p>
        </div>
        <LoginForm>
          <Link
            to="/createAccount"
            className="text-stone-700 text-sm hover:text-stone-500"
          >
            회원가입하기
          </Link>
        </LoginForm>
        <div className="w-11/12">
          <SnsLoginHr>또는</SnsLoginHr>
          <img className="w-full h-auto cursor-pointer" src={KakaoLogin} />
          {/* sns로그인 들어갈 자리 */}
        </div>
      </div>
    </div>
  );
}
