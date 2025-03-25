import React from "react";

import {useShapes} from "@/components/finderwidget/graphql/useShapes";
import {KeystoneShape} from "@/components/finderwidget/types/keystone";
import {Shape} from "@/components/finderwidget/components/decking/Shape/Shape";
import {Loading} from "@/components/global/components/Loading";
import {StepFinder} from "@/components/finderwidget/styles/FinderStyles";

export const ShapeFinder: React.FC = () => {
    const { data, loading } = useShapes()

    if (loading) return <Loading />

    return (
        <StepFinder>
            {data?.shapes.length > 0 && data?.shapes.map(
                (shape: KeystoneShape) => <Shape key={shape.code} shape={shape}/>
            )}
            {data?.shapes.length === 0 && <>No shapes found</>}
        </StepFinder>
    )
}
