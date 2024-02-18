import { Modal } from "components/Modal/Modal";
import NavList from "components/NavList";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
    const [isShowMenu, setIsShowMenu] = useState(false)

    const onShowMenu = () => {
        setIsShowMenu(true)
    }

    return (
        <>
            <button onClick={onShowMenu}><GiHamburgerMenu /></button>
           {isShowMenu && <Modal closeModal={setIsShowMenu}><NavList closeMenu={setIsShowMenu}/></Modal>} 
        </>
    )
}
export default MobileMenu