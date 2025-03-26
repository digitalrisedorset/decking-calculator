import {gql, OperationVariables, QueryResult, useQuery} from '@apollo/client';
import {MagentoProductQueryResult} from "@/components/finderwidget/types/magento";
import {useActiveOption} from "@/state/OptionPreferenceState";
import {getOptionLayerFilter} from "@/components/finderwidget/lib/optionPreference";

const GET_MAGENTO_PRODUCT_COLOUR_QUERY = gql`
     query MagentoProduct($filter: ProductAttributeFilterInput!) {
      products(filter: $filter) {
        items {
          ... on ConfigurableProduct {
            configurable_options {
              attribute_code
              values {
                uid
                value_index
                label
              }
             }
             variants {
              product {
                sku
              }
              attributes {
                code
                value_index
              }
            }
          }
         }
       }
    }
`;

export const useProduct = (sku: string) => {
    const productsData: QueryResult<MagentoProductQueryResult | OperationVariables> = useQuery(GET_MAGENTO_PRODUCT_COLOUR_QUERY, {
        variables: {
            "filter": {
                sku: { eq: sku }
            }
        },
        context: {clientName: 'magento'}
    });

    return productsData
}
