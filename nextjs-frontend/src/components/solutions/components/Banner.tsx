import Image from "next/image";
import React from "react";

export const Banner: React.FC = () => {
    return (
        <Image className="logo" src={`/images/Reppel-Zwijndrecht-59-2209x2600.jpg`} width="1216" height="550" alt=""/>
    )
}
