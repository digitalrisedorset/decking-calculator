export const categoryLayereIds = (category: any) => {
    const ids = category.children.map((child: any) => {
        return child.id
    })

    ids.push(category.id)

    return ids
}
