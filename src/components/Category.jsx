import React from 'react';
import { useParams } from 'react-router-dom';


const Category = (props) => {
    const {categoryname } = useParams();
  return (
    <div>
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <a href="/products">  <div className='btn btn-success' datas="groceries"> Mens Clothing</div></a>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category