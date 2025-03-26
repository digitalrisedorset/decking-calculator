import { gql, useMutation } from '@apollo/client';

const ADD_CONFIGURABLE_PRODUCTS_TO_CART = gql`
  mutation AddConfigurableProductsToCart($cartId: String!, $items: [ConfigurableProductCartItemInput!]!) {
    addConfigurableProductsToCart(
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
            }
            quantity
          }
        }
      }
    }
  }
`;

export const useAddConfigurableToCart = () => {
    const result = useMutation(ADD_CONFIGURABLE_PRODUCTS_TO_CART, {
        onCompleted: () => {
            console.log("Mutation ADD_CONFIGURABLE_PRODUCTS_TO_CART completed, refetching queries...");
        },
        context: { clientName: 'magento' },
    });

    return result;
};
