import { createSlice } from '@reduxjs/toolkit';
import { USER_DETAILS } from '../../constants';

const userString = localStorage.getItem(USER_DETAILS) || '';
const userObj = userString ? JSON.parse(userString) : null;

const initialState = {
  auth: userObj ? true : false,
  id: userObj?._id,
  firstName: userObj?.firstName,
  lastName: userObj?.lastName,
  email: userObj?.email,
  phone: userObj?.phone,
  nic: userObj?.nic,
  birthday: userObj?.birthday,
  address: userObj?.address,
  postalCode: userObj?.postalCode,
  gsd_zone: userObj?.gsdZone,
  gsd_code: userObj?.gsdCode,
  city: userObj?.city,
  district: userObj?.district,
  userRole: userObj?.userRole,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      
      state.auth = true;
      state.id = action.payload?._id;
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
      state.email = action.payload?.email;
      state.phone = action.payload?.phone;
      state.nic =action.payload?.nic;
      state.gsd_zone=action.payload?.gsdZone;
      state.gsd_code=action.payload?.gsdCode;
      state.birthday = action.payload?.birthday;
      state.address = action.payload?.address;
      state.postalCode = action.payload?.postal_code;
      state.city = action.payload?.city;
      state.district = action.payload?.district;
      state.userRole = action.payload?.userRole;
    },

    logOutRequest: (state) => {
        state.auth = false;
        state.id = '';
        state.firstName = '';
        state.lastName = '';
        state.email = '';
        state.phone = '';
        state.nic ='';
        state.gsd_zone='';
        state.gsd_code='';
        state.birthday = '';
        state.address = '';
        state.postalCode = '';
        state.city = '';
        state.district = '';
        state.userRole = '';
    },
  },
});

export const { loggingRequest, logOutRequest } = userSlice.actions;

export default userSlice.reducer;
