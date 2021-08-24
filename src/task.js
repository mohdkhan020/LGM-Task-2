
import React, { useState } from 'react';
import Loading from './Loading';

const GetUsers = () => {
    const onClick = async () => {
        setLoading(true);
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);

    }

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    return (

        <div className="heading">
            <nav className=".nav">
                <h1>Apple</h1>
                <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" width="40px" alt="error"></img>
                <button className="button1" onClick={onClick}>Get Users🍎</button>
            </nav>
            <h2>Let's Grow More</h2>
            <div className="cards">

                {loading ? (<Loading />) : null}
                {
                    users?.map((curElem) => {
                        return (

                            <div key={curElem.id}>
                                <div className="cards">
                                    <div className="card">
                                        <img
                                            className="card_image" src={curElem.avatar} alt="error" />

                                        <div className="card_info">
                                            <h4 className="card_category">{curElem.first_name}</h4>
                                            <h4 className="card_titles">{curElem.last_name}</h4>
                                            <span className="card_title">{curElem.email}</span>  </div>

                                    </div>
                                </div>

                            </div>




                        );
                    })
                }

            </div>
        </div>


    );
}
export default GetUsers;











