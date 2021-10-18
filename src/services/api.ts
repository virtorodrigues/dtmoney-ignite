import axios from 'axios';
import faunadb from 'faunadb';

export const api = axios.create({
  baseURL: document.location.href + 'api'
})

export const client = new faunadb.Client({
  secret: process.env.REACT_APP_SECRET || ""
});

export const q = faunadb.query;
