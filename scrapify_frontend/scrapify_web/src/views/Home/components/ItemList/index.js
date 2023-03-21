import { useState } from "react";
import EButton from "../../../../components/Button";

const ItemList = () => {

    return (
        <div className="bg-grey w-full h-10 mt-16 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 tablet:gap-5 desktop:gap-8">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}

const Item = () => {
    const [isSent, setIsSent] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    const handleSentRequest = () => {
        // 
        setIsSent(true)
    }
    const handleViewDetail = () => {

    }

    return (
        <div className="w-full rounded-xl flex bg-white shadow-md gap-4 relative">
            <div className="p-[25%] bg-slate-100 rounded-l-md">
                
            </div>
            <div className="mt-2 pr-4">
                <EButton 
                    className="font-semibold mb-2 text-left"
                    onClick={() => {}}
                >
                    Old Ionic Cloth ds wefwef efwefwe
                </EButton>
                <div className="text-sm flex justify-between w-full">
                    <span>Weight</span>
                    <span>12 kg</span>
                </div>
                <div className="text-sm flex justify-between w-full">
                    <span>Count</span>
                    <span>x 2</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                    <div className="text-xs px-2 py-1 bg-white shadow-md">
                        Cloth
                    </div>
                    <div className="text-xs px-2 py-1 bg-white shadow-md">
                        Paper 
                    </div>
                    <div className="text-xs px-2 py-1 bg-white shadow-md">
                        Mental scrap 
                    </div>
                    ...
                </div>
            </div>
            <EButton
                className={`absolute right-4 -bottom-2 transition-all rounded-lg px-4 py-2
                    ${isSent ? 'bg-white text-teal-600 border border-teal-700': 'bg-teal-500 text-white hover:bg-teal-600'}
                `}
                onClick={handleSentRequest}
                >
                Request
            </EButton>
        </div>
    )
}


export default ItemList;
