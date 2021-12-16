import React, { useState } from 'react';
import DraftEditor from './Common/DraftEditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const CreatePackage = () => {
    const url = "https://himalayan-backand.herokuapp.com/api/package/add"

    let formData = new FormData();


    const [inputFields, setInputFields] = useState(
        { title: '', keywords: '', description: '', schema: '', pageSlug: '', mainTitle: '', tourDuration: '', bannerImg: '', listingImg: '', overviewHead: '', overviewContent: '', destinationRoute: '' }
    );
    // This state is using for upload multiple image
    const [bannerImages, setBannerImages] = useState([
        { uploadImg: '' }
    ]);

    // This state is using for include list
    const [includeList, setIncludeList] = useState([
        { inclusionList: '' }
    ])

    // This state is using for exclude list
    const [excludeList, setExcludeList] = useState([
        { exclusionList: '' }
    ])

    // This state is using for top content description
    const [topDescription, setTopDescription] = useState(
        { overviewContent: 'testing' }
    )

    // This state is using for itineary list
    const [itinerayList, setItinerayList] = useState([
        { itineraryHeading: 'test', itineraryContent: 'test1' }
    ])

    // This state is using for hotel list
    const [hotelList, setHotelList] = useState([
        { destinationName: '', hotelImage: '', hotelType: '', hotelName: '', mealPlan: '' }
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('title', inputFields.title);
        formData.append('keywords', inputFields.keywords);
        formData.append('description', inputFields.description);
        formData.append('metaSchema', inputFields.schema);
        formData.append('pageUrl', inputFields.pageSlug);
        formData.append('pageTitle', inputFields.mainTitle);
        formData.append('tourDuration', inputFields.tourDuration);
        formData.append('bannerImage', inputFields.bannerImg);
        formData.append('listingImage', inputFields.listingImg);
        formData.append('overviewHeading', inputFields.overviewHead);
        formData.append('overviewContent', topDescription);
        formData.append('itineraryRoute', inputFields.destinationRoute);
        formData.append('photos', bannerImages);
        formData.append('included', includeList);
        formData.append('notIncluded', excludeList);
        formData.append('hotelDestinationName', hotelList);
        axios.post(url, {
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })
            .then(res => {
                console.log(res.data)
            })
    }

    // This is using for handle each single field
    const handleChangeInput = (event) => {
        const values = { ...inputFields };
        values[event.target.name] = event.target.value;
        setInputFields(values);
    }
    // This is using for  onchange event of top content description
    const handleChangeDescription = (e, editor) => {
        const data = editor.getData();
        setTopDescription(data);
    }
    // This is using for  onchange event of include list
    const handleChangeInclude = (e, index) => {
        const { name, value } = e.target;
        const list = [...includeList];
        list[index][name] = value;
        setIncludeList(list)
    }
    // This is using for  add more include list
    const handleAddInclusion = () => {
        setIncludeList([...includeList, { inclusionList: '' }]);
    }
    // This is using for remove include list
    const handleRemoveInclude = index => {
        const list = [...includeList];
        list.splice(index, 1);
        setIncludeList(list);
    }

    // This is using for  onchange event of exclude list
    const handleChangeExclude = (e, index) => {
        const { name, value } = e.target;
        const list = [...excludeList];
        list[index][name] = value;
        setExcludeList(list)
    }
    // This is using for  add more exclude list
    const handleAddExclude = () => {
        setExcludeList([...excludeList, { exclusionList: '' }]);
    }
    // This is using for remove exclude list
    const handleRemoveExclude = index => {
        const list = [...excludeList];
        list.splice(index, 1);
        setExcludeList(list);
    }

    // This is using for  onchange event of itineary list
    const handleChangeItineary = (e, index) => {
        const { name, value } = e.target;
        const list = [...itinerayList];
        list[index][name] = value;
        setItinerayList(list)
    }
    // This is using for  add more itineary list
    const handleAddItineary = () => {
        setItinerayList([...itinerayList, { itineraryHeading: '', itineraryContent: '' }]);
    }
    // This is using for remove itineary list
    const handleRemoveItineary = index => {
        const list = [...itinerayList];
        list.splice(index, 1);
        setItinerayList(list);
    }

    // This is using for  onchange event of itineary list
    const handleChangeHotel = (e, index) => {
        const { name, value } = e.target;
        const list = [...hotelList];
        list[index][name] = value;
        setHotelList(list)
        console.log(list);
    }
    // This is using for  add more itineary list
    const handleAddHotel = () => {
        setHotelList([...hotelList, { destinationName: '', hotelImage: '', hotelType: '', hotelName: '', mealPlan: '' }]);
    }
    // This is using for remove itineary list
    const handleRemoveHotel = index => {
        const list = [...hotelList];
        list.splice(index, 1);
        setHotelList(list);
    }

    // This is using for  onchange event of include list
    const handleChangePhoto = (e, index) => {
        const file = e.target.files[0];
        setBannerImages([...bannerImages, {uploadImg: file}]);
        


        // const { name, value } = e.target;
        // const list = [...bannerImages];
        // console.log(list);
        // list[index][name] = value;

    }
    // This is using for  add more include list
    const handleAddPhoto = () => {
        setBannerImages([...bannerImages, { uploadImg: '' }]);
    }
    // This is using for remove include list
    const handleRemovePhoto = index => {
        const list = [...bannerImages];
        list.splice(index, 1);
        setBannerImages(list);
    }



    return (
        <div className="content">
            <div className="container">
                <div className="page-title">
                    <h3>Create Package</h3>
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
                                <div className="card-header">Photos</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="uploadImg" className="form-label">Upload Image</label>
                                        {bannerImages.map((item, i) => (
                                            <div key={i} style={{ 'display': 'flex' }}>
                                                <input type="file"
                                                    name="uploadImg"
                                                    className="form-control"
                                                    style={{ 'marginBottom': '10px' }}
                                                    value={item.uploadImg}
                                                    onChange={e => handleChangePhoto(e, i)} />
                                                {bannerImages.length - 1 === i && <button
                                                    type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'paddingRight': '0' }}
                                                    onClick={handleAddPhoto}>+</button>}
                                                {bannerImages.length !== 1 && <button
                                                    type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'marginLeft': '15px' }}
                                                    onClick={() => handleRemovePhoto(i)}>-</button>}
                                            </div>
                                        ))}
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
                                            className="form-control"
                                            value={inputFields.pageSlug}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="mainTitle" className="form-label">Enter Package Title</label>
                                        <input type="text"
                                            name="mainTitle"
                                            placeholder="Enter Package Title"
                                            className="form-control"
                                            value={inputFields.mainTitle}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="tourDuration" className="form-label">Enter Tour Duration</label>
                                        <input type="text"
                                            name="tourDuration"
                                            placeholder="Enter Tour Duration"
                                            className="form-control"
                                            value={inputFields.tourDuration}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="bannerImg" className="form-label">Upload Banner Image</label>
                                        <input type="file"
                                            name="bannerImg"
                                            className="form-control"
                                            value={inputFields.bannerImg}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="listingImg" className="form-label">Upload Listing Image</label>
                                        <input type="file"
                                            name="listingImg"
                                            className="form-control"
                                            value={inputFields.listingImg}
                                            onChange={event => handleChangeInput(event)} />
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
                                            className="form-control"
                                            value={inputFields.overviewHead}
                                            onChange={event => handleChangeInput(event)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="overviewContent" className="form-label">Content</label>
                                        {/* <button onClick={onUnderlineClick}>U</button> */}
                                        {/* <DraftEditor /> */}
                                        <CKEditor
                                            editor={ClassicEditor}
                                            onChange={handleChangeDescription} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inclusionList" className="form-label">Included</label>
                                        {includeList.map((item, i) => {
                                            return (
                                                <div key={i} style={{ display: 'flex', marginBottom: '10px' }}>
                                                    <input type="text"
                                                        name="inclusionList"
                                                        placeholder="Enter Inclusion"
                                                        className="form-control"
                                                        value={item.inclusionList}
                                                        onChange={e => handleChangeInclude(e, i)}
                                                    />
                                                    {includeList.length - 1 === i && <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'paddingRight': '0' }}
                                                        onClick={handleAddInclusion}>+</button>}
                                                    {includeList.length !== 1 && <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'marginLeft': '15px' }}
                                                        onClick={() => handleRemoveInclude(i)}>-</button>}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="mb-3">
                                        <label for="exclusionList" className="form-label">Not Included</label>
                                        {excludeList.map((item, i) => {
                                            return (
                                                <div key={i} style={{ display: 'flex', marginBottom: '10px' }}>
                                                    <input type="text"
                                                        name="exclusionList"
                                                        placeholder="Enter Exclusion"
                                                        className="form-control"
                                                        value={item.exclusionList}
                                                        onChange={e => handleChangeExclude(e, i)}
                                                    />
                                                    {excludeList.length - 1 === i && <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'paddingRight': '0' }}
                                                        onClick={handleAddExclude}>+</button>}
                                                    {excludeList.length !== 1 && <button
                                                        type="button"
                                                        class="btn btn-link mb-2"
                                                        style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px', 'marginLeft': '15px' }}
                                                        onClick={() => handleRemoveExclude(i)}>-</button>}
                                                </div>
                                            )
                                        })}
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
                                    {itinerayList.map((item, i) => {
                                        return (
                                            <div key={i} className="repeat-itineary">
                                                <div className="mb-3">
                                                    <label for="itineraryHeading" className="form-label">Itinerary Heading</label>
                                                    <input type="text"
                                                        name="itineraryHeading"
                                                        placeholder="Enter Itinerary Heading"
                                                        className="form-control"
                                                        value={item.itineraryHeading}
                                                        onChange={e => handleChangeItineary(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="itineraryContent" className="form-label">Itinerary Content</label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        onChange={e => handleChangeItineary(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <div style={{ 'display': 'flex' }}>
                                                        {itinerayList.length - 1 === i && <button type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            onClick={handleAddItineary}>Add More</button>}
                                                        {itinerayList.length !== 1 && <button
                                                            type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            onClick={() => handleRemoveItineary(i)}>Remove</button>}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Hotel</div>
                                <div className="card-body">
                                    {hotelList.map((item, i) => {
                                        return (
                                            <div key={i} className="repeat-itineary">
                                                <div className="mb-3">
                                                    <label for="destinationName" className="form-label">Destination Name</label>
                                                    <input
                                                        type="text"
                                                        name="destinationName"
                                                        placeholder="Enter Destination Name"
                                                        className="form-control"
                                                        value={item.destinationName}
                                                        onChange={e => handleChangeHotel(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="hotelImage" className="form-label">Upload Hotel Image</label>
                                                    <input
                                                        type="file"
                                                        name="hotelImage"
                                                        className="form-control"
                                                        value={item.hotelImage}
                                                        onChange={e => handleChangeHotel(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="hotelType" className="form-label">Hotel Type</label>
                                                    <input
                                                        type="text"
                                                        name="hotelType"
                                                        placeholder="For ex: Standard (equivalent to basic 2*)"
                                                        className="form-control"
                                                        value={item.hotelType}
                                                        onChange={e => handleChangeHotel(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="hotelName" className="form-label">Hotel Name</label>
                                                    <input
                                                        type="text"
                                                        name="hotelName"
                                                        placeholder="Enter Hotel Name"
                                                        className="form-control"
                                                        value={item.hotelName}
                                                        onChange={e => handleChangeHotel(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="mealPlan" className="form-label">Meal Plan</label>
                                                    <input
                                                        type="text"
                                                        name="mealPlan"
                                                        placeholder="Enter Meal Plan"
                                                        className="form-control"
                                                        value={item.mealPlan}
                                                        onChange={e => handleChangeHotel(e, i)} />
                                                </div>
                                                <div className="mb-3">
                                                    <div style={{ 'display': 'flex' }}>
                                                        {hotelList.length - 1 === i && <button
                                                            type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            onClick={handleAddHotel}>Add More</button> }
                                                        {hotelList.length !== 1 && <button type="button"
                                                            class="btn btn-link mb-2"
                                                            style={{ 'fontSize': '14px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                            onClick={() => handleRemoveHotel(i)}>Remove</button> }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
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