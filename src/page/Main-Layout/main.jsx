import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <menu></menu>
      <Outlet />
    </div>
  );
}
