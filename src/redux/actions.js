import axios from "axios";
import {
  APIURL,
  ERROR,
  LOADING,
  LOGINSUCCESS,
  LOGOUT,
  REGISTERSUCCESS,
  USERINFOSUCCESS,
  USERINFOUPDATESUCCESS,
} from "./actionTypes";

function isLOADING() {
  return { type: LOADING };
}

function isError() {
  return { type: ERROR };
}

function successLogin(payload) {
  return { type: LOGINSUCCESS, payload };
}

function successRegister(payload) {
  return { type: REGISTERSUCCESS, payload };
}

function successInfo(payload) {
  return { type: USERINFOSUCCESS, payload };
}

function updateSuccessInfo(payload) {
  return { type: USERINFOUPDATESUCCESS, payload };
}

export async function LOGINCALL(dispatch, payload) {
  dispatch(isLOADING());
  try {
    const request = await axios.post(`${APIURL}/user/login`, payload);
    const response = await request.data;

    dispatch(successLogin(response));
  } catch (err) {
    dispatch(isError());
  }
}

export async function REGISTERCALL(dispatch, payload) {
  dispatch(isLOADING());
  try {
    const request = await axios.post(`${APIURL}/user/register`, payload);
    const response = await request.data;

    dispatch(successRegister(response));
  } catch (err) {
    dispatch(isError());
  }
}

export async function UPDATEUSERCALL(dispatch, payload, user, token) {
  dispatch(isLOADING());
  try {
    const request = await axios.patch(`${APIURL}/info/update/${user}`, payload, {
      headers: {
        authorization: token,
      },
    });
    await request.data;

    dispatch(updateSuccessInfo(payload));

  } catch (err) {
    dispatch(isError());
  }
}

export async function GETUSERCALL(dispatch, token) {
  dispatch(isLOADING());
  try {
    const request = await axios.get(`${APIURL}/info/`, {
      headers: {
        authorization: token,
      },
    });
    const response = await request.data;

    dispatch(successInfo(response[0]));
  } catch (err) {
    dispatch(isError());
  }
}

export function LOGOUTCALL(dispatch) {
  dispatch({ type: LOGOUT });
}
