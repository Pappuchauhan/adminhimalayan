import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './Common/DraftEditor';
import IncludedList from './subcomponents/IncludedList';
import Axios from 'axios';

const CreatePackage = () => {
     
    
    const url = "https://himalayan-backand.herokuapp.com/api/package/add"
    const [inputFields, setInputFields] = useState(
        { title: '', keywords: '', description: '', schema: '', pageSlug: '', mainTitle: '', tourDuration: '', bannerImg: '', listingImg: '',  overviewHead: '', overviewContent: '', destinationRoute: '',includedList: [{ index: Math.random(), includedName: ""}]}
    );

    const [bannerImages, setBannerImages] = useState([
        { uploadImg: '' }
    ]);

    const [pkgIncluded, setPkgIncluded] = useState([
        { packageIncluded: '' }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields", inputFields);
        console.log('bannerImages', inputFields.bannerImages);
        Axios.post(url, {
            keywords: inputFields.keywords,
            description: inputFields.description,
            metaSchema: inputFields.schema,
            pageUrl: inputFields.pageSlug,
            pageTitle: inputFields.mainTitle,
            tourDuration: inputFields.tourDuration,
            bannerImage: inputFields.bannerImg,
            listingImage: inputFields.listingImg,
            overviewHeading: inputFields.overviewHead,
            overviewContent: inputFields.overviewContent,
            itineraryRoute: inputFields.destinationRoute
        })
            .then(res => {
                console.log(res.data)
            })
    }

    const handleChangeInput = (event) => {


        if (["includedName"].includes(event.target.name)) {
            let includedList = [...inputFields.includedList]
            includedList[event.target.dataset.id][event.target.name] = event.target.value;
        } else {

            const values = { ...inputFields };
           // console.log('' + values);
           values[event.target.name] = event.target.value;
            setInputFields(values);

           // setInputFields({ [event.target.name]: event.target.value })
        }

        console.log(inputFields);

/*
        if (["includedName"].includes(event.target.name)) {
            let includedList = [...inputFields.includedList]
            inputFields.includedList[event.target.dataset.id][event.target.name] = event.target.value;
        } else {

            const values = { ...inputFields };
            console.log(values);
           values[event.target.name] = event.target.value;
            setInputFields(values);
           // setInputFields({ [e.target.name]: e.target.value })
        }

*/
      
    }

    const handleAddImg = (index, event) => {
        const values = [...bannerImages];
        console.log(values);
        //console.log('check target' + values[index][event.target]);
      //  values[index][event.target.name] = event.target.value;
      //  setBannerImages(values);
    }
 
    const handleAddFields = () => {
        setBannerImages([...bannerImages, { uploadImg: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...bannerImages];
        values.splice(index, 1);
        setBannerImages(values);
    }

    const handleAddPkgIncludes = (events) => {
        const values = [...pkgIncluded];
        console.log(values[0]);
        //values[index][event.target.name] = event.target.value;
        //setPkgIncluded(values);
    }

    const handleAddIncludedFields = () => {
        setPkgIncluded([...pkgIncluded, { packageIncluded: '' }])
    }

    const handleRemoveIncludedFields = (index) => {
        const values = [...pkgIncluded];
        values.splice(index, 1);
        setPkgIncluded(values);
    }


   // const [state, setState] = useState({ includedList: [{ index: Math.random(), includedName: ""}]});
    /*
    inputFields, setInputFields
    setState = {
        includedList: [{ index: Math.random(), includedName: ""}]
       
    }
    */
  /*
    const handleChange = (e) => {
        if (["includedName"].includes(e.target.name)) {
            let includedList = [...inputFields.includedList]
            includedList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            //setInputFields({ [e.target.name]: e.target.value })
        }

        console.log('list1' + JSON.stringify(inputFields.includedList));
    }
    */
    const addNewRow = () => {
        setInputFields((prevState) => ({
            includedList: [...prevState.includedList, { index: Math.random(), includedName: "" }],
        }));
    }


    const deteteRow = (index) => {
        setInputFields({
            includedList: inputFields.includedList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }

    const clickOnDelete = (record) => {
        setInputFields({
            includedList: inputFields.includedList.filter(r => r !== record)
        });
    }

  //  let { setInputFields } = inputFields//let { notes, date, description, taskList } = this.state
    return (
        <div className="content">
            <div className="container">
                <div className="page-title">
                    <h3>Create Package</h3>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}  >
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
                                        {bannerImages.map((val,idx) => (
                                            <div key={val.index} style={{ 'display': 'flex' }}>
                                                <input type="file"
                                                    name="uploadImg"
                                                    className="form-control"
                                                    style={{ 'marginBottom': '10px' }}
                                                    value={val.uploadImg}
                                                    onChange={event => handleAddImg(val.index, event)} />
                                                <button type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                    onClick={() => handleAddFields()}>+</button>
                                                <button type="button"
                                                    class="btn btn-link mb-2"
                                                    style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}
                                                    onClick={() => handleRemoveFields(val.index)}>-</button>
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
                                        <DraftEditor />
                                    </div>
                                    <div className="mb-3">
                                        <label for="packageIncluded" className="form-label">Included</label>
                                        <IncludedList add={addNewRow}  onChange={handleChangeInput}   delete={clickOnDelete.bind(this)} includedList={inputFields.includedList} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="packageNotIncluded" className="form-label">Not Included</label>
                                        <div style={{ 'display': 'flex' }}>
                                            <input type="text" name="packageNotIncluded" placeholder="Enter Exclusion" className="form-control" />
                                            <button type="button" class="btn btn-link mb-2" style={{ 'marginLeft': '15px', 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}>+</button>
                                            <button type="button" class="btn btn-link mb-2" style={{ 'fontSize': '30px', 'textDecoration': 'none', 'lineHeight': '2px' }}>-</button>
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
                                    <div className="mb-3">
                                        <label for="itineraryHead" className="form-label">Itinerary Heading</label>
                                        <input type="text" name="itineraryHead" placeholder="Enter Itinerary Heading" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="itineraryContent" className="form-label">Itinerary Content</label>
                                        {/* <button onClick={onUnderlineClick}>U</button> */}
                                        <DraftEditor />
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

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Hotel</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label for="destinationName" className="form-label">Destination Name</label>
                                        <input type="text" name="destinationName" placeholder="Enter Destination Name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="hotelImg" className="form-label">Upload Hotel Image</label>
                                        <input type="file" name="hotelImg" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="hotelType" className="form-label">Hotel Type</label>
                                        <input type="text" name="hotelType" placeholder="For ex: Standard (equivalent to basic 2*)" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="hotelName" className="form-label">Hotel Name</label>
                                        <input type="text" name="hotelName" placeholder="Enter Hotel Name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="mealPlan" className="form-label">Meal Plan</label>
                                        <input type="text" name="mealPlan" placeholder="Enter Meal Plan" className="form-control" />
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
                                            <input type="text" name="dateStatus" placeholder="Enter Available/Sold Out/Limited Seat" className="form-control" style={{'marginLeft' : '15px'}} />
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