import React, {Component} from 'react';
import './colorgrid.css'


class ColorGrid extends Component {

    state = {
        actPicUrl: 'https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/45235906_2168610916512114_6995413092708384768_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zfNhFW1BJOcAX87E3jR&_nc_ht=scontent-bos5-1.xx&oh=00_AfApV0zGATfZCsDMz2kRNNJtPMzzIkfVtLxEilidAMC38Q&oe=63B12770',
        actDec: '--Retrieved activity description right here--',
        colorChose: 'N/A',
    }

    handleColorChose = (param) => {
        this.setState({colorChose: param});
    }

    handleColorExport = () => {
        if (this.state.colorChose === 'N/A') {
            alert("Please select a color to continue");
        }
    }

    render() {
        return( (
            <div class='container'>
                <div class='column'>
                    <h2>Your activity</h2>
                    <div class='row'>
                        <button class='scb1'>‎</button>
                        <button class='scb2' >‎</button>
                        <button class='scb3' >‎</button>
                        <button class='scb4' >‎</button>
                        <button class='scb5' >‎</button>
                        <button class='scb6' >‎</button>
                        <button class='scb7' >‎</button>
                    </div>
                    <div class='row'>
                        <button class='scb8' >‎</button>
                        <button class='scb9' >‎</button>
                        <button class='scb10' >‎</button>
                        <button class='scb11' >‎</button>
                        <button class='scb12' >‎</button>
                        <button class='scb13' >‎</button>
                        <button class='scb14' >‎</button>
                    </div>
                    <div class='row'>
                        <button class='scb15' >‎</button>
                        <button class='scb16' >‎</button>
                        <button class='scb17' >‎</button>
                        <button class='scb18' >‎</button>
                        <button class='scb19' >‎</button>
                        <button class='scb20' >‎</button>
                        <button class='scb21' >‎</button>
                    </div>
                    <div class='row'>
                        <button class='scb22' >‎</button>
                        <button class='scb23' >‎</button>
                        <button class='scb24' >‎</button>
                        <button class='scb25' >‎</button>
                        <button class='scb26' >‎</button>
                        <button class='scb27' >‎</button>
                        <button class='scb28' >‎</button>
                    </div>
                </div>        
            </div>
        ));
    }
}

export default ColorGrid;