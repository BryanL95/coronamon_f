import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

interface Match {
    match: Params2
}

interface Params2 {
    params: Country
}

interface Country {
    country: string
}

interface Props {
    country: string,
    error: any,
    data: any
}

class Last extends Component<Match, Props> {
    constructor(props: any) {
        super(props);

        this.state = {
            country: this.props.match.params.country,
            error: null,
            data: []
        };
    }

    componentDidMount(){
        const { country } = this.state;
        var param = (country !== undefined) ? "/" + country : "";
        axios.get(`http://localhost:3001/last-day` + param)
        .then(res => {
            this.setState({
                data: res.data
            })
        }).catch(error => {
            this.setState({
                error
            })
        });
    }

    render() {
        const { error, data } = this.state
        if(error) {
            return <Redirect to='/404' />
        }
        if (data.length > 0 ) {
            const response = data.map((val: any, index: number) =>
                //[ <h1></h1>, <h1></h1>] // For multiple lines use an array for group tags
                <tr>
                    <td key={index}>{val.Country}</td>
                    <td key={index + "c"}>{val.Confirmed}</td>
                    <td key={index + "d"}>{val.Deaths}</td>
                    <td key={index + "r"}>{val.Recovered}</td>
                </tr>
            );
            return (
                <div className="LastCountry">
                    <table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Confirmeds</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                        {response}
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return <h1>No data</h1>
        }
    };
}
export default Last;