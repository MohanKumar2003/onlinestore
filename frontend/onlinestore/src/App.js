import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

	let api = axios.create({
		baseURL:'http://localhost:8080/api'
	})
	useEffect(
		()=> {
			getProducts()
		},[]
	)
	async function getProducts() {
		let res = await api.get('/products')
		
		updateProducts(res.data)
		console.log(res.data)
	}
}

export default App;