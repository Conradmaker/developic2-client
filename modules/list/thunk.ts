import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}
