import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
//import logo from '../images/logo.png'
import  G1 from '../images/G1.png'
import G1s from '../images/G1s.jpg'

class Example extends Component {
    constructor() {
        super()
        this.state = { show: false }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                <div>
                    <img src={G1} alt="G1" width="200" onClick={() => { this.handleModal() }} />
                    {/*   <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> */}
                </div>

                <Modal show={this.state.show} onHide={() => this.handleModal()} style={{textAlign:"center"}} size='xl'>
           

                        <div>
                            <img src={G1s} alt="G1s" width="1080" onClick={() => { this.handleModal() }} />
                            {/*   <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> */}
                        </div>
                 
                </Modal>
            </div>
            
        )
    }

}



export default Example