import Header from "./components/Header";

const DefaultLayout = ({children}) => {
    return (
        <div id="main" className="h-[100vh] w-full bg-[#fffbf2] relative">
            <Header/>
            <div className="h-[5rem]"></div>
            <div className="px-4 desktop:px-10 max-w-[86rem] mx-auto w-full">
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;