// Things left to do
// 1. Handle in inputs from previous page, and package them into state
// 2. Handle output from this page to send to results page

import React, {Component} from 'react';
import './colorselect.css'
import { useAuth0 } from "@auth0/auth0-react"

class ColorTest extends Component {

    state = {
        actPicUrl: 'https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/45235906_2168610916512114_6995413092708384768_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zfNhFW1BJOcAX87E3jR&_nc_ht=scontent-bos5-1.xx&oh=00_AfApV0zGATfZCsDMz2kRNNJtPMzzIkfVtLxEilidAMC38Q&oe=63B12770',
        actDec: '--Retrieved activity description right here--',
        colorChose: 'N/A',
    }

    handleColorChose = (param) => {
        this.setState({colorChose: param});
    }

    handleColorExport = () => {
        if (this.state.colorChose == 'N/A') {
            alert("Please select a color to continue");
        }
    }

    render() {
        return( (
            <div class='container'>
                <div class='column'>
                    <h2>Your activity</h2>
                    <img src={this.state.actPicUrl} width='65%'></img>
                    <p>{this.state.actDec}</p>
                </div>
                <div class='column'>
                    <h2>Select a color for today's activity!</h2>
                    <button class='scb1' onClick={() => this.handleColorChose('yellow')}>‎</button>
                    <button class='scb2' onClick={() => this.handleColorChose('blue')}>‎</button>
                    <button class='scb3' onClick={() => this.handleColorChose('purple')}>‎</button>
                    <button class='scb4' onClick={() => this.handleColorChose('green')}>‎</button>
                    <button class='scb5' onClick={() => this.handleColorChose('red')}>‎</button>
                    <div id='hidden-at-first'>
                        <p>Is {this.state.colorChose} the right color?</p>
                        <p>Keep in mind you can't change the color later</p>
                        <p>The color and your activity chosen for today will be saved in your profile which you can view later!</p>
                        <div>
                            <button class='confirm' onClick={this.handleColorExport}>Yes</button>
                        </div>
                    </div>  
                </div>        
            </div>
        ));
    }
}

export default ColorTest;