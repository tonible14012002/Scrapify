import RequestFilter from "./components/RequestFilter"
import RequestTable from "./components/RequestTable"



const RequestList = () => {
    return (
        <div className="mt-16 w-full bg-white rounded-3xl border p-6 flex flex-col gap-4">
            <RequestFilter/>
            <RequestTable/>
        </div>
    )
}


export default RequestList