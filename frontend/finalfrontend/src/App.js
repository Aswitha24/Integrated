/*import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import HomeComponent from './components/HomeComponent';
import { Provider } from 'react-redux';
import store from './store';
import AddPayment from './components/payment/AddPayment';
import ViewPayment from './components/payment/ViewPayment';
import PaymentDashboard from './components/payment/PaymentDashboard';
import AddDeliveryBoys from "./components/DeliveryBoys/AddDeliveryBoys";
import DeliveryBoyDashboard from "./components/DeliveryBoys/DeliveryBoyDashboard";
import UpdateDeliveryBoy from "./components/DeliveryBoys/UpdateDeliveryBoy";
import ViewDeliveryBoy from "./components/DeliveryBoys/ViewDeliveryBoy";
import viewFoodCart from './components/foodcart/viewFoodCart';
import UpdateFoodCart from './components/foodcart/UpdateFoodCart';
import AddFoodCart from './components/foodcart/AddFoodCart';
import Timer from "./components/DeliveryBoys/Timer";
import ListRestaurantdetailsComponent from './components/ListRestaurantdetailsComponent';
import AddUser from './components/Registration/AddUser';
import Login from './components/Registration/Login';
import RestaurantOwnerLogin from './components/Registration/RestaurantOwnerLogin';
import UserLogin from './components/Registration/UserLogin';
import foodimg from './Images/foodimg.jpg';
import CreateRestaurantdetailsComponent from './components/CreateRestaurantdetailsComponent';
import ListOrderComponent from './components/ListOrderComponent';
import CreateOrderComponent from './components/CreateOrderComponent';
//import ViewOrderComponent from './components/ViewOrderComponent';
import UpdateRestaurantdetailsComponent from  './components/CreateRestaurantdetailsComponent';
import MyProfile from './components/MyProfile';
import MyUserProfile from './components/MyUserProfile'
import ListFoodCartComponent from './components/ListFoodCartComponent';

import CreateFoodCartComponent from './components/CreateFoodCartComponent';
import UpdateFoodCartComponent from './components/UpdateFoodCartComponent';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import RestaurantOwnerDashboard from './components/Dashboards/RestaurantOwnerDashboard';
import DeliveryBoyDashboardOp from './components/RestaurantOperations/DeliveryBoyDashboardOp';
import ListOrderComponentOp from './components/RestaurantOperations/ListOrderComponentOp';

function App() {
  return (
    //<div class="bg-image" style={{backgroundImage:'url('+foodimg+')',opacity:0.5}}>
      
    <Provider store={store}>
    <Router>
      <HeaderComponent/>
      <Route exact path="/" component={HomeComponent}/>
      <Route exact path="/addPayment" component={AddPayment}/>
      <Route exact path="/paymentDashboard" component={PaymentDashboard}/>
      <Route exact path="/viewPayment/:paymentId" component={ViewPayment}/>
      <Route exact path="/deliveryBoyDashboard" component={DeliveryBoyDashboard}/>
      <Route exact path="/addDeliveryBoy" component={AddDeliveryBoys}/>
      <Route exact path="/updateDeliveryBoy/:deliveryBoyId" component={UpdateDeliveryBoy}/>
      <Route exact path="/viewDeliveryBoy/:deliveryBoyId" component={ViewDeliveryBoy}/>
      <Route exact path="/timer" component={Timer}/>
      <Route exact path="/addUser" component={AddUser}/>
      {/* <Route exact path="/login" component={Login}/> *//*
      <Route path="/login" component={Login}></Route>
      <Route path="/RestaurantOwnerLogin" component={RestaurantOwnerLogin}></Route>
      <Route path="/UserLogin" component={UserLogin}></Route>
      <Route exact path="/addFoodCart" component={AddFoodCart}/>
        <Route exact path="/viewFoodCart/:foodCartId" component={viewFoodCart}/>
        <Route exact path="/updateFoodCart/:foodCartId" component={UpdateFoodCart}/>
        <Route exact path="/AdminDashboard" component={AdminDashboard}/>
        <Route exact path="/RestaurantOwnerDashboard" component={RestaurantOwnerDashboard}/>
        <Route exact path="/RestaurantDeliveryBoyDashboard" component={DeliveryBoyDashboardOp}/>
        <Route exact path="/RestaurantOrders" component={ListOrderComponentOp}/>
        <div className="container">
                    <Switch>
                  
                          <Route path = "/Restaurantdetails" component = {ListRestaurantdetailsComponent}></Route>
                          <Route path = "/add-restaurantdetails/_add" component = {CreateRestaurantdetailsComponent}></Route>
                          <Route path = "/update-restaurantdetails/:restaurantDetailsId" component = {UpdateRestaurantdetailsComponent}></Route>
                         
                         
                    </Switch>
                </div>
    
                <div className="container">
                    <Switch>
                      <Route path="/Order" component = {ListOrderComponent}></Route>
                      <Route path="/addOrder" component = {CreateOrderComponent}></Route>
                      <Route path="/viewOrder/:orderId" component = {ListOrderComponent}></Route>
                      <Route path="/MyProfile" exact component = {MyProfile}></Route>
                    </Switch>
                </div>
                <div className="container">
                    <Switch>
                
                          <Route path = "/FoodCart" component = {ListFoodCartComponent}></Route>
                          <Route path = "/add-foodcart/_add" component = {CreateFoodCartComponent}></Route>
                          <Route path = "/update-foodcart/:foodCartId" component = {UpdateFoodCartComponent}></Route>
                          <Route path="/MyUserProfile" exact component = {MyUserProfile}></Route>
                    </Switch>
                </div>
        
      <br/>
      <FooterComponent/>

    </Router>
    </Provider>
    //</div>
  );
}

export default App;*/

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import HomeComponent from './components/HomeComponent';
import { Provider } from 'react-redux';
import store from './store';
import AddPayment from './components/payment/AddPayment';
import ViewPayment from './components/payment/ViewPayment';
import PaymentDashboard from './components/payment/PaymentDashboard';
import AddDeliveryBoys from "./components/DeliveryBoys/AddDeliveryBoys";
import DeliveryBoyDashboard from "./components/DeliveryBoys/DeliveryBoyDashboard";
import UpdateDeliveryBoy from "./components/DeliveryBoys/UpdateDeliveryBoy";
import ViewDeliveryBoy from "./components/DeliveryBoys/ViewDeliveryBoy";
import viewFoodCart from './components/foodcart/viewFoodCart';
import UpdateFoodCart from './components/foodcart/UpdateFoodCart';
import AddFoodCart from './components/foodcart/AddFoodCart';
import Timer from "./components/DeliveryBoys/Timer";
//import ListRestaurantdetailsComponent from './components/ListRestaurantdetailsComponent';
import AddUser from './components/Registration/AddUser';
import Login from './components/Registration/Login';
import RestaurantOwnerLogin from './components/Registration/RestaurantOwnerLogin';
import UserLogin from './components/Registration/UserLogin';

//import CreateRestaurantdetailsComponent from './components/CreateRestaurantdetailsComponent';

//import ViewOrderComponent from './components/ViewOrderComponent';
//import UpdateRestaurantdetailsComponent from  './components/CreateRestaurantdetailsComponent';
import MyProfile from './components/MyProfile';
import MyUserProfile from './components/MyUserProfile'
import ListFoodCartComponent from './components/ListFoodCartComponent';
import Dashboard from './components/foodcart/Dashboard';
import CreateFoodCartComponent from './components/CreateFoodCartComponent';
import UpdateFoodCartComponent from './components/UpdateFoodCartComponent';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import RestaurantOwnerDashboard from './components/Dashboards/RestaurantOwnerDashboard';
import DeliveryBoyDashboardOp from './components/RestaurantOperations/DeliveryBoyDashboardOp';
//import ListOrderComponentOp from './components/RestaurantOperations/ListOrderComponentOp';
//import ListRestaurantdetailsComponentOp from './components/UserOperations/ListRestaurantdetailsComponentOp';
import AddPaymentOp from './components/UserOperations/AddPaymentOp';
//import CreateOrderComponentOp from './components/UserOperations/CreateOrderComponentOp';
import AddToFoodCart from './components/UserOperations/AddToFoodCart';

import ListRestaurantDetail from './components/Restaurant/ListRestaurantDetail';
import UpdateRestaurantDetail from './components/Restaurant/UpdateRestaurantDetail';
import AddRestaurantDetail from './components/Restaurant/AddRestaurantDetail';
import UserRestaurantDetail from './components/UserOperations/UserRestaurantDetail';
import React,{useState,useEffect} from 'react';
import Thankyou from './components/DeliveryBoys/Thankyou';
import RestroOwnerRegisterForm from './components/Registration/RestroOwnerRegisterForm';
import UpdateOrder from './components/order/UpdateOrder';
import AddOrder from './components/order/AddOrder';
import OrderDashboard from './components/order/OrderDashboard';
import FoodCartItem from './components/foodcart/FoodCartItem';
function App() {
  /*const[loading,setLoading] = useState(false);
    useEffect( () =>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },8000 )
    }, [])*/
  return (
    <Provider store={store}>
    <Router>
      <HeaderComponent/>
      <Route exact path="/" component={HomeComponent}/>
      <Route exact path="/addPayment" component={AddPayment}/>
      <Route exact path="/paymentDashboard" component={PaymentDashboard}/>
      <Route exact path="/viewPayment/:paymentId" component={ViewPayment}/>
      <Route exact path="/deliveryBoyDashboard" component={DeliveryBoyDashboard}/>
      <Route exact path="/addDeliveryBoy" component={AddDeliveryBoys}/>
      <Route exact path="/updateDeliveryBoy/:deliveryBoyId" component={UpdateDeliveryBoy}/>
      <Route exact path="/viewDeliveryBoy/:deliveryBoyId" component={ViewDeliveryBoy}/>
     <Route exact path="/timer" component={Timer}/>
     <Route exact path="/thankyou" component={Thankyou}/>
      <Route exact path="/addUser" component={AddUser}/>
      <Route exact path="/RestroOwnerRegisterForm" component={RestroOwnerRegisterForm}/>
      {/* <Route exact path="/login" component={Login}/> */}
      <Route path="/login" component={Login}></Route>
      <Route path="/RestaurantOwnerLogin" component={RestaurantOwnerLogin}></Route>
      <Route path="/UserLogin" component={UserLogin}></Route>
      <Route exact path="/addFoodCart" component={AddFoodCart}/>
        <Route exact path="/viewFoodCart/:foodCartId" component={viewFoodCart}/>
        <Route exact path="/updateFoodCart/:foodCartId" component={UpdateFoodCart}/>
        <Route exact path="/AdminDashboard" component={AdminDashboard}/>
        <Route exact path="/RestaurantOwnerDashboard" component={RestaurantOwnerDashboard}/>
        <Route exact path="/RestaurantDeliveryBoyDashboard" component={DeliveryBoyDashboardOp}/>

        <Route exact path="/foodCartDashboard" component={Dashboard}/>
        {/*<Route exact path="/userDashboard" component={ListRestaurantdetailsComponentOp}/>*/}
        <Route exact path="/payNow" component={AddPaymentOp}/>
        
        <Route exact path="/addToFoodCart" component={AddToFoodCart}/>
        
        <Route exact path="/addRestaurantDetail" component={AddRestaurantDetail}/>
        <Route exact path="/listRestaurantDetail" component={ListRestaurantDetail}/>
        <Route exact path="/updateRestaurantDetail/:restaurantDetailsId" component={UpdateRestaurantDetail}/>
        <Route exact path="/userRestaurantDetail" component={UserRestaurantDetail}/>
        <Route exact path="/orderdashboard" component={OrderDashboard}/>
        <Route exact path="/addOrder" component={AddOrder}/>
        <Route exact path="/updateOrder/:orderId" component={UpdateOrder}/>
        <Route exact path="/foodCartItem" component={FoodCartItem}/>
       
       {/* <div className="container">
                    <Switch>
                  
                          <Route path = "/Restaurantdetails" component = {ListRestaurantdetailsComponent}></Route>
                          <Route path = "/add-restaurantdetails/_add" component = {CreateRestaurantdetailsComponent}></Route>
                          <Route path = "/update-restaurantdetails/:restaurantDetailsId" component = {UpdateRestaurantdetailsComponent}></Route>
                         
                         
                    </Switch>
  </div>*/}
    
                <div className="container">
                    <Switch>
                     
                      <Route path="/MyProfile" exact component = {MyProfile}></Route>
                    </Switch>
</div>
                <div className="container">
                    <Switch>
                
                          <Route path = "/FoodCart" component = {ListFoodCartComponent}></Route>
                          <Route path = "/add-foodcart/_add" component = {CreateFoodCartComponent}></Route>
                          <Route path = "/update-foodcart/:foodCartId" component = {UpdateFoodCartComponent}></Route>
                          <Route path="/MyUserProfile" exact component = {MyUserProfile}></Route>
                    </Switch>
                </div>
        
      <br/>
      <FooterComponent/>
      {/*
      loading ?

      <ClipLoader
      size={150}
      color={"orange"}

      loading={loading}
      
      />
      :
      <Route exact path="/timer" component={Timer}/>
      */}

    
    </Router>
    </Provider>
    
  );
}

export default App;

