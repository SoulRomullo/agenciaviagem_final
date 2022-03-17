import React, {Component} from 'react'
import './style.css'

class FooterComponent extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return (
            <div>
                <footer>
                    <p className='container'>
                        <hr/>
                        &copy; 2022 - desenvolvido por Romullo Santos.
                    </p>
                </footer>
            </div>
        );
    }

}

export default FooterComponent;