import EButton from "../../../../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import usePageName from "../../../../../../hooks/usePageName";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
    const [ visible, setVisible ] = useState(false);
    const { pageName, pages } = usePageName();
    const navigate = useNavigate()

    const handleClick = () => {
        setVisible(prev => !prev);
    }

    const handleLogoutPress = async () => {
        navigate('/logout')
    }

    const handleHideDropdownOnScroll = () => {
        const hideDropdown = () =>  {
            setVisible(false);
        }
        window.addEventListener('scroll', hideDropdown);
        return () => window.removeEventListener('scroll', hideDropdown)
    }

    useEffect(handleHideDropdownOnScroll, []);

    return (
        <div className="relative">
            <EButton className="ml-8 py-3 transition-all flex items-center hover:text-blue-400"
                onClick={handleClick}
            >
                <span className="mr-4 text-lg">
                    Tony
                </span>
                <div className="
                    rounded-md w-10 h-10 border-2 flex items-center justify-center border-slate-400
                        desktop:w-5 desktop:border-0
                    "
                >
                    <FontAwesomeIcon className="text-xs hidden desktop:block" icon={faChevronDown}/>
                    <FontAwesomeIcon className="text-xs desktop:hidden" icon={faBars}/>
                </div>
               
            </EButton>
            {visible && <ul className="absolute bg-white top-14 right-0 w-[12rem] m-0 shadow-md rounded-md">
                <EButton
                    className={` desktop:hidden block w-full text-start px-8 py-3 ${pageName === pages.Home && "bg-slate-100"} hover:bg-slate-50`}
                    to={'/'}
                >
                    Home
                </EButton>
                <EButton
                    className={` desktop:hidden block w-full text-start px-8 py-3 ${pageName === pages.Event && "bg-slate-100"} hover:bg-slate-50`}
                    to={'/events'}
                >
                    Events
                </EButton>
                <EButton
                    className={` desktop:hidden block w-full text-start px-8 py-3 ${pageName === pages.DonorRequest && "bg-slate-100"} hover:bg-slate-50`}
                    to={'/donor-requests'}
                >
                    Donor Requests
                </EButton>
                
                <div className="divider w-full border-b"/>
                <EButton
                    className="w-full text-start px-8 py-3 hover:bg-slate-50 block"
                    href="https://github.com/tonible14012002/uwc_2.0_SE"
                >
                    Source code
                </EButton>
                <EButton
                    className="w-full text-start px-8 py-3 hover:bg-slate-50"
                    onClick={handleLogoutPress}
                    // handle Logout
                >
                    Logout
                </EButton>
            </ul>}
        </div>
    );
}

export default DropDown;
