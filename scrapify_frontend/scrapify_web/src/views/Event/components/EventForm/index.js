import ReactTextareaAutosize from "react-textarea-autosize"
import EButton from "../../../../components/Button"
import CloseButton from "../../../../components/CloseButton"
import Modal from "../../../../components/Modal"
import { useForm } from "react-hook-form"
import { useAuthContext } from "../../../../context/authContext"
import Selector from "../../../../components/Selector"
import { useCallback, useState } from "react"
import { createMyEvent } from "../../../../services/eventServices"
import FileSelector from "../../../../components/FileSelector"
import { json } from "react-router-dom"

const category_options = [
    "None", 
    "Cloth",
    "Paper",
    "Plastic",
    "Mental Scrap",
    "Other"
]

const EventForm = ({onClose, ...props}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuthContext()
    const [ categories, setCategories ] = useState([])
    const [ images, setImages ] = useState([])

    const onSubmit = async (values) => {

        const { start_date, start_time, end_date, end_time, ...validValues } = values
        const start = start_date + 'T' + start_time 
        const end = end_date + 'T' + end_time

        const data = {
            categories: categories,
            recipient_profile: user.recipient_profile.id, 
            start_time:  new Date(start).toISOString(), 
            end_time:  new Date(end).toISOString(), 
            "images": [],
            ...validValues
        }
        console.log(data)
        console.log(JSON.stringify(data))

        try {
            const result = await createMyEvent(data)
            console.log(result)
        }
        catch (e) {
            console.log(e)
        }

    }

    const handleCategoriesChange = useCallback((values) => {
        setCategories(values)
    }, [])

    const handleImagesChange = useCallback((images) => {
        setImages(images)
    }, [])

    return (
        <Modal>
            <form className="w-[500px] bg-white rounded-xl relative"
                onSubmit={handleSubmit(onSubmit)}
            >
                <CloseButton
                    onClick={onClose}
                />
                <h3 className="text-xl text-zinc-700 font-semibold text-center py-4">
                    Create Events
                </h3>

                <hr/>
                
                <div className="w-full h-[500px] overflow-y-auto">
                    <div className="py-2 px-6 text-zinc-500">
                        <label className="block text-sm font-medium text-zinc-400">Title</label>
                        <input className= "outline-none py-1 w-full border-b border-b-zinc-300"
                            {...register("name", {required:true})}
                        />
                        {errors.name && <span className="text-red-400 text-xs">This field is required</span>}
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Address</label>
                        <input className="outline-none py-1 w-full border-b border-b-zinc-300"
                            {...register("address", {required:true})}
                        />
                        {errors.address && <span className="text-red-400 text-xs">This field is required</span>}
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Contact</label>
                        <input className="outline-none py-1 w-full border-b border-b-zinc-300"
                            {...register("contact", {required:true})}
                        />
                        {errors.contact && <span className="text-red-400 text-xs">This field is required</span>}
                    </div> 
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Start</label>
                        <div className="flex gap-2 py-1 text-zinc-600">
                            <input className="outline-none py-1 w-full border-b border-b-zinc-300"
                                type="time" 
                                {...register("start_time", {required: true})}
                            />
                            <input className="outline-none py-1 w-full border-b border-b-zinc-300"
                                type="date" 
                                {...register("start_date", {required: true})}
                            />
                        </div>
                        {(errors.start_time || errors.start_date) && 
                        <span className="text-red-400 text-xs">This field is required</span>}
                        
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">End</label>
                        <div className="flex gap-2 py-1 text-zinc-600">
                            <input type="time" className="outline-none py-1 w-full border-b border-b-zinc-300"
                                {...register("end_time", {required: true})}
                            />
                            <input type="date" className="outline-none py-1 w-full border-b border-b-zinc-300"
                                {...register("end_date", {required: true})}
                            />
                        </div>
                        {(errors.end_time || errors.end_date) && 
                        <span className="text-red-400 text-xs">This field is required</span>}

                    </div>
                    <div className="py-2 px-6 text-zinc-500">
                        <label className="block text-sm font-medium text-zinc-400">Categories</label>
                        <div className="py-1">
                            <Selector multiple
                                className="rounded-none py-2 mt-1"
                                tableClassName="rounded-none top-12 z-50"
                                optionClassName="text-sm"
                                selectedTextClassName="p-0 text-sm bg-orange-200"
                                options={category_options}
                                onChange={handleCategoriesChange}
                            />
                        </div>
                    </div>
                    <div className="py-2 px-6">
                        <label className="block text-sm font-medium text-zinc-400">Descriptions</label>
                        <ReactTextareaAutosize
                            className="py-1 outline-none w-full border-b border-b-zinc-300 resize-none"
                            minRows={1}
                            {...register("description", {required: true})}
                        />
                        {errors.description && <span className="text-red-400 text-xs">This field is required</span>}
                    </div>
                    <div className="py-2 px-6 mb-10">
                        <label className="block text-sm font-medium text-zinc-400 mb-1">Banners</label>
                        <FileSelector
                            accept="image/"
                            multiple
                            onChange={handleImagesChange}
                        />
                    </div>
                </div>
                <div className="p-2">
                    <EButton
                        className="w-full py-3 bg-teal-600 text-white font-medium rounded-md"
                        type="submit"
                    >
                        Submit
                    </EButton>
                </div>
            </form>
        </Modal>
    )
}

export default EventForm