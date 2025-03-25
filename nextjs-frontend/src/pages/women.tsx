import Head from "next/head";
import {MainCategoryStyles} from "@/components/category/styles/CategoryStyles";
import {CategoryLanding} from "@/components/category/components/CategoryLanding";

export default function Women() {
    return (
        <>
            <Head>
                <title>Women</title>
                <meta name="description" content="Women" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainCategoryStyles>
                <CategoryLanding categoryName={"women"}/>
            </MainCategoryStyles>
        </>
    );
}
