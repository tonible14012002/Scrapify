import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"


const Modal = ({children, onClose ,...props}) => {

    const overlay = useRef()

    const stopBodyScrolling = () => {
        document.body.classList.add('no-scroll')
        return () => {document.body.classList.remove('no-scroll')}
    }

    const handleCloseOnClickOutside = (e) => {
        if (e.target === overlay.current && onClose) {
            // click outside children
            onClose()
        }
    }

    useEffect(stopBodyScrolling, [])

    return ReactDOM.createPortal(<>
        <div ref={overlay} className="fixed top-0 left-0 w-full h-[100vh] bg-zinc-900 bg-opacity-60 z-50 flex justify-center items-center" {...props}
            onClick={handleCloseOnClickOutside}
        >
            {children}
        </div>
    </>, document.querySelector('body'))
}

export default Modal