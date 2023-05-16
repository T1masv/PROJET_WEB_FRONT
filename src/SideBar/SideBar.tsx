import { UserIcon, LogoutIcon } from "../icons/icons";
import { Button } from "@nextui-org/react";
import "./SideBar.css";
const SideBar = (props: any) => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <img src='./logo.png' alt='' style={{ width: 100 }} />
      </div>

      <div className='options'>
        {["user", "pannel", "board"].map((x) => (
          <div className='iconsButton'>
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
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
