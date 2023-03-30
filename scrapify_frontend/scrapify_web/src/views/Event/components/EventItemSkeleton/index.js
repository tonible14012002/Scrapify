



const EventItemSkeleton = () => {
    return (
        <div className="w-full rounded-3xl p-4 tablet:p-6 relative text-left animate-pulse "
        >
            <div className="text-left w-full"
            >
                <div className="w-full p-[25%] bg-zinc-300 shadow-sm rounded-xl"> 
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold bg-zinc-300 text-lg text-transparent w-fit">
                        Temp temp  temptemp Temp
                    </h3>
                    <h3 className="text-sm font-normal text-transparent bg-zinc-300 mt-2 w-fit"
                    >
                        Temp temp T
                    </h3>
                    <p className="text-sm text-transparent bg-zinc-200 font-normal mt-2">
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                        Temp temp temp T
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventItemSkeleton