import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import EButton from "../Button"

const CloseButton = (props) => {

    return (
        <EButton className="absolute rounded-full w-[30px] h-[30px] right-0 top-0 translate-x-1/2 -translate-y-1/2 shadow-md bg-white"
            {...props}
        >
            <FontAwesomeIcon icon={faClose}/>
        </EButton>
    )
}

export default CloseButton