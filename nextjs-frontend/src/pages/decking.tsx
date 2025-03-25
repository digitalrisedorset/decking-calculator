import Head from "next/head";
import {MainCategoryStyles} from "@/components/category/styles/CategoryStyles";
import {CategoryLanding} from "@/components/category/components/CategoryLanding";

export default function Women() {
    return (
        <>
            <Head>
                <title>Decking</title>
                <meta name="description" content="Decking" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainCategoryStyles>
                <CategoryLanding categoryName={"decking"}/>
            </MainCategoryStyles>
        </>
    );
}
