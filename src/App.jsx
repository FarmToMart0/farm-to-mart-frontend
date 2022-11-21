import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FarmerLayout from "./layouts/FarmerLayout";

import Home from "./pages/home/index";
import Login from "./pages/signin/admin/index";
import AddGSOPage from "./components/addGSO/index";
import AddCropData from "./components/addCropData/index";
import ShowGSO from "./components/gsoDetails/index";
import HomeMainOfficer from "./pages/homeMainOfficer/index";
import AddFarmer from "./components/add_farmer/index";
import GSOHome from "./pages/gsoHome/index";
import FarmerSignUp from "./pages/farmer/SignUp/index";
import BuyerSignUp from "./pages/buyerSignUp/index";
import Dash from "./pages/F-Dashboard/index";
import SuccessReg from "./pages/registrationSucess/index";
import SuccessCrop from "./pages/addCropSucess/index";
import SuccessRemoveFarmer from "./pages/farmerRemoveSuccess/index";
import SuccessRegGso from "./pages/gsoRegSucces";
import SuccessRemoveGso from "./pages/gsoRemoveSuccess";
import SuccessUpdateGso from "./pages/gsoUpdatesuccess";

import Market from "./pages/market/index";

import Success from "./pages/OrderComplete/index";
// import Success from './components/order_complete' ;

import ShoppingCard from "././pages/shoppingCard/index";
import Card2 from "./components/signup_button/index";
import Payment from "./pages/Payment/index";

import OrderReview from "./pages/orderReview";

import { BrowserRouter } from "react-router-dom";

import Bidding from "./pages/Bidding/index";
import FarmerVerification from "./pages/FarmerVerification/index";
import ForgotPassword from "./pages/farmer/ForgotPassword";
import ResetPasswordUi from "./pages/farmer/ResetPasswordUi/index";
import Pay from "./components/payment/payment/index";
// import ShoppingCard from './pages/shoppingCard/index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/farmer/dash/:page" element={<FarmerLayout />} />
        <Route path="/buyer/market" element={<Market />} />
        <Route path="/buyer/market/bidding" element={<Bidding />} />
        <Route path="/buyer/market/checkout" element={<ShoppingCard />} />
        <Route
          path="/buyer/market/checkout/payment"
          element={<Payment />}
          exact
        />
        <Route
          path="/buyer/market/checkout/payment/complete"
          element={<Success />}
        />
        <Route path="/pay" element={<Pay />} />
        <Route path="/buyer/orderreview" element={<OrderReview />} />

        {/* <Route path="/home" element={<Home/>} exact /> */}

        <Route path="/" element={<Home />} exact />

        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/resetpassword/:email/:id/:token"
          element={<ResetPasswordUi />}
        />
        <Route path="/verify/:token" element={<FarmerVerification />} />
        <Route path="/main-officer/add-gso" element={<AddGSOPage />} />
        <Route path="/main-officer/register-gso" element={<AddGSOPage />} />
        <Route path="/gso/add-crop-data" element={<AddCropData />} />
        <Route path="/main-officer/show-gso" element={<ShowGSO />} />
        <Route path="/main-officer/home" element={<HomeMainOfficer />} />
        <Route path="/gso/home" element={<GSOHome />} />
        <Route path="/gso/register-farmer" element={<AddFarmer />} />
        <Route path="/farmer/signup" element={<FarmerSignUp />} />
        <Route path="/buyer/signup" element={<BuyerSignUp />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/gso/success-register-farmer" element={<SuccessReg />} />
        <Route path="/gso/success-add-crop" element={<SuccessCrop />} />
        <Route
          path="/gso/success-remove-farmer"
          element={<SuccessRemoveFarmer />}
        />
        <Route
          path="/main-officer/success-register-gso"
          element={<SuccessRegGso />}
        />
        <Route
          path="/main-officer/success-remove-gso"
          element={<SuccessRemoveGso />}
        />
        <Route
          path="/main-officer/success-update-gso"
          element={<SuccessUpdateGso />}
        />

        {/* ==================Buyer================ */}

        <Route path="/card2" element={<Card2 />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
