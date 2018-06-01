import React, {Component} from 'react';
import TestComponent2 from './TestComponent2';
import smallPic from './assets/images/react_logo_small.jpg';



export default class TestComp extends Component {
    render(){
        return (
            <div>
                Hello 12
                <img src={smallPic} alt=""/>
                <TestComponent2/>
            </div>
        )
    }
}