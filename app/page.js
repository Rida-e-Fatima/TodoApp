"use client"
import React , {useState} from 'react'

const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
//I want to add the time to do the task here 
  const [mainTask , setmainTask] = useState([])
  const submitHandler =(e)=>{
   e.preventDefault()
   // ab yahan py ham main task ko show krayn gy usko change kr ky "..." teen dots ko kehty han spread operator is sy kya hota he? is liya kunky agr ham chahty han ky jo pehla task likha hoa he dosra task likhny py pehly wala khatm na ho to is wja sy spread operator use hota he 

   setmainTask([...mainTask, {Title , Desc}])
   setTitle("")
   setDesc("")
   console.log(mainTask)
  };

const deleteHandler = (i) => {
let copyTask = [...mainTask]
copyTask.splice(i , 1)
setmainTask(copyTask)
}

  let renderTask = <h1>No task is available now</h1>
if(mainTask.length>0){
//map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.
//"t" ka matlab he jo setmainTask"us particular object ky andr  jo task or description he" or "i" uska index number
renderTask=mainTask.map((t , i) =>{
  return(
   <li key={i} className="flex items-center justify-between">
     <div className="flex items-center justify-between w-2/3">
      <h5>{t.Title}</h5>
      <p>{t.Desc}</p>
  {/* I want to add the time of the task here  */}

    </div>
    <button 
    onClick={()=>
    {deleteHandler(i)}
    }
    className="bg-red-700 px-3 py-2 rounded">Delete</button>
   </li>
  )
  })
}
  return (
    <>
      <h1 className="text-center text-5xl font-bold">Todolist made by Rida-e-Fatima in React / Nextjs</h1>
      <form onSubmit={submitHandler} className="flex justify-center mt-14">

        
        <input
          type="text"
          value={Title}
          className=" border-2 border-zinc-800 text-xl me-5"
          placeholder="Enter the title here"
          //two way binding ka matlb hot ahe ap react ko bhi btaa ray ho ky kya likha he or user ko bhi matlab user input ki feild ky andr jo bhi likh raha he wo ek variable ky andr store ho ga is sy react ko pta chaly ga or jab input ki feild ma show ho ga to iska matlab he ky user bhi dekh paa raha he jab ky jo likha hoa ho ga wo varibale ky andr store ho ga 
          onChange={(e)=>{setTitle(e.target.value)} } 
          />
        
        <input
          type="text"
          className=" border-2 border-zinc-800 text-xl me-5"
          placeholder="Enter the description here" 
          value={Desc}
          onChange={(e)=>{setDesc(e.target.value)}}
          />

<button className="px-4 py-2 bg-gray-950 text-white">Add Tasks</button>

      </form>
      <hr/>
<div className="p-9 bg-red-500 text-white">
<ul>
  {renderTask}
  {/* <li></li> */}
</ul>
</div>
    </>
  )
}

export default page