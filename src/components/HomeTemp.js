import React from 'react';

const HomeTemp = () => {
    return (
        <div className="content">
                <div className="container">
                    <div className="page-title">
                        <h3>Home Page</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Meta Info</div>
                                <div className="card-body">
                                    
                                    <form accept-charset="utf-8">
                                        <div className="mb-3">
                                            <label for="title" className="form-label">Title</label>
                                            <input type="text" name="title" placeholder="Enter title" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="keywords" className="form-label">Password</label>
                                            <input type="text" name="keywords" placeholder="Enter Keywords" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="description" className="form-label">Description</label>
                                            <textarea rows="6" name="description" placeholder="Enter Description" className="form-control"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label for="schema" className="form-label">Schema</label>
                                            <textarea rows="6" name="schema" placeholder="Enter schema" className="form-control"></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <input type="submit" className="btn btn-primary" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Banner Image</div>
                                <div className="card-body">
                                    
                                    <form accept-charset="utf-8">
                                        <div className="mb-3">
                                            <label for="upload-img" className="form-label">Upload Image</label>
                                            <input type="file" name="upload-img" className="form-control" />
                                        </div>
                                        <button type="button" class="btn btn-link mb-2">Add More</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HomeTemp;