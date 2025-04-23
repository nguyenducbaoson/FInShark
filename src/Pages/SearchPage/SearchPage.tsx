import React, { SyntheticEvent, useState } from 'react'
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';

type Props = {}

const SearchPage = (props: Props) => {

    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
        console.log(e);
    }

    const onSearchSubmit = async (e: SyntheticEvent) =>{
      e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result === 'string'){
        setServerError(result);
      }else if(Array.isArray(result.data)){
          setSearchResult(result.data);
      }
      console.log("setSearchResult",setSearchResult);
    };

    const onPortfolioCreate = (e: any) =>{
      e.preventDefault();
      const exist = portfolioValues.find((value) => value === e.target[0].value);
      if(exist) return;
      const updatePortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatePortfolio);
    }

    const onPortfolioDelete = (e: any) =>{
      e.preventDefault();
      const removed = portfolioValues.filter(value => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
    }
    
  return (
    <>
    <Search search = {search} handleSearchChange = {handleSearchChange} onSearchSubmit={onSearchSubmit}/>
    {serverError && <h1>{serverError}</h1>}
    <ListPortfolio portfolioValues = {portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
    <CardList searchResults = {searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </>
  )
}

export default SearchPage