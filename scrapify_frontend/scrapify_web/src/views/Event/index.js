import EButton from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import EventList from "./components/EventList";
import { useCallback, useState } from "react";
import EventForm from "./components/EventForm";



const Event = () => {

    const [ showForm, setShowForm ] = useState(false)

    const handleCreateEventPress = () => {
        setShowForm(true)
    }

    const handleCloseEventForm = () => {
        setShowForm(false)
    }
    
    return (
        <div className="w-full mt-16">
            <div className="w-full">
                <h3 className="text-center text-3xl desktop:text-4xl font-semibold">
                    Manage your <span className="text-teal-600">Events</span>
                </h3>
                <h3 className="text-center text-lg desktop:text-xl font-light mt-2 text-zinc-600">
                    Find donors for your Organization
                </h3>
            </div>
            <div className="flex justify-center mt-10">
                <EButton className="
                    bg-teal-600 hover:bg-teal-700 transition-all min-w-[110px] 
                    desktop:py-4 desktop:px-8 text-white font-medium rounded-md
                    desktop:min-w-[110px] py-3 px-6
                    "
                    onClick={handleCreateEventPress}
                >
                    <span>
                        Create new Event
                    </span>
                    <span className="ml-4">
                        <FontAwesomeIcon icon={faPen}/>
                    </span>
                </EButton>
            </div>
            <EventList
            />
            {showForm &&
            <EventForm
                onClose={handleCloseEventForm}
            />}
        </div>
    )
}

export default Event;
