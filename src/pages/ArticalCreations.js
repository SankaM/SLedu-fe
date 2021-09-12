import React from 'react';
import AdminSideMenu from '../components/AdminSideMenu';
import CreateArtical from '../components/CreateArtical';
import Layout from '../components/Layout';

const ContentCreations=()=>{
    return(
        <Layout>
            <div className="admin_row">
                <div className="admin_sideMenu_container">
                    <AdminSideMenu/>
                </div>
                <div className="admin_content_container">
                    <CreateArtical/>
                </div>
                <div></div>
            </div>
        </Layout>
    )
}

export default ContentCreations;