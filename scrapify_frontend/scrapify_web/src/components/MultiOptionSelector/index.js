import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import EButton from "../Button"
import useOnClickedOutSide from "../../hooks/useOnClickedOutside"

const MultiOptionSelector = ({
    className,
    textClassName,
    tableClassName, 
    optionClassName,
    onChange, 
    options = [
        "All", 
        "Homanitarian Careers for Woman in ICRCs",
        "Homanitarian Careers for Woman in ICRCs",
        "Homanitarian in "
    ]
}) => {

    const [ showDropDown, setShowDropDown ] = useState(false)
    const [selectedIds, setSelectedIds ] = useState([])
    const selectorWrapperRef = useRef()

    const handleSelectorPress = () => {
        setShowDropDown(prev => !prev)
    }

    const handleOptionPress = (index) => {
        if (selectedIds.includes(index)) {
            setSelectedIds(prev => prev.filter(id => id !== index))
            return
        }
        setSelectedIds(prev => [...prev, index])
    }

    const handleClickOutSide = () => {
        setShowDropDown(false)
    }

    useOnClickedOutSide(selectorWrapperRef, handleClickOutSide)


    return (
        <div className={`relative flex-1 h-full border rounded-xl ${className}`}
            ref={selectorWrapperRef}
        >
            <EButton className={`w-full h-full text-left text-zinc-600 px-4`}
                type="button"
                onClick={handleSelectorPress}
            >
                {!!selectedIds.length ?
                selectedIds.map((item, index) => (
                <span className="bg-emerald-100 px-2 py-1 rounded-md w-fit whitespace-nowrap">
                    {options[item]}
                </span>
                ))
                :<span>Type filter</span>}

            </EButton>
            <span className="absolute right-5 text-xs top-1/2 -translate-y-1/2 z-100 text-zinc-500"
            >
                <FontAwesomeIcon icon={showDropDown ? faChevronUp : faChevronDown}/>
            </span>
            
            {showDropDown && 
            <ul className={`absolute top-12 border bg-white shadow-sm w-full rounded-xl
                 flex flex-col max-h-[400px] overflow-auto ${tableClassName}`}
            >
                {options.map((item, index) => (
                    <EButton className={`${selectedIds.includes(index) && "bg-zinc-100"} 
                            text-left px-4 py-1 text-zinc-600 transition-colors last:rounded-b-xl first:rounded-t-xl
                             ${optionClassName}`}
                        type="button"
                        key={index}
                        onClick={() => handleOptionPress(index)}
                    >
                        {item}
                    </EButton>
                ))}
            </ul>}
        </div>
    )
}

export default MultiOptionSelector