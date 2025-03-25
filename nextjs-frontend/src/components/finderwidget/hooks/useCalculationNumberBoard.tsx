import {useQuery} from "@apollo/client";
import gql from "graphql-tag";
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";

const DECKING_BOARD_QTY_QUERY = gql`
    query CalculateDeckingBoardQuantity($height: String!, $width: String!, $shape: String!, $boardLength: String!, $joistLength: String!) {
      calculateDeckingBoardQuantity(height: $height, width: $width, shape: $shape, boardLength: $boardLength, joistLength: $joistLength) {
        deckingBoards
        joists
      }
    }
`;

export const useNumberDeckingBoard = () => {
    const {deckingState} = useDeckingCalculator()

    const { data } = useQuery(DECKING_BOARD_QTY_QUERY, {
        variables: {
            height: deckingState.height,
            width: deckingState.width,
            shape: deckingState.shape,
            boardLength: "3.6",
            joistLength: "2"
        }
    });

    return data?.calculateDeckingBoardQuantity
}
