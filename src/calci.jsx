import React, {useState} from 'react'

function Calcii() {

    const backspace = () =>{
        try{
        setval(val.slice(0,-1))
        }
        catch(errror){
            setval("")
        }
    }

    const calculate = () =>{
        try{
            setval(eval(val))
        }catch(error){
            alert("ERROR")
            setval("")
        }
    }




    const [val, setval] = useState("")
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="display-6 fw-bolder text-center text-primary">CALCULATOR</h1>
                <hr />
            </div>
        </div>
        <div className="row justify-content-center">
            <div class="col md-4 justify-content-center">
                <div className="card border-primary mb-4 justify-content-center">
                <div class="card-body justify-content-center">
                    <input type="text" className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow" value={val} onChange={(e)=>setval(e.target.value)}/>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4 d-flex gy-5 gx-5 justify-content-center">
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="7" onClick={(e) => setval(val+e.target.value)}>7</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="8" onClick={(e) => setval(val+e.target.value)}>8</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="9" onClick={(e) => setval(val+e.target.value)}>9</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="*" onClick={(e) => setval(val+e.target.value)}>*</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="CE" onClick={(e) => backspace()}>CE</button>
                         
                        </div>
                        
                        
                    </div>
                    
                    <div className="row d-flex justify-content-center">
                        <div className="col-4 d-flex gy-5 gx-5 justify-content-center">
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="4" onClick={(e) => setval(val+e.target.value)}>4</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="5" onClick={(e) => setval(val+e.target.value)}>5</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="6" onClick={(e) => setval(val+e.target.value)}>6</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="+" onClick={(e) => setval(val+e.target.value)}>+</button>
                         
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4 d-flex gy-5 gx-5 justify-content-center">
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="1" onClick={(e) => setval(val+e.target.value)}>1</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="2" onClick={(e) => setval(val+e.target.value)}>2</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="3" onClick={(e) => setval(val+e.target.value)}>3</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="-" onClick={(e) => setval(val+e.target.value)}>-</button>
                         
                        </div>
                        </div>


                        <div className="row d-flex justify-content-center">
                        <div className="col-4 d-flex gy-5 gx-5 justify-content-center">
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="." onClick={(e) => setval(val+e.target.value)}>.</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="0" onClick={(e) => setval(val+e.target.value)}>0</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="=" onClick={(e) => calculate()}>=</button>
                        <button type="button" className="btn btn-outline-dark text-primary shadow p-4 mx-2" value="/" onClick={(e) => setval(val+e.target.value)}>/</button>
                         
                        </div>

                        </div>
                    
                    
                    </div>
                    
                    
                    
                    
                </div>
                
            </div>
           
        </div>
    </div>
  )
}

export default Calcii