import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchView = styled.View`
	padding: ${(props) => props.theme.sizes[3]};
`;

const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
	const { search, keyword } = useContext(LocationContext);

	const [searchQuery, setSearchQuery] = useState(keyword);
	const onChangeSearch = (query) => {
		setSearchQuery(query);
	};
	useEffect(() => {
		setSearchQuery(keyword);
	}, [keyword]);
	return (
		<SearchView>
			<Searchbar
				icon={isFavouritesToggled?"heart":"heart-outline"}
				onIconPress={onFavouritesToggle}
				placeholder='Search for a location'
				onChangeText={onChangeSearch}
				value={searchQuery}
				onSubmitEditing={() => search(searchQuery)}
			/>
		</SearchView>
	);
};

export default Search;
