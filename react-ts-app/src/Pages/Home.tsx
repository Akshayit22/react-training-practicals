import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();

  return (
    <div className="text-2xl flex flex-col justify-center items-center space-y-4 text-blue-700 hover:cursor-pointer">
        
        <h3 onClick={()=>navigate('/ItemManager')}> Dynamic Item Manager</h3>
        <h3 onClick={()=>navigate('/Task')}> Task 1</h3>
        <h3 onClick={()=>navigate('/Posts')}> Posts Task</h3>
        <h3 onClick={()=>navigate('/CouterUseRef')}> Counter {'(useRef, suspense)'}</h3>
    
    </div>
  )
}

export default Home