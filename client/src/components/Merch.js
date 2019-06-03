import React, { Component } from 'react';
import axios from 'axios';

class Merch extends Component{
    state = {

    };

    componentDidMount(){
        const header = {
            "Authorization": `Basic ${PRINTIFY_API_TOKEN}`,
            "User-Agent": "client"
        }
        axios.get('https://api.printful.com/', header, {
            withCredentials: true
        })
            .then(response => {
                console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Merch;