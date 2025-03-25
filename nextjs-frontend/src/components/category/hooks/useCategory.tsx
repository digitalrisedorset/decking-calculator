import {useQuery} from "@apollo/client";
import gql from "graphql-tag";

const CATEGORY_QUERY = gql`
   query MagentoCategories($filter: CategoryFilterInput!) {
      categories(
        filters: $filter
      ) {
        items {
          id
          uid
          name
          description
          image
          children {
            id
            uid
          }
        }
      }
    }
`;

export const useCategory = (categoryName: string) => {
    const response = useQuery(CATEGORY_QUERY, {
        variables: {
            "filter": {
                url_key: {eq: categoryName}
            }
        }, context: {clientName: 'magento'}
    });

    return response
}
