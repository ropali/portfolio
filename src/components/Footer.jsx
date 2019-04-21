import React from 'react'

export default function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>My Bunker</h4>
                        <p>
                            Ulhasnagar,<br />
                            Pin Code - 421003, <br />
                            Mumbai, Maharashtra.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h4>My Links</h4>
                        <p>
                            <a target="_blank" href="https://github.com/ropali">GitHub</a><br />
                            <a target="_blank" href="https://stackoverflow.com/users/6832201/ropali-munshi">StackOverflow</a><br />
                            <a target="_blank" href="https://newcodingera.com/">My Blog</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h4>About Ropali</h4>
                        <p>Ropali is a very passionate coder, who loves to create fun projects in free time.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
