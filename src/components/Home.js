import React from 'react'
import InfoTable from './InfoTable'
import Map from './Map'
import AddNode from './AddNode'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

// Create a react component called "Home"
class Home extends React.Component {

    // Render function is what the component looks like
    render() {
        // Returns JSX (HTML)
        // <Provider store={store}> gives the components inside it access to the redux store
        // <Map/> is the Map.js component
        // <NodeList/> is the NodeList.js component
        return (
            <Provider store={store}>
                <div className='map'>
                    <Map/>
                    <AddNode/>
                    <InfoTable/>
                </div>
            </Provider>
        );
    }
}

// Exports the "Home" object for use in other files
export default Home;