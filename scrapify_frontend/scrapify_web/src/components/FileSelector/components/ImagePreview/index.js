import { memo } from "react"
import CloseButton from "../../../CloseButton"

const ImagePreview = ({
    onUnPick = (id) => {},
    src="",
    id=0
}) => {
    console.log('rerender preview', id)

    const handleCloseButtonPress = () => {
        onUnPick(id)
    }

    return (
        <div className="w-[120px] h-[120px] rounded-md border border-zinc-400 relative"
        >
            <CloseButton
                size="small"
                onClick={handleCloseButtonPress}
            />
            <img alt=""
                className="w-full h-full object-cover"
                src={src} 
            />
        </div>
    )
}
export default memo(ImagePreview)