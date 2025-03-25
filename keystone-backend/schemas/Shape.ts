import {list} from "@keystone-6/core";
import {allowAll} from "@keystone-6/core/access";
import {text} from "@keystone-6/core/fields";

export const Shape = list({
    access: allowAll,
    fields: {
        code: text(),
        name: text(),
        image: text()
    }
})
