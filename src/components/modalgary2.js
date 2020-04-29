import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
//import logo from '../images/logo.png'
import  G2 from '../images/G2.png'
import G2s from '../images/G2s.png'

class Example1 extends Component {
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
                    <img src={G2} alt="G2" width="200" onClick={() => { this.handleModal() }} />
                    {/*   <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> */}
                </div>

                <Modal show={this.state.show} onHide={() => this.handleModal()} style={{textAlign:"center"}} size='xl'>
           

                        <div>
                            <img src={G2s} alt="G2s" width="1080" onClick={() => { this.handleModal() }} />
                            {/*   <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt="mypic" width="200" /> */}
                        </div>
                 
                </Modal>
            </div>
            
        )
    }

}



export default Example1