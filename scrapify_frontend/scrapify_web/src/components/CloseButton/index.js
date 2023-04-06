import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import EButton from "../Button"

const CloseButton = ({size= "base", ...props}) => {

    const sizeStyle = size === "large" ? "w-[40px] h[40px] text-sm" : 
                        size === "small" ? "w-[20px] h-[20px] text-xs" :
                        "w-[30px] h-[30px]"
                        

    return (
        <EButton className={`${sizeStyle} absolute rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 shadow-md bg-white`}
            type="button"
            {...props}
        >
            <FontAwesomeIcon icon={faClose}/>
        </EButton>
    )
}

export default CloseButton