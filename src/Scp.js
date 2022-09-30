//import the needed webhooks.
import {useEffect, useState} from 'react';

function Scp()
{
    //create current state and set or update state variables
    //use empty array as we want to display all records in the collection
    //this will be uatomatically stored into this empty array
    const [state, setState] = useState([]);

    //function to connect to RestDB and grab data 
    //and update our setState variable

function getData()
{
    //code from RestDB to connect to their rest API
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        //console.log(this.responseText);

        //save data into a variable
        const scpData = JSON.parse(this.responseText);

        //update our component state (setState)
        setState(scpData);

    }
    });

    xhr.open("GET", "https://assignment2-149f.restdb.io/rest/scpdb");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "6332162932330102d591d213");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

//use the useEffect webhook we can now tell the DOM to display the data
//first argument is function to grab the data, second argument is to
//update our current state with the data
useEffect(
    ()=>{
        getData();
    }, [state]
);

    return(
        <div>
            {
                state && state.map(
                    scp =>
                    <div className="row mb-5 justify-content-center" key="{kenworth.Model}">
                        <div className="col-10">
                            <div classname="card shadow">
                                <div className="border rounded shadow p-3 mb-3 text-center">
                                    <h2>{scp.Item}</h2>
                                    <h3>{scp.Class}</h3>
                                    <p>{scp.Description}</p>
                                    <p>{scp.Containment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Scp;