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
                                <div className="card-header">Head Detail</div>
                                <div className="card-body">
                                    <h5 className="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                    <form accept-charset="utf-8">
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" name="email" placeholder="Email Address" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label for="password" className="form-label">Password</label>
                                            <input type="password" name="password" placeholder="Password" className="form-control" required />
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
                                <div className="card-header">Horizontal Form</div>
                                <div className="card-body">
                                    <h5 className="card-title">Lorem ipsum dolor sit amet consectetur.</h5>
                                    <form accept-charset="utf-8">
                                        <div className="mb-3 row">
                                            <label className="col-sm-2 form-label" for="email">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" name="email" placeholder="Email Address" className="form-control" />
                                                <small className="form-text">Example help text that remains unchanged.</small>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-2 form-label" for="password">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" name="password" placeholder="Pasword" className="form-control" />
                                                <small className="form-text">Example help text that remains unchanged.</small>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <div className="col-sm-10 offset-sm-2">
                                                <input type="submit" className="btn btn-primary" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">Inline Form</div>
                                <div className="card-body">
                                    <h5 className="card-title">Example inline form</h5>
                                    <form accept-charset="utf-8">
                                        <div className="row g-2">
                                            <div className="col">
                                                <label for="name" className="form-label sr-only">Name</label>
                                                <input name="name" type="text" placeholder="Jane Doe" className="form-control" />
                                            </div>
                                            <div className="col">
                                                <label for="username" className="form-label sr-only">Password</label>
                                                <input type="text" name="username" placeholder="Username" className="form-control" />
                                            </div>
                                            <div className="col">
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">Modal Form</div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Example popup signin form</h5>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch form</button>
                                    <div className="modal fade" id="exampleModal" role="dialog" tabindex="-1">
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5 className="modal-title">Signin Modal</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div className="modal-body text-start">
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                            <form accept-charset="utf-8">
                                                <div className="mb-3">
                                                    <label for="email" className="form-label">Email</label>
                                                    <input type="email" name="email" placeholder="Email Address" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="password" className="form-label">Password</label>
                                                    <input type="password" name="password" placeholder="Password" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <button type="submit" className="btn btn-primary">Signin</button>
                                                </div>
                                            </form>
                                          </div>
                                          <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">Form Validation</div>
                                <div className="card-body">
                                    <h5 className="card-title">Example form with inline field validations</h5>
                                    <form className="needs-validation" novalidate accept-charset="utf-8">
                                        <div className="row g-2">
                                            <div className="mb-3 col-md-6">
                                                <label for="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" name="email" placeholder="Email" required />
                                                <small className="form-text text-muted">Enter a valid email address.</small>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please enter your email address.</div>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label for="password" className="form-label">Password</label>
                                                <input type="password" className="form-control" name="password" placeholder="Password" required />
                                                <small className="form-text text-muted">Your password must be 8-20 characters long, contain letters and numbers only.</small>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please enter your password.</div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" name="address" placeholder="1234 Main St, Unit, Building, or Floor" required />
                                            <div className="valid-feedback">Looks good!</div>
                                            <div className="invalid-feedback">Please enter your address.</div>
                                        </div>
                                        <div className="row g-2">
                                            <div className="mb-3 col-md-6">
                                                <label for="city" className="form-label">City</label>
                                                <input type="text" className="form-control" name="city" placeholder="City" required />
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please enter your City.</div>
                                            </div>
                                            <div className="mb-3 col-md-4">
                                                <label for="state" className="form-label">State</label>
                                                <select name="state" className="form-select" required>
                                                    <option value="" selected>Choose...</option>
                                                    <option value="1">New York</option>
                                                    <option value="2">Los Angeles</option>
                                                </select>
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please select a State.</div>
                                            </div>
                                            <div className="mb-3 col-md-2">
                                                <label for="zip" className="form-label">Zip code</label>
                                                <input type="text" className="form-control" name="zip" placeholder="00000" required />
                                                <div className="valid-feedback">Looks good!</div>
                                                <div className="invalid-feedback">Please enter a Zip code.</div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                              <input className="form-check-input" type="checkbox" value="" id="check1" required />
                                              <label className="form-check-label" for="check1">
                                                Check me out
                                              </label>
                                              <div className="invalid-feedback">You must agree before submitting.</div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary"><i className="fas fa-save"></i> Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">All form elements</div>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <form className="">
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Normal</label>
                                            <div className="col-sm-10">
                                                <input type="text" name="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Help text</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" />
                                                <small className="form-text text-muted">A help text that brings hint to users.</small>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" name="password" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Placeholder</label>
                                            <div className="col-sm-10">
                                                <input type="text" placeholder="placeholder" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Disabled</label>
                                            <div className="col-sm-10">
                                                <input type="text" disabled="" placeholder="disabled or read only input here" className="form-control" readonly />
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Checkboxes and radios <br />
                                                <small className="text-info">Normal Bootstrap elements</small>
                                            </label>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                  <input className="form-check-input" type="checkbox" value="" id="check2" />
                                                  <label className="form-check-label" for="check2">
                                                    Check this default checkbox
                                                  </label>
                                                </div>
                                                <div className="form-check">
                                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
                                                  <label className="form-check-label" for="radio1">
                                                    Default radio
                                                  </label>
                                                </div>
                                                <div className="form-check">
                                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" checked />
                                                  <label className="form-check-label" for="radio2">
                                                    Default checked radio
                                                  </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Inline checkboxes</label>
                                            <div className="col-sm-10">
                                                <div className="form-check form-check-inline">
                                                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                  <label className="form-check-label" for="inlineCheckbox1">1</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                  <label className="form-check-label" for="inlineCheckbox2">2</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                                                  <label className="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Toggle Switch<br />
                                                <small className="text-info">Custom elements</small>
                                            </label>
                                            <div className="col-sm-10">
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                                                  <label className="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
                                                  <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Select</label>
                                            <div className="col-sm-10 select">
                                                <select name="" className="form-select">
                                                    <option value="">option 1</option>
                                                    <option value="">option 2</option>
                                                    <option value="">option 3</option>
                                                    <option value="">option 4</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-10 offset-sm-2 select">
                                                <br />
                                                <select name="" multiple="" className="form-select">
                                                    <option value="">option 1</option>
                                                    <option value="">option 2</option>
                                                    <option value="">option 3</option>
                                                    <option value="">option 4</option>
                                                </select>
                                                <small className="form-text">Select for than one</small>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Input with success</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control is-valid" />
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Input with warning</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control is-invalid" />
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row has-danger">
                                            <label className="col-sm-2">Input with error</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control is-invalid" />
                                                <div className="invalid-feedback">Read error message here.</div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Control sizing</label>
                                            <div className="col-sm-10">
                                                <div className="mb-3">
                                                    <input type="text" placeholder=".form-control-lg" className="form-control form-control-lg" />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text" placeholder=".form-control" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <input type="text" placeholder=".form-control-sm" className="form-control form-control-sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Column sizing</label>
                                            <div className="col-sm-10">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <input type="text" placeholder=".col-md-2" className="form-control" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input type="text" placeholder=".col-md-3" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input type="text" placeholder=".col-md-4" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Input groups</label>
                                            <div className="col-sm-10">
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                      <span className="input-group-text" id="basic-addon1">@</span>
                                                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                      <span className="input-group-text">.00</span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                      <span className="input-group-text">$</span>
                                                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                      <span className="input-group-text">.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <label className="col-sm-2">Button addons</label>
                                            <div className="col-sm-10">
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                      <button className="btn btn-primary" type="button" id="button-addon1">Go!</button>
                                                      <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                      <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon2" />
                                                      <button className="btn btn-primary" type="button" id="button-addon2">Go!</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div><br />
                                        <div className="mb-3 row">
                                            <div className="col-sm-4 offset-sm-2">
                                                <button type="submit" className="btn btn-secondary mb-2"><i className="fas fa-times"></i> Cancel</button>
                                                <button type="submit" className="btn btn-primary mb-2"><i className="fas fa-save"></i> Save</button>
                                            </div>
                                        </div>
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