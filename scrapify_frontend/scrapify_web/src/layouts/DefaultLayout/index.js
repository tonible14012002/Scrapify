import Header from "./components/Header";

const DefaultLayout = ({children}) => {
    return (
        <div className="w-full bg-[#fffbf2] relative">
            <Header/>
            <div className="h-[5rem]"></div>
            <div className="px-4 desktop:px-0 max-w-[70rem] mx-auto w-full min-h-[100vh]">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="h-[70px] mt-10 text-sm text-zinc-800 font-semibold w-full">
            <h3>// Footer</h3>
            <div className="m-auto w-fit flex flex-col items-center">
                <span>Bui Ngoc Nam Anh</span>
                <span>Do Dieu Trinh</span>
                <span>All rights served</span>
            </div>
        </div>
    )
}

export default DefaultLayout;