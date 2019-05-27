import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AddNodeForm from './AddNodeForm'
import NodeList from './NodeList'
import {addNode} from '../redux/reducers/markers'

class AddNode extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            show: false,
            devid: '',
            lat: '',
            lng: '',
            street: ''
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        this.props.dispatch(
            addNode({
                devid: this.state.devid,
                lat: this.state.lat,
                lng: this.state.lng,
                street: this.state.street
            }));
        this.setState({ show: false });
        event.preventDefault();
    }
    
    handleCancel() {
        this.setState({ 
            show: false,
            devid: '',
            lat: '',
            lng: '',
            street: ''
        });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    
    render() {
        return (
            <>
                <Button className='absolute top left mt12 ml12 shadow' variant="light" onClick={this.handleShow}>
                    Nodes
                </Button>

                <Modal show={this.state.show} onHide={this.handleCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nodes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultActiveKey="add" transition={false} id="noanim-tab-example">
                            <Tab eventKey="add" title="Add a Node">
                                <AddNodeForm 
                                    handleInputChange={this.handleInputChange}
                                    devid={this.state.devid}
                                    lat={this.state.lat}
                                    lng={this.state.lng}
                                    street={this.state.street}/>
                            </Tab>
                            <Tab eventKey="view" title="View All Nodes">
                                <NodeList
                                    markers={this.props.markers}/>
                            </Tab>
                        </Tabs>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCancel}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const AddNodeContainer = connect(
    state => ({
        markers: state.markers.data
      }),
  )(AddNode)

export default AddNodeContainer