import Link from "next/link";
import Image from "next/image";
import React from "react";
import {MagentoCategory} from "@/components/category/types/magentoCategory";

interface CategoryProps {
    category: MagentoCategory
}

export const Category: React.FC<CategoryProps> = ({category}: CategoryProps) => {
    const url = category.name.toLowerCase()

    return (
        <div className="category">
            <div className="content">
                <h2>{category.name}</h2>
                <span className="description" dangerouslySetInnerHTML={{__html: category.description}}/>
                <Link href={url}>Visit {category.name}</Link>
            </div>
            <div className="illustrations">
                {category.image !== undefined &&
                    <Image className="thumbnail" src={category.image} width="200" height="150" alt=""/>}
            </div>
        </div>
    )
}
