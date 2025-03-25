import {useQuery} from "@apollo/client";
import gql from "graphql-tag";

const TOP_CATEGORY_QUERY = gql`
      {
      categories(
        filters: {
          parent_id: {in: ["2"]}
        }
      ) {
        items {
          uid
          name
        }
      }
    }
`;

export const useTopCategoryNames = () => {
    const { data } = useQuery(TOP_CATEGORY_QUERY, {
        variables: {}, context: {clientName: 'magento'}
    });

    return data?.categories
}
