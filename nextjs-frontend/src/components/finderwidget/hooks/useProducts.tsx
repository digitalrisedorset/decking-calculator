import {gql, OperationVariables, QueryResult, useQuery} from '@apollo/client';
import {MagentoProductQueryResult} from "@/components/finderwidget/types/magento";
import {useActiveOption} from "@/state/OptionPreferenceState";
import {getOptionLayerFilter} from "@/components/finderwidget/lib/optionPreference";

const GET_MAGENTO_ATTRIBUTE_LAYER_QUERY = gql`
     query MagentoProducts($filter: ProductAttributeFilterInput!) {
      products(filter: $filter) {
        items {
          id
          sku
          name
          decking_length
          price_range {
            minimum_price {
              final_price {
                currency
                value
              }
            }
            maximum_price {
              final_price {
                currency
                value
              }
            }
          }
          small_image {
            url
            label
          }
        }
      }
    }
`;

export const useProducts = (categoryIds: number[]) => {
    const {optionState} = useActiveOption()

    const filter = getOptionLayerFilter(optionState)
    filter["category_id"] = { in: categoryIds }

    const productAttributesData: QueryResult<MagentoProductQueryResult | OperationVariables> = useQuery(GET_MAGENTO_ATTRIBUTE_LAYER_QUERY, {
        variables: {
            "filter": filter
        },
        context: {clientName: 'magento'}
    });

    return productAttributesData;
}
