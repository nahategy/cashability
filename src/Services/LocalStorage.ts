const storage = window.localStorage;

function getStorageItemOrDefault(name: string, def: any, pre_parse_mutator?: CallableFunction, post_parse_mutator?: CallableFunction): typeof def {
    let item = def;
    try {
        item = JSON.parse(storage.getItem(name) as string)
        if (!item)
            item = def
    } catch (e) {
        item = def;
        console.error(e);
    }

    if (post_parse_mutator)
        return post_parse_mutator(item)
    return item;
}

function storeItem(name: string, value: any) {
    try {
        storage.setItem(name, JSON.stringify(value))
    } catch (e) {
        console.error(e);
    }
}

export {getStorageItemOrDefault, storeItem}