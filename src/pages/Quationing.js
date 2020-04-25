import React, { Component } from 'react';
import Layout from '../components/Layout';
import Qcard from '../components/Qcard';
import '../Style/common.css'
class Examing extends Component {
    state = {  }
    render() { 
        return (
                <Layout>
                    <div>
                        <h6 className="root">Grade 5 / ganithaya / Parimithiya</h6>
                        <Qcard/>
                    </div>
                </Layout>
           );
    }
}
 
export default Examing;