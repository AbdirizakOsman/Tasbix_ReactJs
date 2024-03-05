
import React, {useState} from 'react'
function Tasbiix() {
    const [count, setcount] = useState(20);
    const handleIncrement = () => (
        setcount(count + 1)
    )

    const handleDecrement = () => {
        // setcount (count -1)
        if(count > 0){
            setcount (count -1)
            count-- 
        }
         
    }

    const handleReset = () =>{
        setcount(0)
    }
    
  return (
    <div>
      <div>
        <p className='text-center text-7xl mt-32'>{count}</p>
        <div className=' text-center text-3xl mt-20 text-white'>
            <button onClick={handleIncrement} className=' bg-blue-600 py-2 px-5 mr-3'>Increase</button>
            <button onClick={handleDecrement} className=' bg-red-600 py-2 px-5'>Decrease</button>
            <button onClick={handleReset}  className=' bg-red-600 py-2 px-5 ml-2'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Tasbiix
