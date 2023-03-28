import RequestList from "./component/RequestList";
import RequestStatusTabs from "./component/RequestStatusTabs";

const DonorRequest = () => {
    return (
        <div className="w-full mt-16">
            <div className="w-full">
                <h3 className="text-center text-3xl desktop:text-4xl font-semibold">
                    Your Donors<span className="text-teal-600"> Management</span>
                </h3>
                <h3 className="text-center text-lg desktop:text-xl font-light mt-2 text-zinc-600">
                    Find donors for your organization
                </h3>
            </div>
            <RequestStatusTabs/>
            <RequestList
                
            />
        </div>
    )
}

export default DonorRequest;
