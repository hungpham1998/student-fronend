import React,{Component} from 'react';
import {  Route, Switch } from 'react-router-dom';
import Menu from '../Menu';
import NotFound from '../NotFound';
import ListDepartment from '../Department/list';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


class AppLayout extends Component {
    
    render() {
         return (
                 <div>
                <Layout
                    style={{
                        minHeight: '100vh',
                        background: '#ffffff',
                    }}
                 >
                    <Sider>
                        <Menu />
                     </Sider>
                    <Layout>
                        {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                                <Route component={ListDepartment} path='/department' />
                                                <Route component={NotFound} />
                                            </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout> 
                </Layout>
            </div>
        )
    };
};

export default AppLayout;
