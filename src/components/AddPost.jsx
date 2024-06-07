import React from 'react'
import NavBar from './NavBar'

const AddPost = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Post Title</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">category</label>
                            <select name="" id="" className="form-control">
                                <option value="comic">comic</option>
                                <option value="autobiography">science</option>
                                <option value="novel">politics</option>
                                <option value="short story">fashion</option>
                            </select></div>
                        </div>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Publication</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" class="form-label">Author name</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        
                            <br></br>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary">Add Post</button>
                        </div>
                       
                </div>
            </div>
         </div>                                
    </div>
  )
}

export default AddPost