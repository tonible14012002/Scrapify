import DropDown from "./components/DropDown";
import PageRoute from "./components/PageRoute";

const Header = () => {

    return (
        <header className="w-full fixed h-[5rem] desktop:h-[5rem] bg-[#fffbf2] px-4 desktop:px-10 z-50">
            <div className="max-w-[70rem] m-auto h-full">
                <div className="h-full max-w-[86rem] mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="rounded-lg w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mr-4">
                            <h1 className="text-4xl text-white font-semibold">S</h1>
                        </div>
                        <div className="font-semibold leading-[1.3rem] text-base mr-8">
                            <h2>SCRAPIFY</h2>
                            <h2>COLLECTION</h2>
                        </div>
                    </div>
                    <div className="flex text-sm items-center">
                        <PageRoute/>
                        <div className="hidden desktop:block divider border-r h-10 border-x-zinc-300 mx-4"/>
                        <DropDown/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;