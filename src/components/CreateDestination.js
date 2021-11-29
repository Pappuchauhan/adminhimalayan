import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './Common/DraftEditor';
import Axios from 'axios';

const CreateDestination = () => {
    const url = "https://himalayan-backand.herokuapp.com/api/category/add"
    const [inputFields, setInputFields] = useState(
        { title: '', keywords: '', description: '', schema: '' }
    );

    const [bannerImages, setBannerImages] = useState([
        { uploadImg: '' }
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields", inputFields);
        console.log('bannerImages', bannerImages);
        Axios.post(url,{
            parent: inputFields.title,
            slug: inputFields.keywords,
            type: inputFields.description,
            icon: inputFields.schema
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    const handleChangeInput = (event) => {
        const values = { ...inputFields };
        values[event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleAddImg = (index, event) => {
        const values = [ ...bannerImages ];
        console.log(values[index][event.target.files[0]]);
        values[index][event.target.name] = event.target.value;
        setBannerImages(values);
    }

    const handleAddFields = () => {
        setBannerImages([...bannerImages, { uploadImg: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...bannerImages];
        values.splice(index, 1);
        setBannerImages(values);
    }

    return (
        <div className="content">
            <div className="container">
                <div className="page-title">
                    <h3>Create Destination</h3>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
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
                                            className="form-control"
                                            value={inputFields.title}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="keywords" className="form-label">Keywords</label>
                                        <input type="text"
                                            name="keywords"
                                            placeholder="Enter Keywords"
                                            className="form-control"
                                            value={inputFields.keywords}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea rows="6"
                                            name="description"
                                            placeholder="Enter Description"
                                            className="form-control"
                                            value={inputFields.description}
                                            onChange={event => handleChangeInput(event)}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label for="schema" className="form-label">Schema</label>
                                        <textarea rows="6"
                                            name="schema"
                                            placeholder="Enter schema"
                                            className="form-control"
                                            value={inputFields.schema}
                                            onChange={event => handleChangeInput(event)}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Banner Image</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="uploadImg" className="form-label">Upload Image</label>
                                        {bannerImages.map((bannerImg, index) => (
                                            <div key={index} style={{ 'display': 'flex' }}>
                                                <input type="file"
                                                    name="uploadImg"
                                                    className="form-control"
                                                    style={{ 'marginBottom': '10px' }}
                                                    value={bannerImages.uploadImg}
                                                    onChange={event => handleAddImg(index, event)} />
                                                <button type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                    onClick={() => handleAddFields()}>+</button>
                                                <button type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                    onClick={() => handleRemoveFields(index)}>-</button>
                                            </div>
                                        ))}
                                    </div>
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

export default CreateDestination;