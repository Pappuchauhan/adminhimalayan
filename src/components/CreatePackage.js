import React, { useState } from 'react';
import DraftEditor from './Common/DraftEditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

const CreatePackage = () => {
    


    return (
        <div className="content">
            <div className="container">
                <div className="page-title">
                    <h3>Create Package</h3>
                </div>
                <form>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Meta Info</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="title" className="form-label">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Enter title"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="keywords" className="form-label">Keywords</label>
                                        <input type="text"
                                            name="keywords"
                                            placeholder="Enter Keywords"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea rows="6"
                                            name="description"
                                            placeholder="Enter Description"
                                            className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="schema" className="form-label">Schema</label>
                                        <textarea rows="6"
                                            name="schema"
                                            placeholder="Enter schema"
                                            className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Photos</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="uploadImg" className="form-label">Upload Image</label>
                                        
                                            <div style={{ 'display': 'flex' }}>
                                                <input type="file"
                                                    name="uploadImg"
                                                    className="form-control"
                                                    style={{ 'marginBottom': '10px' }}/>
                                                <button
                                                    type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'paddingRight': '0' }}
                                                    >+</button>
                                                <button
                                                    type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'marginLeft': '15px' }}
                                                    >-</button>
                                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">General Information</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="pageSlug" className="form-label">Enter page URL</label>
                                        <input type="text"
                                            name="pageSlug"
                                            placeholder="Enter page URL"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="mainTitle" className="form-label">Enter Package Title</label>
                                        <input type="text"
                                            name="mainTitle"
                                            placeholder="Enter Package Title"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="tourDuration" className="form-label">Enter Tour Duration</label>
                                        <input type="text"
                                            name="tourDuration"
                                            placeholder="Enter Tour Duration"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="bannerImg" className="form-label">Upload Banner Image</label>
                                        <input type="file"
                                            name="bannerImg"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="listingImg" className="form-label">Upload Listing Image</label>
                                        <input type="file"
                                            name="listingImg"
                                            className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Overview</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="overviewHead" className="form-label">Heading</label>
                                        <input type="text"
                                            name="overviewHead"
                                            placeholder="Enter heading"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="overviewContent" className="form-label">Content</label>
                                        {/* <button onClick={onUnderlineClick}>U</button> */}
                                        {/* <DraftEditor /> */}
                                        <CKEditor
                                            editor={ClassicEditor} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inclusionList" className="form-label">Included</label>
                                        
                                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                                    <input type="text"
                                                        name="inclusionList"
                                                        placeholder="Enter Inclusion"
                                                        className="form-control"
                                                    />
                                                    <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'paddingRight': '0' }}
                                                        >+</button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'marginLeft': '15px' }}
                                                        >-</button>
                                                </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exclusionList" className="form-label">Not Included</label>
                                        
                                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                                    <input type="text"
                                                        name="exclusionList"
                                                        placeholder="Enter Exclusion"
                                                        className="form-control"
                                                    />
                                                    <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'paddingRight': '0' }}
                                                        >+</button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'marginLeft': '15px' }}
                                                        >-</button>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Itinerary</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="destinationRoute" className="form-label">Add Route</label>
                                        <input type="text" name="destinationRoute" placeholder="Enter Route" className="form-control" />
                                    </div>
                                    
                                            <div className="repeat-itineary">
                                                <div className="mb-3">
                                                    <label for="itineraryHeading" className="form-label">Itinerary Heading</label>
                                                    <input type="text"
                                                        name="itineraryHeading"
                                                        placeholder="Enter Itinerary Heading"
                                                        className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="itineraryContent" className="form-label">Itinerary Content</label>
                                                    <CKEditor
                                                        editor={ClassicEditor} />
                                                </div>
                                                <div className="mb-3">
                                                    <div style={{ 'display': 'flex' }}>
                                                        <button type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            >Add More</button>
                                                        <button
                                                            type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            >Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Hotel</div>
                                <div className="card-body">
                                    
                                            <div className="repeat-itineary">
                                                <div className="mb-3">
                                                    <label for="destinationName" className="form-label">Destination Name</label>
                                                    <input
                                                        type="text"
                                                        name="destinationName"
                                                        placeholder="Enter Destination Name"
                                                        className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="hotelImage" className="form-label">Upload Hotel Image</label>
                                                    <input
                                                        type="file"
                                                        name="hotelImage"
                                                        className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="hotelType" className="form-label">Hotel Type</label>
                                                    <input
                                                        type="text"
                                                        name="hotelType"
                                                        placeholder="For ex: Standard (equivalent to basic 2*)"
                                                        className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="hotelName" className="form-label">Hotel Name</label>
                                                    <input
                                                        type="text"
                                                        name="hotelName"
                                                        placeholder="Enter Hotel Name"
                                                        className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="mealPlan" className="form-label">Meal Plan</label>
                                                    <input
                                                        type="text"
                                                        name="mealPlan"
                                                        placeholder="Enter Meal Plan"
                                                        className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <div style={{ 'display': 'flex' }}>
                                                        <button
                                                            type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            >Add More</button>
                                                        <button type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            >Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Terms and Conditions</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="tnc" className="form-label">Terms and Conditions</label>
                                        <div style={{ 'display': 'flex' }}>
                                            <input type="text" name="tnc" placeholder="Enter Terms and Conditions" className="form-control" />
                                            <button type="button" class="btn btn-link mb-2" style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}>+</button>
                                            <button type="button" class="btn btn-link mb-2" style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Date</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="pkgDate" className="form-label">Terms and Conditions</label>
                                        <div style={{ 'display': 'flex' }}>
                                            <input type="date" name="pkgDate" className="form-control" />
                                            <input type="text" name="dateStatus" placeholder="Enter Available/Sold Out/Limited Seat" className="form-control" style={{ 'marginLeft': '15px' }} />
                                            <button type="button" class="btn btn-link mb-2" style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}>+</button>
                                            <button type="button" class="btn btn-link mb-2" style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Price</div>
                                <div className="card-body">
                                    <div className="repeated-content">
                                        <div className="mb-3">
                                            <label for="pricePlan" className="form-label">Plan Name</label>
                                            <input type="text" name="pricePlan" placeholder="Enter Plan Name" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="pkgPrice" className="form-label">Enter Price</label>
                                            <input type="text" name="pkgPrice" placeholder="Enter Price" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="priceSortDesc" className="form-label">Price Short Description</label>
                                            <input type="text" name="priceSortDesc" placeholder="Add Price Short Description" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <div style={{ 'display': 'flex' }}>
                                                <button type="button" class="btn btn-link mb-2" style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}>Add More</button>
                                                <button type="button" class="btn btn-link mb-2" style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="mb-3">
                                {/* <input type="submit" className="btn btn-primary" /> */}
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreatePackage;