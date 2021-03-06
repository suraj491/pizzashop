import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { deliverOrder, getAllOrders } from '../actions/orderActions'
export default function Orderslist() {
    const dispatch = useDispatch()
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getordersstate
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong' />)}
            <table className="table table-striped table-bordered table-responsive-sm">
                <thead className="thead-dark">
                    <tr style={{ backgroundColor: 'black' }}>
                        <th style={{ color: 'white' }}>Order Id</th>
                        <th style={{ color: 'white' }}>Email</th>
                        <th style={{ color: 'white' }}>User Id</th>
                        <th style={{ color: 'white' }}>Amount</th>
                        <th style={{ color: 'white' }}>Date</th>
                        <th style={{ color: 'white' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>
                                {order.isDelivered ? (<h1>Delivered</h1>) : (<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}