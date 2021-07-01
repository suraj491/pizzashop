import React , {useState} from 'react'
import {Modal} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Pizza({pizza}){
    AOS.init({
    
    })
    const [quantity,setquantity]=useState(1)
    const [varient,setvarient]=useState('small')
    const [show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const dispatch=useDispatch()
    function addtocart()
    {
        dispatch(addToCart(pizza,quantity,varient))
    }
    return(
        <div style={{margin:'70px'}} data-aos='zoom-in' className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{height:'200px', width:'200px'}}/>
            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                    {pizza.varients.map(varient=>{
                        return <option value={varient}>{varient}</option>
                    })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <h1 className='mt-1'>Price : {pizza.prices[0][varient]*quantity}Rs</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick={addtocart}>ADD</button>
                </div>
            </div>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{height:'500px'}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>            
    )
}