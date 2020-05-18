import React from 'react';
import '../Style/pagination.css'
const Pagination=(props)=>{
    const pageNumber = [];
    for(let i=1 ; i <=props.Tquestion;i++){
        pageNumber.push(i);
    }
    return(
        <div>
            {pageNumber.map(number=>
                <a onClick={()=>(props.paginate(number))} href="#/" className="pagelink">
                    <div className="page_item">
                        {number}
                    </div>
                </a>
            )
            }
        </div>
    )
}
export default Pagination;