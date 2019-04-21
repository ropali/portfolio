import React from 'react'

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function getWords(monthCount) {
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }
  
    var months = { one: 'month', other: 'months' },
        years = { one: 'year', other: 'years' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];
  
    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    return result.join(' and ');
  }

export default function About() {
    return (
        <div className="container pt">
            <div className="row mt centered">
                <div className="col-lg-3">
                    <span className="glyphicon glyphicon-book" />
                    <p>I have completed graduation from Mumbai University affiliated college in Bsc. Computer Science in year 2018</p>
                </div>
                <div className="col-lg-3">
                    <span className="glyphicon glyphicon-user" />
                    <p>I love writing code and love to build fun projects in my free time.I like to listen to audio books and daily reader of Quora.</p>
                </div>
                <div className="col-lg-3">
                    <span className="glyphicon glyphicon-fire" />
                    <p>I have decent skills in various programming languages like Java, Python, PHP, JavaScript etc.</p>
                </div>
                <div className="col-lg-3">
                    <span className="glyphicon glyphicon-globe" />
                    <p>I have { getWords( monthDiff(  new Date(2018, 7, 1), new Date() ) ) } of experience in web development industry.I have worked on small scale to large scale websites.</p>
                </div>
            </div>{/* /row */}
            <div className="row mt">
                <div className="col-lg-6">
                    <h4>THE THINKING</h4>
                    <p>A bird sitting on a tree is never afraid of the branch breaking, because her trust is not in the branch, but in her own wings.</p>
                </div>

                <div className="col-lg-6">
                    <h4>THE SKILLS</h4>
                    ReactJS
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '35%' }}>
                            <span className="sr-only">35% Complete</span>
                        </div>
                    </div>
                    PHP
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                            <span className="sr-only">60% Complete</span>
                        </div>
                    </div>
                    Codeigniter
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                            <span className="sr-only">60% Complete</span>
                        </div>
                    </div>
                    Laravel
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                            <span className="sr-only">40% Complete</span>
                        </div>
                    </div>
                    Java
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                            <span className="sr-only">50% Complete</span>
                        </div>
                    </div>
                    HTML + CSS
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                            <span className="sr-only">60% Complete</span>
                        </div>
                    </div>
                    JavaScript
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                            <span className="sr-only">60% Complete</span>
                        </div>
                    </div>
                    Python
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}>
                            <span className="sr-only">40% Complete</span>
                        </div>
                    </div>
                    NodeJs
                    <div className="progress">
                        <div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{ width: '55%' }}>
                            <span className="sr-only">55% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
