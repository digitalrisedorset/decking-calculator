import {OptionPreference} from "@/components/finderwidget/lib/optionPreference";
import {DeckingStep} from "@/components/finderwidget/lib/decking";

interface layerAttributeSetup {
    layerAttributes: OptionPreference[]
}

interface deckingSetup {
    steps: DeckingStep[]
}

export type configInfo = {
    magento: {
        graphqlEndpoint: string,
        headers: {
            'apollo-require-preflight': string
        }
    },
    keystone: {
        graphqlEndpoint: string,
        headers: {
            'apollo-require-preflight': string
        }
    },
    decking: deckingSetup
    category: {
        women: layerAttributeSetup,
        men: layerAttributeSetup
    }
}

export const config: configInfo = {
    magento: {
        graphqlEndpoint: (process.env.NEXT_PUBLIC_MAGENTO_HOST === undefined) ? 'http://magentodemo247.co.uk/graphql' : `${process.env.NEXT_PUBLIC_MAGENTO_HOST}/graphql`,
        headers: {
            'apollo-require-preflight': (process.env.NEXT_PUBLIC_REQUIRE_PREFLIGHT)? 'true': 'false'
        }
    },
    keystone: {
        graphqlEndpoint: (process.env.NEXT_PUBLIC_KEYSTONE_HOST === undefined) ? 'http://localhost:3000/api/graphql' : `${process.env.NEXT_PUBLIC_KEYSTONE_HOST}/api/graphql`,
        headers: {
            'apollo-require-preflight': (process.env.NEXT_PUBLIC_REQUIRE_PREFLIGHT)? 'true': 'false'
        }
    },
    decking: {
        steps: [
            'shape',
            'dimension',
            'decking_type',
            'colour',
            'material',
            'quotation',
            'expired'
        ]
    },
    category: {
        women: {
            layerAttributes: [
                'climate',
                'style_general',
                'price'
            ]
        },
        men: {
            layerAttributes: [
                'climate',
                'material',
                'size',
                'price'
            ]
        }
    }
}
