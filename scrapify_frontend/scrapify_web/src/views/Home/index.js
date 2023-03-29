import { faPaperPlane, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EButton from "../../components/Button";
import { useAuthContext } from "../../context/authContext";
import { getDonorPosts } from "../../services/itemServices";
import ItemList from "./components/ItemList";



const Home = () => {
    
    const [ donorItems, setDonorItems ] = useState([])

    const handleRequestAllPress = async () => {
        try {
            const result = await getDonorPosts()
            setDonorItems(result.data)
        }
        catch (e) {

        }
    }


    return (
        <div className="w-full mt-16">
            <div className="w-full">
                <h3 className="text-center text-3xl desktop:text-4xl font-semibold">
                    Welcome to <span className="text-teal-600">Scrapify</span>
                </h3>
                <h3 className="text-center text-lg desktop:text-xl font-light mt-2 text-zinc-600">
                    Find donors for your organization
                </h3>
            </div>
            <div className="flex justify-center mt-10">
                <EButton className="
                    bg-teal-600 hover:bg-teal-700 transition-all min-w-[110px] 
                    desktop:py-4 desktop:px-8 text-white font-medium rounded-md
                    desktop:min-w-[110px] py-3 px-6

                    "
                    onClick={handleRequestAllPress}
                >
                    <span>
                    Request all
                    </span>
                    <span className="ml-4">
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </span>
                </EButton>
            </div>

            <ItemList
                items={donorItems}
            />

        </div>
    )
}

export default Home;