import React from 'react';
import AdminSideMenu from '../components/AdminSideMenu';
import MakeQuation from '../components/MakeQuations';
import Layout from '../components/Layout';

const MakeQuations=()=>{
    return(
        <Layout>
            <div className="admin_row">
                <div className="admin_sideMenu_container">
                    <AdminSideMenu/>
                </div>
                <div className="admin_content_container">
                    <MakeQuation/>
                </div>
                <div></div>
            </div>
        </Layout>
    )
}

export default MakeQuations;