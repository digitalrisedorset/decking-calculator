import {gql, OperationVariables, QueryResult, useQuery} from '@apollo/client';
import {MagentoProductQueryResult} from "@/components/finderwidget/types/magento";
import {useActiveOption} from "@/state/OptionPreferenceState";
import {getOptionLayerFilter} from "@/components/finderwidget/lib/optionPreference";

const GET_MAGENTO_ATTRIBUTE_LAYER_QUERY = gql`
     query MagentoProducts($filter: ProductAttributeFilterInput!) {
      products(filter: $filter) {
        total_count
        aggregations{
          attribute_code
          label
          count
          options{
            count
            label
            value
          }
        }
      }
    }
`;

export const useProductAttributeLayer = (categoryIds: number[]) => {
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
