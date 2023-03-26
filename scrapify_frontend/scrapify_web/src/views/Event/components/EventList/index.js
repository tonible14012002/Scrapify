import { faCalendar, faClock,faEye, faLocationDot, faPen, faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import EButton from "../../../../components/Button"
import CompactPara from "../../../../components/ReadMore"
import Modal from "../../../../components/Modal"

const EventList = () => {
    return (
        <div className="w-full mt-16 grid grid-cols-1 
            tablet:px-6 tablet:grid-cols-2 gap-5 tablet:gap-5 desktop:gap-8
            desktop:px-0 desktop:grid-cols-2"
        >
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
        </div>
    )
}

const EventItem = () => {

    const [ showDetailModal, setShowDetailModal ] = useState(false)

    const handlePress = () => {
        setShowDetailModal(true)
    }

    const handleCloseModal = () => {
        setShowDetailModal(false)
    }

    return (
        <div className="w-full rounded-3xl bg-white p-4 tablet:p-6 border border-zinc-200 relative text-left"
        >
            <EButton className="text-left"
                onClick={handlePress}
            >
                <div className="w-full p-[25%] bg-zinc-100 shadow-sm rounded-xl"> 
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold text-zinc-700 text-lg">
                        Humanitarian Careers for Women at ICRCs
                    </h3>
                    <h3 className="text-sm text-zinc-500 font-normal"
                    >
                        1002, Ta Quang Buu, P6 - Q8, tp Ho Chi Minh
                    </h3>
                    <h4 className="bg-white px-2 py-1 w-fit rounded-br-lg absolute top-4 tablet:top-6 left-3 tablet:left-5">
                        <FontAwesomeIcon className="text-teal-600" icon={faCalendar}/>
                        <span className="text-zinc-500 text-xs ml-2">24/5 - 24/12</span>
                    </h4>
                    <p className="text-sm text-zinc-800 font-normal mt-2">
                        I’m here to find some friends and people who love pink things.
                        I’m here to find some friends and people who love pink things.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs py-1 px-2 bg-purple-500 text-white rounded-lg font-semibold">Cloth</span>
                        <span className="text-xs py-1 px-2 bg-purple-500 text-white rounded-lg font-semibold">Paper</span>
                        <span className="text-xs py-1 px-2 bg-purple-500 text-white rounded-lg font-semibold">Mental Scrap</span>
                    </div>
                </div>
            </EButton>
            {showDetailModal &&
            <EventDetailModal
                onClose={handleCloseModal}
            />}
        </div>
    )
}

const EventDetailModal = ({onClose, ...props}) => {

    const navigate = useNavigate()
    const handleViewDetailPage = () => {
        navigate(`/events/${2}`)
    }

    return (
        <Modal onClose={onClose} >
            <div className="flex items-center rounded-xl">
                <div className="w-[400px] h-[400px] bg-zinc-200 rounded-xl mr-4">
                    <img alt="" href=""/>
                </div>
                <div className="w-[500px] bg-white rounded-xl">
                    <h3 className=" text-xl font-semibold px-4 pt-4">Humanitarian Careers for Woman at ICRCs</h3>
                    <div className="min-h-[400px] max-h-[500px] overflow-y-auto ">
                        <div className="mt-2 px-4">
                            <label className="text-purple-600 font-medium text-xs">Banners</label>
                            <ul className="flex flex-wrap gap-2 mt-1">
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                                <div className="w-[100px] h-[100px] bg-zinc-200"></div>
                            </ul>
                        </div>
                        <div className="mt-2 px-4">
                            <label className="text-purple-600 font-medium text-xs">Locations - Time</label>
                            <h3 className="text-teal-600 mt-1">
                                <FontAwesomeIcon icon={faLocationDot}/>
                                <span className="ml-2 text-sm">The Pegasuite apartment, 1002 Ta Quang Buu, P6 - Q8, tp HCM</span>
                            </h3>
                            <h3 className="text-teal-600 flex items-center text-sm">
                                <FontAwesomeIcon icon={faClock}/>
                                <div className="ml-2">
                                    <span className="text-sm mr-2">Start</span>
                                    <span className="font-medium">12:20 - 12/2/2023</span>
                                </div>
                            </h3>
                            <h3 className="text-teal-600 flex items-center text-sm">
                                <FontAwesomeIcon icon={faClock}/>
                                <div className="ml-2">
                                    <span className="text-sm mr-2">End </span>
                                    <span className="font-medium">12:20 - 12/2/2023</span>
                                </div>
                            </h3>
                        </div>
                        <div className="mt-2 px-4">
                            <span className="text-purple-600 text-xs font-medium">Categories</span>
                            <ul className="flex flex-wrap gap-2 mt-1">
                                <span className="py-1 px-2 text-xs bg-teal-600 text-white rounded-lg font-medium">Cloth</span>
                                <span className="py-1 px-2 text-xs bg-teal-600 text-white rounded-lg font-medium">Cloth</span>
                                <span className="py-1 px-2 text-xs bg-teal-600 text-white rounded-lg font-medium">Cloth</span>
                            </ul>
                        </div>
                        <div className="mt-2 px-4">
                            <span className="text-purple-600 text-xs font-medium">Descriptions</span>
                            <CompactPara className="text-zinc-700 text-sm mt-1">
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                                asdasdasdasd
                            </CompactPara>
                        </div>
                    </div>
                    <div className="p-4">
                        <EButton className="text-sm font-semibold hover:bg-teal-700 transition-all 
                            text-white bg-teal-600 w-full p-4 rounded-md mt-4"
                            onClick={handleViewDetailPage}
                        >
                            <span className="mr-2">View Detail </span>
                            <FontAwesomeIcon icon={faEye}/>
                        </EButton>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EventList
