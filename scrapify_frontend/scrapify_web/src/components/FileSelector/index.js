import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { memo, useRef, useState } from "react"
import EButton from "../Button"
import ImagePreview from "./components/ImagePreview"
import { useCallback } from "react"
import { useEffect } from "react"

const FileSelector = ({
    onChange, 
    className,
    accept,
    multiple=false,
    ...props
}) => {

    const inputRef = useRef()
    const [ files, setFiles ] = useState(
        multiple ?
        []:
        {"file": undefined, "preview": undefined}
    )

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleFilesChange = (e) => {
        if (e.target.files.length) {
            if (multiple) {
                setFiles(prev => {
                    const files = [...e.target.files]

                    let nextId = prev.length ? 
                        prev[prev.length - 1].id + 1: 1

                    const newFiles = files.map((file, index) => ({
                        file,
                        "preview": URL.createObjectURL(file), 
                        id: index + nextId //generate new unique id for optimize rerender
                    }))
                    return [...prev, ...newFiles]
                })
                return
            }

            setFiles(prev => {
                const { preview } = prev
                if (preview) {
                    URL.revokeObjectURL(preview)
                }
                const file = e.target.files[0]
                return {
                    file,
                    "preview": URL.createObjectURL(file) 
                }
            })
        }
    }

    const handleUnPickFile = useCallback((id) => {
        if (multiple) {
            setFiles(prev => {
                const index = prev.findIndex(file => file.id === id)
                URL.revokeObjectURL(prev[index].preview)
                prev.splice(index, 1)
                return [...prev]
            }) 
            return
        }

        setFiles(prev => {
            const { preview } = prev
            if (preview) {
                URL.revokeObjectURL(preview)
            }
            return {
                "file": undefined, 
                "preview": undefined
            }
        })
    }, [multiple])

    const handleChange = () => {
        if (multiple) {
            const imageFiles = files.map(file => file.file)
            onChange(imageFiles)
            return
        }
        onChange(files.file)
    }
    useEffect(handleChange, [files, handleChange])

    console.log('=========== rerender ============')

    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <input hidden {...props}
                type="file"
                accept={accept}
                multiple={multiple}
                ref={inputRef}
                onChange={handleFilesChange}
            />
            <EButton className="w-[120px] h-[120px] border border-dashed border-zinc-400 rounded-md text-zinc-600"
                type="button"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faImage}/>
                <span> +</span>
            </EButton>
            {multiple ?
                files.map((file, index) => {
                    return (
                        <ImagePreview
                            key={file.id}
                            id={file.id}
                            src={file.preview}
                            onUnPick={handleUnPickFile}
                        />
                    )
                }) :
                files.file && 
                <ImagePreview
                    src={files.preview}
                    onUnPick={handleUnPickFile}
                />
            }
        </div>
    )
}

export default memo(FileSelector)
