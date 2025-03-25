import {gql, OperationVariables, QueryResult, useQuery} from '@apollo/client';
import {RemoteMagentoAttributeData} from "../../../types/magento";

const GET_MAGENTO_ATTRIBUTE_LIST_QUERY = gql`
    {
      attributesList(entityType: CATALOG_PRODUCT, filters: {is_filterable: true}) {
        errors {
          message
          type
        }
        items {
          code
          frontend_input
          label
        }
      }
    }
`;

export const useProductAttributes = () => {
    const productAttributesData: QueryResult<RemoteMagentoAttributeData | OperationVariables> = useQuery(GET_MAGENTO_ATTRIBUTE_LIST_QUERY, {
        variables: {}, context: {clientName: 'magento'}
    });

    return productAttributesData;
}
