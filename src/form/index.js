import {useState,useRef,useContext} from 'react'
import { setUser1, setUser2 } from '../context/action'

import clsx from 'clsx'

import{Context} from '../context/context'
import style  from './form.module.scss'


function Form() {

    const [userA,setUserA] =useState('')
    const [userB,setUserB] =useState('')
    const refForm = useRef('') 
    const refMessage = useRef(null)
    const refUser1 = useRef(null)
    const refUser2 =useRef(null)
    const[state,dispatch] = useContext(Context)
    const [close,setClose] = useState(false)

    const handleSetUser1 =(e)=>{
        setUserA(e.target.value)
      }
      const handleSetUser2 =(e)=>{
        setUserB(e.target.value)
      }

      const handleBlur =(e)=>{
        if(e.target.value === ''){
          refMessage.current.innerText = 'Please Fill Name Of Both Players Before Starting The Game'
        }
      }

      const handleSubmit = (e)=>{
        e.preventDefault()
        if(userA.length >= 1 && userB.length >=1){
            dispatch(setUser1(userA))
            dispatch(setUser2(userB))
            setClose(true)
        }else{
          refMessage.current.innerText = 'Please Fill Name Of Both Players Before Starting The Game'
        }
      }

    return ( 
    <div className={clsx(style.form,{[style.hide] : close === true})}>
        <form 
        className={clsx(style.form__element)}
        ref={refForm}
        onSubmit= {(e)=>{handleSubmit(e)}}
        >

          <div className={clsx(style.input__container)}>
            {/* INPUT 1 */}
            <input
            className={clsx(style.input)}
            onBlur={(e)=>handleBlur(e)}
            ref={refUser1}
            type="text"
            value ={userA}
            onChange= {(e)=>{handleSetUser1(e)}}
            placeholder="PLAYER 1"
            ></input>

          </div>

          <div className={clsx(style.input__container)}>
            {/* INPUT 2 */}
            <input
            className={clsx(style.input)}
            onBlur={(e)=>handleBlur(e)}
            type="text"
            value={userB}
            ref={refUser2}
            onChange= {(e)=>{handleSetUser2(e)}}
            placeholder="PLAYER 2"
            ></input>
          </div>
          <p className={clsx(style.message)} ref={refMessage}></p>
          <button className={clsx(style.button)}>Play Now</button>
        </form>
      </div>
     );
}

export default Form;