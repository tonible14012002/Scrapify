import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EButton from "../../components/Button";
import { getDonorPosts } from "../../services/itemServices";
import ItemList from "./components/ItemList";



const Home = () => {


    const handleRequestAllPress = async () => {
        try {
            const result = await getDonorPosts()
            console.log(result)
        }
        catch (e) {

        }
    }


    return (
        <div className="w-full mt-20 h-14">
            <div className="w-full">
                <h3 className="text-center text-3xl desktop:text-4xl font-semibold">
                    WELCOME TO <span className="text-teal-600">SCRAPIFY</span>
                </h3>
                <h3 className="text-center text-xl desktop:text-2xl font-light mt-2 text-zinc-600">
                    Find donors for your organization
                </h3>
            </div>
            <div className="flex justify-center mt-10">
                <EButton className="bg-teal-600 hover:bg-teal-700 transition-all min-w-[110px] py-4 px-8 text-white font-medium rounded-md"
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
            <ItemList/>
        </div>
    )
}

export default Home;