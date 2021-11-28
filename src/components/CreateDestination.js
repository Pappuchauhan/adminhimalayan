import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './Common/DraftEditor';

const CreateDestination = () => {

    return (
        <div className="content">
            <div className="container">
                <div className="page-title">
                    <h3>Create Destination</h3>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Meta Info</div>
                            <div className="card-body">
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
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Banner Image</div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label for="upload-img" className="form-label">Upload Image</label>
                                    <input type="file" name="upload-img" className="form-control" />
                                </div>
                                <button type="button" class="btn btn-link mb-2">Add More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Home Top Content</div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label for="top-heading" className="form-label">Heading</label>
                                    <input type="text" name="top-heading" placeholder="Enter heading" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="top-content" className="form-label">Content</label>
                                    {/* <button onClick={onUnderlineClick}>U</button> */}
                                    <DraftEditor />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Tour Destinations</div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label for="top-heading" className="form-label">Heading</label>
                                    <input type="text" name="top-heading" placeholder="Enter heading" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="search-listing-page" className="form-label">Select Destination Name</label>
                                    <input type="text" name="search-listing-page" placeholder="Select destination name" className="form-control" />
                                    <button type="button" class="btn btn-link mb-2">Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Popular Tours</div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label for="top-heading" className="form-label">Heading</label>
                                    <input type="text" name="top-heading" placeholder="Enter heading" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="search-listing-page" className="form-label">Select Tour Name</label>
                                    <input type="text" name="search-listing-page" placeholder="Select tour name" className="form-control" />
                                    <button type="button" class="btn btn-link mb-2">Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Customer Says</div>
                            <div className="card-body">
                                <div className="repeated-area">
                                    <div className="mb-3">
                                        <label for="customer-name" className="form-label">Customer Name</label>
                                        <input type="text" name="customer-name" placeholder="Enter Customer Name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="search-listing-page" className="form-label">Enter Detail</label>
                                        <textarea rows="5" placeholder="Enter customer says" className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="upload-img" className="form-label">Upload Image</label>
                                        <input type="file" name="upload-img" className="form-control" />
                                    </div>
                                </div>
                                <button type="button" class="btn btn-link mb-2">Add More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">Home Bottom Content</div>
                            <div className="card-body">
                                <div className="repeated-content">
                                    <div className="mb-3">
                                        <label for="top-heading" className="form-label">Heading</label>
                                        <input type="text" name="top-heading" placeholder="Enter heading" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="upload-img" className="form-label">Upload Image</label>
                                        <input type="file" name="upload-img" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="top-content" className="form-label">Content</label>
                                        <DraftEditor />
                                    </div>
                                </div>
                                <button type="button" class="btn btn-link mb-2">Add More</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDestination;