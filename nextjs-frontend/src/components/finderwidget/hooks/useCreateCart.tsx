import { gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import {useDeckingCalculator} from "@/state/DeckingCalculatorState";

const CREATE_CART_MAGENTO = gql`
  mutation {
    createEmptyCart
  }
`;

export const useCreateCart = () => {
    const { deckingState, setCartId } = useDeckingCalculator();
    const [createCart] = useMutation(CREATE_CART_MAGENTO, {
        context: { clientName: 'magento' }
    });

    useEffect(() => {
        const existingCartId = localStorage.getItem('magento_cart_id');
        if (existingCartId) {
            setCartId(existingCartId);
            return;
        }

        const init = async () => {
            try {
                const { data } = await createCart();
                if (data?.createEmptyCart) {
                    setCartId(data.createEmptyCart);
                    localStorage.setItem('magento_cart_id', data.createEmptyCart);
                }
            } catch (err) {
                console.error('Failed to create cart:', err);
            }
        };

        init();
    }, [createCart]);

    return { cartId: deckingState.cartId };
};
