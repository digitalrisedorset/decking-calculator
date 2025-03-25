import Image from "next/image";
import React from "react";
import {useCategory} from "@/components/category/hooks/useCategory";
import {CategoryLandingStyle} from "@/components/category/styles/CategoryStyles";
import {WomenClothesFinder} from "@/components/finderwidget/components/women/WomenClothesFinder";
import {categoryLayereIds} from "@/components/finderwidget/lib/category";
import {MenClothesFinder} from "@/components/finderwidget/components/men/MenClothesFinder";
import {DeckingCalculator} from "@/components/finderwidget/components/decking/DeckingCalculator";
import {DeckingCalculatorProvider} from "@/state/DeckingCalculatorState";

interface CategoryLandingProps {
    categoryName: string
}

export const CategoryLanding: React.FC<CategoryLandingProps> = ({categoryName}: CategoryLandingProps) => {
    const {data, loading} = useCategory(categoryName);

    if (loading) return <>Loading</>

    const category = data.categories.items[0]

    return (
        <CategoryLandingStyle>
            <h2>{category.name}</h2>
            <div className="section">
                <div className="content">
                    <span className="description" dangerouslySetInnerHTML={{__html: category.description}}/>
                </div>
                <div className="illustrations">
                    {category.image !== undefined &&
                        <Image className="thumbnail" src={category.image} width="200" height="150" alt=""/>}
                </div>
            </div>
            {categoryName === "women" && <WomenClothesFinder
                categoryIds={categoryLayereIds(category)}
            />}
            {categoryName === "men" && <MenClothesFinder
                categoryIds={categoryLayereIds(category)}
            />}
            {categoryName === "decking" &&
                <DeckingCalculatorProvider>
                    <DeckingCalculator />
                </DeckingCalculatorProvider>
            }
        </CategoryLandingStyle>
    )
}
