import Head from "next/head";
import {Banner} from "@/components/solutions/components/Banner";
import {TopCategoryList} from "@/components/category/components/TopCategoryList";
import {MainCategoryStyles} from "@/components/category/styles/CategoryStyles";

export default function OurSolutions() {
    return (
        <>
            <Head>
                <title>Solutions</title>
                <meta name="description" content="Solutions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainCategoryStyles>
                <Banner />
                <TopCategoryList />
            </MainCategoryStyles>
        </>
    );
}
