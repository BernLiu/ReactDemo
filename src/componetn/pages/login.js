import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';

const FormItem = Form.Item;

class Login extends React.Component{

    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            passwork: ''
        };

        this.state = this.initialState;
    }
    
    componentWillMount(){
        const { receiveData } = this.props;
        receiveData (null,'auth');
    }

    componentDidUpdate(prevProps){
        const { auth : nextAuth= {}, history} =this.props;
        if(nextAuth.data && nextAuth.data.uid ){
            //判断是否登录
            sessionStorage.setItem('user',JSON.stringify(nextAuth.data));
            history.push('/');
        }

        handleSubmit =(e)=>{
            e.preventDefault();
            this.props.form.validateFields(
                (err,values) =>{
                    if(!err){
                        console.log('Received values of form: ',values);
                        const{ fetchData }=this.props;

                    }
                }
            );
        }
    };

    otherLogin =() =>{
        window.location.href='';
    }

    render(){
        const {getFieldDecorator } = this.props.form;
        return(
            <div className = "login">
                <div className = "login-form">
                    <div className="login-logo">
                        <span></span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth:'300px'}}>
                        <FormItem>
                            {  getFieldDecorator
                                ('userName',
                                    {rules:
                                        [{required:true,message:'please sign username'}],})
                                (
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="username" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator
                                ('password',
                                    {rules:
                                        [{required:true,message:'please sign password'}],})
                                (
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator(
                                    'remember',{
                                        valuePropName : 'checked',
                                        initialState : true
                                    }
                                )(
                                    <Checkbox>Remember me</Checkbox>
                                )
                            }
                            <span className = 'login-form-forgot' href="" style = {{float :'right'}}>forgot password</span>
                            <Button type='primary' htmlType='submit' className='login-form-button' style={{width:'100%'}}>Sign In</Button>
                            <p style = {{display:'flex',justifyContent:'space-between'}}>
                                <span>Sign Now</span>
                                <span onClick={this.otherLogin}><Icon></Icon>Others Sign In</span>
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToPoros = state => {
    const {auth} = state.httpData;
    return {auth};
}

const mapDispatchToProps = dispatch =>({
    fetchData : bindActionCreators(fetchData,dispatch),
    receiveData : bindActionCreators(receiveData,dispatch)
});

export default connect(mapStateToPorps, mapDispatchToProps)(Form.create()(Login));