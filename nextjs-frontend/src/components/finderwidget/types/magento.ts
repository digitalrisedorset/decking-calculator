import {QueryResult} from "@apollo/client";

export interface MagentoProduct {
    sku: string,
    name: string
    decking_length: number
}

export interface MagentoProductQueryResult extends QueryResult {
    products: {
        items: MagentoProduct[]
    }
}
