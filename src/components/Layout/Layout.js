import React, { useEffect, useState } from 'react';
import './Layout.css';
import Card from '../Card/Card';

function Layout(props) {
    const order = props.order;
    const group = props.group;

    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    let result0;    // status
    let olapriority;
    let olatitle;
    let results00 = {}; // status and priority
    let results01 = {}; // status and title

    if (data.tickets) {
        result0 = data.tickets;
        olapriority = result0.sort((p1, p2) => (p1.priority < p2.priority) ? 1 : (p1.priority > p2.priority) ? -1 : 0);

        for (const ticket of olapriority) {
            const status = ticket.status;

            if (!results00[status]) {
                results00[status] = [];
            }

            results00[status].push(ticket);
        }
    }
    if (data.tickets) {
        result0 = data.tickets;
        olatitle = result0.sort((p1, p2) => (p1.title < p2.title) ? -1 : (p1.title > p2.title) ? 1 : 0);

        for (const ticket of olatitle) {
            const status = ticket.status;

            if (!results01[status]) {
                results01[status] = [];
            }

            results01[status].push(ticket);
        }
    }
    let result1;    // user
    let userpriority;
    let usertitle;
    let results10 = {}; // user and priority
    let results11 = {}; // user and title

    if (data.tickets) {
        result1 = data.tickets;
        userpriority = result1.sort((p1, p2) => (p1.priority < p2.priority) ? 1 : (p1.priority > p2.priority) ? -1 : 0);

        for (const ticket of userpriority) {
            const status = ticket.userId;

            if (!results10[status]) {
                results10[status] = [];
            }

            results10[status].push(ticket);
        }
    }
    if (data.tickets) {
        result1 = data.tickets;
        usertitle = result1.sort((p1, p2) => (p1.title < p2.title) ? -1 : (p1.title > p2.title) ? 1 : 0);

        for (const ticket of usertitle) {
            const status = ticket.userId;

            if (!results11[status]) {
                results11[status] = [];
            }

            results11[status].push(ticket);
        }
    }
    let result2;    // priority
    let prioritypriority;
    let prioritytitle;
    let results20 = {}; // priority and priority
    let results21 = {}; // priority and title

    if (data.tickets) {
        result2 = data.tickets;
        prioritypriority = result2.sort((p1, p2) => (p1.priority < p2.priority) ? 1 : (p1.priority > p2.priority) ? -1 : 0);

        for (const ticket of prioritypriority) {
            const status = ticket.priority;

            if (!results20[status]) {
                results20[status] = [];
            }

            results20[status].push(ticket);
        }
    }
    if (data.tickets) {
        result2 = data.tickets;
        prioritytitle = result2.sort((p1, p2) => (p1.title < p2.title) ? -1 : (p1.title > p2.title) ? 1 : 0);

        for (const ticket of prioritytitle) {
            const status = ticket.priority;

            if (!results21[status]) {
                results21[status] = [];
            }

            results21[status].push(ticket);
        }
    }
    let people = null;
    if (data.users) {
        people = data.users;
    }

    let selectedResults = null;

    if (group === 0) {
        if (order === 0) {
            selectedResults = results00;
        }
        else if (order === 1) {
            selectedResults = results01;
        }
        return (
            <div className='whole'>
                {Object.keys(selectedResults).map((column) => (
                    <div key={column} className="column">
                        <div className='twoheading'>
                            <div className='oneheading'>
                                <div>
                                    <h3>{column}</h3>
                                </div>
                                <div className='heading1'>
                                    <h3>{selectedResults[column].length}</h3>
                                </div>
                            </div>
                            <div className='oneheading'>
                                <span className="material-symbols-outlined">
                                    more_horiz
                                </span>
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </div>
                        </div>
                        {selectedResults[column].map((item) => (
                            <div key={item.id} className="row">
                                <Card title={item.title} id={item.id} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
    if (group === 1) {
        if (order === 0) {
            selectedResults = results10;
        }
        else if (order === 1) {
            selectedResults = results11;
        }
        return (
            <div className='whole'>
                {Object.keys(selectedResults).map((column) => (
                    <div key={column} className="column">
                        <div className='twoheading'>
                            <div className='oneheading'>
                                <div>
                                    <h3>{people[column.charAt(column.length - 1) - 1].name}</h3>
                                </div>
                                <div className='heading1'>
                                    <h3>{selectedResults[column].length}</h3>
                                </div>
                            </div>
                            <div className='oneheading'>
                                <span className="material-symbols-outlined">
                                    more_horiz
                                </span>
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </div>
                        </div>
                        {selectedResults[column].map((item) => (
                            <div key={item.id} className="row">
                                <Card title={item.title} id={item.id} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
    if (group === 2) {
        if (order === 0) {
            selectedResults = results20;
        }
        else if (order === 1) {
            selectedResults = results21;
        }
        let p = ["No priority", "Low", "Medium", "High", "Urgent"];
        return (
            <div className='whole'>
                {Object.keys(selectedResults).map((column) => (
                    <div key={column} className="column">
                        <div className='twoheading'>
                            <div className='oneheading'>
                                <div>
                                    <h3>{p[column]}</h3>
                                </div>
                                <div className='heading1'>
                                    <h3>{selectedResults[column].length}</h3>
                                </div>
                            </div>
                            <div className='oneheading'>
                                <span className="material-symbols-outlined">
                                    more_horiz
                                </span>
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                            </div>
                        </div>
                        {selectedResults[column].map((item) => (
                            <div key={item.id} className="row">
                                <Card title={item.title} id={item.id} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Layout;