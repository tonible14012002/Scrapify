import EButton from "../../../../../../components/Button";
import usePageName from "../../../../../../hooks/usePageName";

const PageRoute = () => {

    const { pageName, pages } = usePageName();

    return (
        <div className="hidden desktop:flex">
            <EButton
                to={'/'}
            >
                <div className={`px-8 py-3 ${pageName === pages.Home? "text-white bg-teal-600": "hover:text-teal-600"} transition-all `}>
                    Home
                </div>
            </EButton>
            <EButton
                to={'/events'}
            >
                <div className={`px-8 py-3 ${pageName === pages.Event ? "hover:bg-teal-600 text-white bg-teal-600": "hover:text-teal-600"} transition-all `}>
                    Event
                </div>
            </EButton>
            <EButton
                to={'/donor-requests'}
            >
                <div className={`px-8 py-3 ${pageName === pages.DonorRequest ? "hover:bg-teal-600 text-white bg-teal-600": "hover:text-teal-600"} transition-all `}>
                    Donor Request
                </div>
            </EButton>
        </div>
    );
}

export default PageRoute;
