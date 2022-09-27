import React from 'react';

const PageNotFound = () => {

    const myStyleH1 = {
        textAlign: 'center',
        fontSize: '150px',
    }

    const myStyleH3 = {
        textAlign: 'center',
        fontSize: '50px',
    }

    const styleP = {
        textAlign: 'center',
        fontSize: '20px',
    }

    return (
        <>

            <div className="home active section" id="home">
                <div className="container">
                    <h1 style={myStyleH1}> 404 </h1>
                    <h3 style={myStyleH3}>Page NOt Found</h3>
                    <marquee behavior="" direction=""><p style={styleP}>Please Enter a Valid URL :/</p></marquee>
                </div>
            </div>

        </>
    )
}

export default PageNotFound
