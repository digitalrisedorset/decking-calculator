import {useQuery} from "@apollo/client";
import gql from "graphql-tag";

export const SHAPES_QUERY = gql`
    query Shapes {
      shapes {
        code
        name
        image
      }
    }
`;

export const useShapes = () => {
    const shapesData = useQuery(SHAPES_QUERY, {
        variables: {},
        fetchPolicy: "cache-and-network"
    });

    return shapesData
}
