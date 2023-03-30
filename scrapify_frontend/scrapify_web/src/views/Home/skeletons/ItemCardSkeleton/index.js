

const ItemCardSkeleton = () => {
    return (
        <div className="w-full flex flex-col relative p-4 bg-transparent rounded-3xl animate-pulse"
        >
            <div className="bg-zinc-300 rounded-xl w-full p-[25%] tablet:p-[33%] desktop:p-[25%]">
            </div>
            <div className="px-4 tablet:px-2 py-2">
                <div className="flex justify-between items-baseline">
                    <div 
                        className="font-semibold text-left text-transparent bg-zinc-300 mb-1"
                    >
                        temp temp temp
                    </div>
                    <div className="text-purple-600 flex flex-row text-xs font-semibold">

                    </div>
                </div>
                <div className="flex flex-row items-center gap-2 text-sm mb-2">
                    <div className=" w-[30px] h-[30px] rounded-full bg-zinc-300"/>
                    <span className="text-transparent bg-zinc-300">asdiawd</span>
                </div>
                <div className="flex flex-wrap gap-2 bg-zinc-300">
                </div>
            </div>
        </div>
    )
}

export default ItemCardSkeleton