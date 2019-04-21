import React from 'react'

export default function Contact() {
    return (
        <div className="container pt">
            <div className="row mt">
                <div className="col-lg-6 col-lg-offset-3 centered">
                    <h3>CONTACT ME</h3>
                    <hr />
                    <p />
                </div>
            </div>
            <div className="row mt">
                <div className="col-lg-8 col-lg-offset-2">
                    
                    <div className="form-group">
                        <input type="name" name="name" defaultValue="" className="form-control" id="NameInputEmail1" placeholder="Your Name" />
                        
                        <br />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" defaultValue="" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        
                        <br />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" defaultValue="" className="form-control" placeholder="Subject" />
                        
                        <br />
                    </div>
                    <textarea className="form-control" name="msg" rows={6} placeholder="Enter your message here" defaultValue="" />
                    
                    <br />
                    <button type="submit" className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>

  )
}
