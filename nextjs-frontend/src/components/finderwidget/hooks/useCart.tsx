import { gql, useQuery } from "@apollo/client";
import { useDeckingCalculator } from "@/state/DeckingCalculatorState";

const GET_CART_QUERY = gql`
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        id
        quantity
        product {
          name
          sku
          image {
            url
            label
          }
          price_range {
            maximum_price {
              final_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  }
`;

export const useCart = () => {
    const { deckingState } = useDeckingCalculator();

    const { data, loading, error, refetch } = useQuery(GET_CART_QUERY, {
        variables: { cartId: deckingState.cartId },
        skip: !deckingState.cartId,
        context: { clientName: "magento" },
        fetchPolicy: "network-only", // or "cache-and-network"
    });

    return {
        cart: data?.cart,
        loading,
        error,
        refetch
    };
};
