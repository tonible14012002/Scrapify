import { useState, memo } from "react";
import { faEnvelope, faEnvelopeCircleCheck, faUser, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemDetail from "../ItemDetail";
import EButton from "../../../../components/Button";
import ItemCard from "../ItemCard";
import ItemCardSkeleton from "../../skeletons/ItemCardSkeleton";

const ItemList = ({items = [], isLoading, ...props}) => {

    return (
        <div className="w-full mt-16 grid grid-cols-1 
                        tablet:px-6 tablet:grid-cols-2 gap-5 tablet:gap-5 desktop:gap-8
                        desktop:px-0 desktop:grid-cols-3
                        ">
            {isLoading ?
            new Array(12).fill(null).map((item, index) => (
                <ItemCardSkeleton/>
            )) :
            items.map((item, index) => (
                <ItemCard
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    )
}


export default memo(ItemList);
