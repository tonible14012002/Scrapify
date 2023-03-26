

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import EButton from "../Button"
import { getDefaultNormalizer } from "@testing-library/react"

const CompactPara = ({children, className}) => {

    const [isReadMore, setIsReadMore] = useState(false)
    const handleClick = () => {
        setIsReadMore(!isReadMore)
    }
    const readLessPara = children.substring(0, 250).concat('...')
    const compactable = children.length > 250

    return (
        <>
            <div className="">
                {compactable &&
                <p className={`${isReadMore ? "hidden": ""} ${className}`}>
                    {readLessPara}
                </p>}
                <p className={`overflow-hidden transition-[all_1s] ${isReadMore?"h-auto":"h-0"} ${className}`}>
                    {children}
                </p>
            </div>

            {compactable && 
            <EButton className="text-gray-500 text-md mt-1 text-xs flex items-center justify-center gap-1"
                onClick={handleClick}                        
            >
                <span>
                    {isReadMore ? "Read less" : "Read more"}                    
                </span>
                <span className=" text-xs translate-y-[5%]">
                    {isReadMore?
                    <FontAwesomeIcon icon={faChevronUp} />
                    :<FontAwesomeIcon icon={faChevronDown} />}
                </span>

            </EButton>}
        </>
    )
}

export default CompactPara