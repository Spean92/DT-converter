import React, {Component}from 'react';
import './mainComponent.css';

const numberArray = [``,`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,
    `ten`,`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`,
    `twenty`,``,``,``,``,``,``,``,``,``,
    `thirty`,``,``,``,``,``,``,``,``,``,
    `forty`,``,``,``,``,``,``,``,``,``,
    `fifty`,``,``,``,``,``,``,``,``,``,
    `sixty`,``,``,``,``,``,``,``,``,``,
    `seventy`,``,``,``,``,``,``,``,``,``,
    `eighty`,``,``,``,``,``,``,``,``,``,
    `ninety`,``,``,``,``,``,``,``,``,``
];

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberByText: ``
        };
    }

    textTransformer(number) {
        let textNumber = ``;
        let currentNumber = number;
        let nLength = currentNumber.length;
        let firstSymbol = currentNumber.split(``)[0];

        console.log(firstSymbol);
        console.log(currentNumber);

        if (nLength === 1){
            textNumber = numberArray[currentNumber];
        }
        if (nLength === 2){
            if(+firstSymbol === 1) {
                textNumber = numberArray[currentNumber];
            } else {
                //    TODO after 19
            }
        }


        return this.setState({numberByText: textNumber});
    }



    render() {
        return (
            <div>
                <input autoFocus type="text" onChange={(e) => this.textTransformer(e.target.value)}/>
                <div className="textFiled">{this.state.numberByText}</div>
            </div>

        )
    }
}
export default MainComponent;
