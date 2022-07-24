import {useState, useEffect, useCallback, useRef, } from 'react'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Card.css';
import './css/Nav.css';

import { CardList } from './components';
import { NASAService, extractData } from './utils'
import { usePagination } from './hooks';
import useInfiniteScroll from './hooks/useInfiniteScroll';

function App (){
	const [keyword, setKeyword] = useState('');
	const [items, setItems] = useState([]);
	const isMount = useRef(true);
	const lastPageIndex = useRef(0);
	const inputRef = useRef(null);
	const { pageOption, handleChangeCurrentPage, resetPageOption } = usePagination();
	
	const setNextPageListItem = useCallback(async () => {
		const res = await NASAService.fetchDataFromKeyword({ keyword, index: pageOption.currentPage });
		
		const { items, totalHit } = extractData(res);
		lastPageIndex.current = Math.ceil(totalHit / 100);
		
		setItems((prev) => [...prev, ...items]);
		handleChangeCurrentPage();
	}, [items, pageOption]);

	const cardListRef = useInfiniteScroll({
		setNextList: setNextPageListItem,
		isMoreData: pageOption.currentPage < lastPageIndex.current,
	});
	
	useEffect(() => {
		if (isMount.current) {
			isMount.current = false;
			setNextPageListItem();
			inputRef.current.focus();
		}
	}, []);
	
	const handleChangeInput = e => {
		setKeyword(e.target.value);
	};
	
	const handleClickSearchButton = async () => {
		resetPageOption();
		const res = await NASAService.fetchDataFromKeyword({ keyword, index: pageOption.currentPage });
		
		const { items, totalHit } = extractData(res);
		lastPageIndex.current = Math.ceil(totalHit / 100);
		setItems(items);
	}
	
	const handleSubmitForm = useCallback((e) => {
		e.preventDefault();
		handleClickSearchButton();
	})

	return (
	
		<>
			<nav className="navbar navbar-light bg-light justify-content-between">
  				<h1 className="navbar-brand">NASA IMAGE</h1>
				<form  className="form-inline" onSubmit={handleSubmitForm}>
					<input 
						aria-label="Search"
						type="search"
						className="form-control mr-sm-2"
						onChange={handleChangeInput}
						value={keyword}
						placeholder="검색어를 입력해 주세요."
						ref={inputRef}
					/>
					<button  className="btn btn-outline-success my-2 my-sm-0" onClick={handleClickSearchButton}>검색</button>
				</form>
			</nav>

			<CardList items={items} cardListRef={cardListRef} />
		</>
	);
}

export default App;
