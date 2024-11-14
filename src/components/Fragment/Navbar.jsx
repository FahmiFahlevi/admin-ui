import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balances",
      icon: <Icon.Balance />,
      label: "Balances",
    },
    {
      id: "transaction",
      link: "/transactions",
      icon: <Icon.Transaction />,
      label: "Transactions",
    },
    {
      id: "bill",
      link: "/bills",
      icon: <Icon.Bill />,
      label: "Bills",
    },
    {
      id: "expense",
      link: "/expenses",
      icon: <Icon.Expense />,
      label: "Expenses",
    },
    {
      id: "goal",
      link: "/goals",
      icon: <Icon.Goal />,
      label: "Goals",
    },
    {
      id: "setting",
      link: "/settings",
      icon: <Icon.Setting />,
      label: "Settings",
    },
  ];
  return (
    <div className="bg-defaultBlack">
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant="text-white text-sm sm:text-2x1" />
          </NavLink>
          {menus.map((menu) => (
            <NavLink key={menu.id} to={menu.link} className={({ isActive }) => (isActive ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md" : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md")}>
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">
            <Icon.Logout />
          </div>
          <div className="ms-3 hidden sm:block">Logout</div>
        </div>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0">
            <img src="images/Profil.png" />
          </div>
          <div className="hidden sm:block">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block">
            <Icon.KebabMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
