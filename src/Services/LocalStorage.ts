const storage = window.localStorage;

function getStorageItemOrDefault(name: string, def: any, pre_parse_mutator?: CallableFunction, post_parse_mutator?: CallableFunction): typeof def {
    let item = JSON.parse(storage.getItem(name) as string)
    if (item === null) {
        item = def;
    }
    if (post_parse_mutator)
        return post_parse_mutator(item)
    return item;
}

function storeItem(name: string, value: any) {
    storage.setItem(name, JSON.stringify(value))
}

export {getStorageItemOrDefault, storeItem}