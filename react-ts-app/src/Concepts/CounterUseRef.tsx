import { useEffect, useMemo, useRef, useState } from 'react'

function CounterUseRef() {

    const [count,setCount] = useState(0);
    const countRef = useRef(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleIncreament= () =>{
        setCount(count + 1);
        countRef.current++;

        console.log("state :",count);
        console.log("Ref : ",countRef.current);
    }

    const heavyCalculation = () => {return 200};

    const memoResult = useMemo(()=>{
        heavyCalculation();
    },[]);
    console.log(memoResult);

    useEffect(()=>{
        console.log(inputRef.current?.value);
        inputRef.current?.focus();
    },[count])

    return (
        <div className='flex flex-col justify-center items-center'>
            <p>Count : {count}</p>
            <button onClick={handleIncreament} className='p-2 bg-slate-500'>Increament</button>

            <input ref={inputRef} type="text" placeholder='Type something...'/>

            <p>{null}</p>

        </div>
    )
}

export default CounterUseRef