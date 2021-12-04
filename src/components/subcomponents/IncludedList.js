import React from "react"
const IncludedList = (props) => {
  return (
    props.includedList.map((val, idx) => {
      let includedName = `includedName-${idx}`
      return (
        <div key={val.index} style={{ display: 'flex', alignItems: 'flex-start' }}>
        <input type="text"
            name={props.name}
            data-id={idx}
            id={includedName}
            placeholder={props.placeholder}
            className="form-control"
            style={{marginBottom: '15px'}}
            onChange={event => props.onChange(event)} 
              />
          {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
        </div>
      )
    })
  )
}
export default IncludedList