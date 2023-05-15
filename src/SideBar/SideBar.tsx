import { UserIcon } from "../icons/icons";
import { Button } from "@nextui-org/react";
import "./SideBar.css";
const SideBar = (props: any) => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <h1>Logo</h1>
      </div>

      <div className='options'>
        {["user", "pannel", "board"].map((x) => (
          <div className='iconsButton'>
            <UserIcon />
          </div>
        ))}
      </div>
      <div className='logout'>
        <Button auto>Logout</Button>
      </div>
    </div>
  );
};

export default SideBar;
