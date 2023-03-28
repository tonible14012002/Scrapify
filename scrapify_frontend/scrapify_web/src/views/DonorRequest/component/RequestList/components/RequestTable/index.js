

const requests = [
    {
        name: "Old Baby T shirts", 
        donor: "Nam Anh"
    }
]

const RequestTable = () => {

    return (
        <div className="flex flex-col gap-2">
            <div className="w-full h-[40px] text-sm text-zinc-600 font-semibold grid grid-cols-[240px_240px_1fr_160px_100px_100px] grid-rows-1 leading-[40px] pl-4">
                <span>Product Name</span>
                <span>Donor</span>
                <span>Type</span>
                <span>Request date</span>
                <span>Weight</span>
                <span>Count</span>
            </div>
            {new Array(8).fill(null).map((item , index) => (
                <RequestItem
                    index={index}
                />
            ))}
        </div>
    )
}

const RequestItem = ({index}) => {
    return (
        <div className="even:bg-orange-50 w-full h-[60px] text-sm text-zinc-800 grid grid-cols-[240px_240px_1fr_160px_100px_100px] grid-rows-1 leading-[60px] pl-4 rounded-xl"
        >
                <div className="flex items-center">
                    <span className="w-[40px] h-[40px] rounded-full bg-zinc-200 block mr-2">
                        
                    </span>
                    <span>
                        Nam Anh
                    </span>
                </div>
                <span>White Tshirt for baby</span>
                <span>cloth, mental scrap, other</span>
                <span>Request date</span>
                <span>Weight</span>
                <span>Count</span>
        </div>
    )
}

export default RequestTable