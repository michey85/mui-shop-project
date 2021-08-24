const Search = (props) => {
    const { onChange, value } = props;

    return <input type='search' value={value} onChange={onChange} />;
};

export default Search;