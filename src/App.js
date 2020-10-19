import React, {Component} from 'react';
import './App.css';
import FormTakeData from "./components/content/form/FormTakeData";
import GenerationData from "./components/content/generationData/GenerationData";

class App extends Component {
    render() {
        return (
            <div className="main">
                <div className="wrap-weather">
                    <div className="container">
                        <FormTakeData/>
                        <GenerationData/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
