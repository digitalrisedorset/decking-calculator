import { gql, useMutation } from '@apollo/client';

const ADD_SIMPLE_PRODUCTS_TO_CART = gql`
  mutation AddSimpleProductsToCart($cartId: String!, $items: [SimpleProductCartItemInput!]!) {
    addSimpleProductsToCart(
      input: {
        cart_id: $cartId
        cart_items: $items
      }
    ) {
      cart {
        itemsV2 {
          items {
            id
            product {
              sku
              stock_status
            }
            quantity
          }
        }
      }
    }
  }
`;

export const useAddSimpleToCart = () => {
    const result = useMutation(ADD_SIMPLE_PRODUCTS_TO_CART, {
        onCompleted: () => {
            console.log("Mutation ADD_TO_CART_MUTATION completed, refetching queries...");
        },
        context: { clientName: 'magento' },
    });

    return result;
};
