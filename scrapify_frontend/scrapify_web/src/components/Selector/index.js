import { useState, useRef, useEffect, memo } from "react"
import useOnClickedOutSide from "../../hooks/useOnClickedOutside"
import EButton from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"


const Selector = ({
    className,
    tableClassName, 
    optionClassName,
    textClassName,
    selectedTextClassName,
    onChange = (values) => {}, 
    multiple = false,
    placeHolder="options",
    options = [
        "All", 
        "Homanitarian Careers for Woman in ICRCs",
        "Homanitarian Careers for Woman in ICRCs",
        "Homanitarian in "
    ]
}) => {

    const [ showDropDown, setShowDropDown] = useState(false)
    const [ selectedId, setSelectedId ] = useState( multiple ? [] : 0)

    const selectorWrapperRef = useRef()

    const handleSelectorPress = () => {
        setShowDropDown(prev => !prev)
    }

    const handleClickOutSide = () => {
        setShowDropDown(false)
    }

    const handleOptionPress = (index) => {
        if (multiple) {
            if (selectedId.includes(index)) {
                setSelectedId(prev => prev.filter(id => id !== index))
                return 
            }
            setSelectedId(prev => [...prev, index])
            return
        }
        setShowDropDown(false)
        setSelectedId(index)
    }

    const handleChange = () => {
        onChange(selectedId)
    }

    useOnClickedOutSide(selectorWrapperRef, handleClickOutSide)
    useEffect(handleChange, [onChange, selectedId])

    return (
        <div className={`relative flex-1 h-full border rounded-xl ${className}`}
            ref={selectorWrapperRef}
        >
            <EButton className={`w-full h-full text-left text-zinc-600 px-2 flex gap-1`}
                type="button"
                onClick={handleSelectorPress}
            >
                {multiple ? 
                    !!selectedId.length ?
                    selectedId.map((item, index) => (
                    <span className={`bg-emerald-100 px-2 py-1 rounded-md w-fit whitespace-nowrap ${selectedTextClassName}`}>
                        {options[item]}
                    </span>
                    ))
                    :<span>{placeHolder}</span>
                : <span className={textClassName}>{options[selectedId]}</span>}
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
                    <EButton className={`
                            ${(multiple && selectedId.includes(index)) || selectedId === index ? "bg-zinc-100": "hover:bg-zinc-50"} 
                            text-left px-4 py-2 transition-colors ${optionClassName}`}

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

export default memo(Selector)