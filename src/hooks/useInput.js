import { useState } from 'react';

const useInput = () => {
	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);
		return { inputData: params.get('title') || '' };
	};

	const [inputData, setInputData] = useState(getQueryParams().inputData);

	const handleChange = e => {
		const { name, value } = e.target;

		setInputData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleChangeSearch = e => {
		const { value } = e.target;
		setInputData(value);
	};

	return { inputData, setInputData, handleChange, handleChangeSearch };
};

export default useInput;
