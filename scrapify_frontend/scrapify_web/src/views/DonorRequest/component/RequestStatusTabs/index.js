import { useState } from "react"
import EButton from "../../../../components/Button"

const SELECT_OPTIONS = [
    'Unconfirm', 
    'Confirmed', 
    'Finished'
]

const RequestStatusTabs = () => {

    const [ selectedIndex, setSelectedIndex ] = useState(0)

    const handlePress = (index) => {
        setSelectedIndex(index)
    }

    return (
        <ul className="mt-10 w-fit bg-white h-16 mx-auto border rounded-2xl flex gap-2
            overflow-hidden text-sm font-medium text-zinc-500 p-2">
            {SELECT_OPTIONS.map((item , index) => (
                <EButton className={`transition-all rounded-lg text-center px-5 w-[120px] ${index === selectedIndex && "bg-orange-100"}`}
                    onClick={() => {
                        handlePress(index)
                    }}
                >
                    {item}
                </EButton>
            ))}
        </ul>
    )
}

export default RequestStatusTabs