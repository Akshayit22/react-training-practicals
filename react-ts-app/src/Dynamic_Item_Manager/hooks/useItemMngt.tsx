import { useReducer } from "react";


interface item{
    id:number,
    name:string,
    desc:string,
  }
  
interface Action{
type:'AddItem'|'RemoveItem';
id?:number,
name?:string,
desc?:string,
}

function itemsReducer(items: item[], action: Action) {
switch (action.type) {
    case 'AddItem': {
    return [...items, {
        id: action.id,
        name: action.name,
        desc: action.desc,
        done: false
    }];
    }

    case 'RemoveItem': {
    return items.filter(item => item.id !== action.id);
    }

    default: {
    throw Error('Unknown action: ' + action.type);
    }
}
}

const initialItems:item[] = [
{ id: 0, name: 'Mobile', desc: 'digital smart phone' },
{ id: 0, name: 'Head phone', desc: 'smart airbuds' },
{ id: 0, name: 'Laptop', desc: 'Apple mac book' }
];
  
  
function useItemMngt() {

    const [items, dispatch] = useReducer(itemsReducer, initialItems);

    

    return {items};
}

export default useItemMngt
