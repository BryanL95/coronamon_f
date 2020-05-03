import React, { Component } from 'react';
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

        //this.customComponent = this.customComponent.bind(this);
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
    
    /*customComponent(type: string) {
        console.log("entra");
        
    }*/

    render() {
        const { error, data } = this.state
        if(error) {
            return <h1>Error</h1>
        }
        if (data.length > 0 ) {
            return (
                <div className="LastCountry">
                    <h1>{data[0].Country}</h1>
                    <h1>{data[0].Confirmed}</h1>
                    <h1>{data[0].Deaths}</h1>
                    <h1>{data[0].Recovered}</h1>
                </div>
            )
        }else{
            return <h1>Error</h1>
        }
    };
}
export default Last;