import { useState } from "react";
import EButton from "../../../../components/Button";
import { faEnvelope, faEnvelopeCircleCheck, faUser, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemDetail from "../ItemDetail";

const ItemList = () => {

    return (
        <div className="w-full mt-16 grid grid-cols-1 
                        tablet:px-6 tablet:grid-cols-2 gap-5 tablet:gap-5 desktop:gap-8
                        desktop:px-0 desktop:grid-cols-3
                        ">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
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
    const handleViewDetailPress = () => {
        setShowDetail(true)
    }

    const handleCloseViewDetail = () => {
        setShowDetail(false)
    }

    return (
        <div className="w-full flex flex-col relative p-4 bg-white border border-zinc-200 rounded-3xl"
        >
            <div className="bg-zinc-100 rounded-xl w-full p-[25%] tablet:p-[33%] desktop:p-[25%]">
            </div>
            <div className="px-4 tablet:px-2 py-2">
                <div className="flex justify-between items-baseline">
                    <EButton 
                        className="font-semibold text-left text-zinc-700"
                        onClick={handleViewDetailPress}
                    >
                        Old baby cloth
                    </EButton>
                    <div className="text-purple-600 flex flex-row text-xs font-semibold">
                        <span>x2</span>
                        &nbsp;
                        <div className="">
                            <FontAwesomeIcon icon={faWeightHanging}/>
                            &nbsp;
                            <span>12 kg</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2 text-sm text-zinc-600 mb-2">
                    <div className=" w-[30px] h-[30px] border border-zinc-200 rounded-full bg-zinc-200 flex justify-center items-center text-white  ">
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <span className="text-zinc-700 font-medium">Unknown</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-2 tablet:px-2 tablet:py-1 bg-orange-200 rounded-lg font-semibold text-zinc-600">
                        Cloth
                    </span>
                    <span className="text-xs px-3 py-2 tablet:px-2 tablet:py-1 bg-orange-200 rounded-lg font-semibold text-zinc-600">
                        Cloth
                    </span>
                    <span className="text-xs px-3 py-2 tablet:px-2 tablet:py-1 bg-orange-200 rounded-lg font-semibold text-zinc-600">
                        Cloth
                    </span>
                    <span className="text-xs px-3 py-2 tablet:px-2 tablet:py-1 bg-orange-200 rounded-lg font-semibold text-zinc-600">
                        Cloth
                    </span>
                    <span>....</span>
                </div>
            </div>
            <EButton
                className={`absolute right-0 top-[30px] rounded-l-md transition-all px-4 py-2
                    text-sm 
                    ${isSent ? 'bg-white text-teal-600 border border-teal-700': 'bg-teal-500 text-white hover:bg-teal-600'}
                `}
                onClick={handleSentRequest}
                >
                {isSent 
                ? <FontAwesomeIcon icon={faEnvelopeCircleCheck}/>
                : <FontAwesomeIcon icon={faEnvelope}/>}
            </EButton>
            {showDetail &&
            <ItemDetail
                onClose={handleCloseViewDetail}
            />}
        </div>
    )
}


export default ItemList;
