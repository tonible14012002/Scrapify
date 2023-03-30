import {faComment, faEnvelope, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EButton from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import CompactPara from "../../../../components/ReadMore";
import useIsMounted from "../../../../hooks/useIsMounted";
import { sendRequestMail } from "../../../../services/itemServices";

const ItemDetail = ({data, onClose, ...props}) => {
    const [ isSent, setIsSent ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const { 
        name, weight, count, 
        description, donor_profile, 
        donor_username, 
        created_at
      } = data

    const isMounted = useIsMounted()

    const handleSendRequest = async () => {
        setLoading(true)
        try {
            const result = await sendRequestMail()
            if (isMounted()) {
                setIsSent(true)
            }
        }
        catch (e) {
            console.log(e)
        }
        if (isMounted()) {
            setLoading(false)
        }
    }

    return (
        <Modal onClose={onClose}>
            <div className="flex items-center">
                <div className="tablet:h-[400px] w-[400px] bg-zinc-200 mr-4 overflow-hidden rounded-md">
                    <img alt="" href=""/>
                </div>
                <div className="tablet:w-[400px] bg-white rounded-lg relative">
                    <h3 className="text-xl px-4 py-2 text-zinc-800 font-semibold">{name}</h3>
                    <div className="px-4 h-full min-h-[400px] max-h-[500px] overflow-y-auto">
                        <div className="">
                            <label className="font-medium text-xs text-purple-600">Photos</label>
                            <ul className="p-0 mt-1 flex gap-2 flex-wrap">
                                <div className="w-[100px] h-[100px] bg-zinc-200">
                                    <image href=""/>
                                </div>
                                    <div className="w-[100px] h-[100px] bg-zinc-200">
                                    <image href=""/>
                                </div>
                                    <div className="w-[100px] h-[100px] bg-zinc-200">
                                    <image href=""/>
                                </div>
                            </ul>
                        </div>
                        <div className="mt-2">
                            <label className="font-medium text-xs text-purple-600">Descriptions</label>
                            <CompactPara className="text-zinc-700 text-sm mt-1">
                                {description}
                            </CompactPara>
                        </div>
                        <div className="mt-2 mb-2">
                            <label className="text-xs text-purple-600 font-medium">
                                Donor
                            </label>
                            <div className=" flex items-center">
                                <div className="flex gap-2 mt-1 items-center">
                                    <div className="w-[40px] h-[40px] rounded-full bg-zinc-300">
                                        <image href=""/>
                                    </div>
                                    <span className="text-sm font-semibold text-zinc-600">{donor_username}</span>
                                </div>
                                <EButton className="ml-4 text-teal-600" 
                                    onClick={() => alert('feature')}
                                >
                                    <FontAwesomeIcon icon={faComment}/>
                                </EButton>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                    <EButton
                            disabled={isSent}
                            onClick={handleSendRequest}
                            className="w-full bg-teal-500 text-white p-3 font-medium text-sm rounded-xl">
                            {isSent ?
                            <>
                                <span>
                                    Sent
                                </span>
                                <div className="ml-2 inline-block">
                                    <FontAwesomeIcon icon={faEnvelopeCircleCheck}/>
                                </div>
                            </>
                            :<>
                                <span>
                                    I love it, send me
                                </span>
                                <div className="ml-2 inline-block">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                            </>}
                        </EButton>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ItemDetail;
