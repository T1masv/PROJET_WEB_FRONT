import { UserIcon, LogoutIcon } from "../icons/icons";
import { Button } from "@nextui-org/react";
import "./SideBar.css";

const logout = async () => {
  localStorage.removeItem("userID");
  localStorage.removeItem("role");
  window.location.href = "/login";
};

const SideBar = (props: any) => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <a href="/"><img src='./logo.png' alt='' style={{ width: 100 }} /></a>
      </div>

      <div className='options'>
        {["user", "pannel", "board"].map((x, index) => (
          <div className='iconsButton' key={index}>
            <UserIcon
              filled={undefined}
              size={undefined}
              height={undefined}
              width={undefined}
              label={undefined}
            />
          </div>
        ))}
      </div>
      <div className='logout'>
        <div className='iconsButton'>
        <span onClick={() => logout()}><LogoutIcon /></span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
