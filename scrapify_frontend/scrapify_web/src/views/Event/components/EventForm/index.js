import { faClock, faClose, faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactTextareaAutosize from "react-textarea-autosize"
import EButton from "../../../../components/Button"
import CloseButton from "../../../../components/CloseButton"
import Modal from "../../../../components/Modal"

const EventForm = ({onClose, ...props}) => {

    return (
        <Modal>
            <div className="w-[500px] bg-white rounded-xl relative">
                <CloseButton
                    onClick={onClose}
                />
                <h3 className="text-xl text-zinc-700 font-semibold text-center py-4">Create Events</h3>
                <hr/>

                <div className="w-full h-[500px] overflow-y-auto">
                    <div className="py-2 px-6 text-zinc-500">
                        <label className="block text-sm font-medium text-zinc-400">Title</label>
                        <input className= "outline-none py-1 w-full border-b border-b-zinc-300"/>
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Address</label>
                        <input className="outline-none py-1 w-full border-b border-b-zinc-300"/>
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Contact</label>
                        <input className="outline-none py-1 w-full border-b border-b-zinc-300"/>
                    </div> 
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Start</label>
                        <div className="flex gap-2 py-1 text-zinc-600">
                            <input type="time" className="outline-none py-1 w-full border-b border-b-zinc-300"/>
                            <input type="date" className="outline-none py-1 w-full border-b border-b-zinc-300"/>
                        </div>
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">End</label>
                        <div className="flex gap-2 py-1 text-zinc-600">
                            <input type="time" className="outline-none py-1 w-full border-b border-b-zinc-300"/>
                            <input type="date" className="outline-none py-1 w-full border-b border-b-zinc-300"/>
                        </div>
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Descriptions</label>
                        <ReactTextareaAutosize
                            minRows={1}
                            className="py-1 outline-none w-full border-b border-b-zinc-300 resize-none"
                        />
                    </div>
                    <div className="py-2 px-6 mb-10">
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Banners</label>
                        <div className="flex flex-wrap gap-2">
                            <div className="w-[120px] h-[120px] rounded-md bg-zinc-300">
                            </div>
                            <EButton className="w-[120px] h-[120px] border border-dashed border-zinc-400 rounded-md text-zinc-600"
                            >
                                <FontAwesomeIcon icon={faImage}/>
                                <span> +</span>
                            </EButton>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <EButton className="w-full py-3 bg-teal-600 text-white font-medium rounded-md">
                        Submit
                    </EButton>
                </div>
            </div>
        </Modal>
    )
}

export default EventForm