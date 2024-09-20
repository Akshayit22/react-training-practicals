import { createContext, useReducer } from 'react'

export const AppContext = createContext<any>("AppContext");


interface item{
    id:number,
    name:string,
    desc:string,
}
  
interface Action{
    type:'AddItem'|'RemoveItem'|'SearchItems'|'setItems';
    id?:number,
    name?:string,
    desc?:string,
    searchKey?:string,
    prevItems?:item[],
}

function itemsReducer(items: item[], action: Action) {
    // console.log(action);
    switch (action.type) {
        case 'AddItem': {
            return [...items, {
                id: items.length,
                name: action.name,
                desc: action.desc,
                done: false
            }];
        }

        case 'RemoveItem': {
            return items.filter(item => item.id !== action.id);
        }

        case 'SearchItems':{
            return items.filter((item)=>{
                return Object.values(item.name+item.desc).join('').toLowerCase().includes(action.searchKey.toLowerCase());
            })
        }

        case 'setItems':{
            return action.prevItems;
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialItems:item[] = [
    { id: 0, name: 'Mobile', desc: 'digital smart phone' },
    { id: 1, name: 'Head phone', desc: 'smart airbuds' },
    { id: 2, name: 'Laptop', desc: 'Apple mac book' }
];


function AppContextProvider({children}:any){

    const [items, dispatch] = useReducer<any>(itemsReducer, initialItems);

    
    const value = {items,dispatch};

    console.log(items);

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export default AppContextProvider;