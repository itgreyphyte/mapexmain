export default function joinus() {
    return <>
        <div className="apply_form joinus">
            <div className="container">
                <div className="form-container">
                    <div className="form-header">
                        <h2 className="form-title">Join Our Team</h2>
                        <p className="form-subtitle">
                            We're excited to learn more about you. Please fill out this form to apply.
                        </p>
                    </div>

                    <form>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">
                                    Fisrt Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Last Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Email Address <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="+91 "
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Current Location</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Noida, Delhi"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Years of Experience <span className="required">*</span>
                                </label>
                                <div className="select-wrapper">
                                    <select className="form-control" required>
                                        <option value="">Select your experience</option>
                                        <option value="0-2">0-2 years</option>
                                        <option value="2-5">2-5 years</option>
                                        <option value="5+">5+ years</option>
                                    </select>
                                </div>
                            </div>

                            {/* <div className="form-group full-width">
                                <label className="form-label">
                                    Cover Letter <span className="required">*</span>
                                </label>
                                <textarea
                                    className="form-control"
                                    placeholder="Tell us why you'd be a great fit for this position..."
                                    required
                                ></textarea>
                            </div> */}

                            <div className="form-group full-width">
                                <label className="form-label">
                                    Resume <span className="required">*</span>
                                </label>
                                <div className="file-upload-container">
                                    <div className="file-upload-card">
                                        <input
                                            type="file"
                                            id="resume"
                                            className="file-upload-input"
                                            accept=".pdf,.doc,.docx"
                                            required
                                        />
                                        <label htmlFor="resume" className="file-upload-content">
                                            <svg
                                                className="file-upload-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line x1="12" y1="3" x2="12" y2="15"></line>
                                            </svg>
                                            <div className="file-upload-text">Upload your resume</div>
                                            <div className="file-upload-hint">
                                                PDF or DOCX (Max. 5MB)
                                            </div>
                                            <div className="file-upload-btn">Select File</div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="agree-terms">
                            <input type="checkbox" id="agree-terms" required />
                            <label htmlFor="agree-terms">
                                I agree to the processing of my personal data according to the{" "}
                                <a href="#">Privacy Policy</a>. I confirm that all information
                                provided is accurate and complete.
                            </label>
                        </div>

                        <div className="submit-btn-container">
                            <button type="submit" className="submit-btn">
                                Submit Application
                                <svg
                                    className="btn-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}