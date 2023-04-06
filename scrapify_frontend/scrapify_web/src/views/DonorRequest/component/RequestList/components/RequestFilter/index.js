import { faChevronDown, faChevronUp, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useRef } from "react"
import useOnClickedOutSide from "../../../../../../hooks/useOnClickedOutside"
import EButton from "../../../../../../components/Button"


const RequestFilter = () => {
    return (
        <div className="flex w-full items-center gap-4 h-10">
            <SearchBar />
            <EventSelector />
            <MatchFilter />
        </div>
    )
}

const SearchBar = () => {

    return (
        <div className="flex h-full">
            <input className="px-4 rounded-xl outline-none border shadow-sm flex-1"
            />
            <EButton className="bg-orange-300 hover:bg-orange-400 transition-colors w-10 h-10 rounded-xl ml-2 text-white">
                <FontAwesomeIcon icon={faSearch}/>
            </EButton>
        </div>
    )
}

const EventSelector = ({
    onChange, 
    options = [
        "All", 
        "Homanitarian Careers for Woman in ICRCs",
        "Homanitarian Careers for Woman in ICRCs",
        "Homanitarian in "
    ]
}) => {

    const [ showDropDown, setShowDropDown] = useState(false)
    const [ selectedId, setSelectedId ] = useState(0)

    const selectorWrapperRef = useRef()

    const handleSelectorPress = () => {
        setShowDropDown(prev => !prev)
    }

    const handleClickOutSide = () => {
        setShowDropDown(false)
    }

    const handleOptionPress = (value) => {
        setShowDropDown(false)
        setSelectedId(value)
    }

    useOnClickedOutSide(selectorWrapperRef, handleClickOutSide)

    return (
        <div className="relative flex-1 h-full rounded-xl border"
            ref={selectorWrapperRef}
        >
            <EButton className="w-full h-full text-left px-4 text-zinc-600"
                onClick={handleSelectorPress}
            >
                {options[selectedId]}
            </EButton>
            <span className="absolute right-5 text-xs top-1/2 -translate-y-1/2 z-100 text-zinc-500"
            >
                <FontAwesomeIcon icon={showDropDown ? faChevronUp : faChevronDown}/>
            </span>
            
            {showDropDown && 
            <ul className="absolute top-12 border bg-white shadow-sm w-full rounded-xl
                 flex flex-col max-h-[400px] overflow-auto"
            >
                {options.map((item, index) => (
                    <EButton className={`${selectedId === index ? "bg-zinc-100": "hover:bg-zinc-50"} text-left px-4 py-2 transition-colors`}
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

const MatchFilter = () => {

    const [ showDropDown, setShowDropDown ] = useState(false)
    const [selectedIds, setSelectedIds ] = useState([])
    const selectorWrapperRef = useRef()

    const options = [
        "cloth", 
        "mental scrap", 
        "paper", 
        "plastic", 
        "other", 
    ]

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
        <div className="bg-white border h-full rounded-xl relative"
            ref={selectorWrapperRef}
        >
            <EButton className="flex items-center w-[240px] mr-8 h-full text-xs pl-4 gap-1 overflow-hidden flex-nowrap"
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
            <span className="block absolute right-3 text-xs top-1/2 -translate-y-1/2 z-50 text-zinc-500 pointer-events-none">
                <FontAwesomeIcon icon={faFilter}/> 
            </span>
            {showDropDown &&
            <ul className="absolute w-full flex flex-col bg-white border rounded-xl top-12 text-sm">
                {options.map((item, index) => (
                    <EButton className={`${selectedIds.includes(index) && "bg-zinc-100"}
                            text-left px-4 py-1 text-zinc-600 transition-colors last:rounded-b-xl first:rounded-t-xl`}
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

export default RequestFilter