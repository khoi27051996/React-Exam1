import React from 'react'
import items from '../assets/data.json'
const Content = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    items.map((v) => {
                        return (

                            <div className="col-12 col-lg-6 d-flex flex-column mt-5 px-5" style={{ gap: 30, }} key={v.id}>
                                <div style={{ backgroundColor: "rgb(206, 212, 218)", borderRadius: 20 }}>
                                    <i style={{ width: 50, height: 50, lineHeight: 3, color: "white", transform: "translateY(-20px)" }} className={v.icon}></i>
                                    <h1 className='px-5' style={{ fontStyle: "italic", fontSize: 30 }}>{v.title}</h1>
                                    <p style={{ letterSpacing: 2 }} className='px-5'>{v.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Content
