import React from "react";
import Input from "../Input";
import { search } from "../../../assets/icons";
import { InputContainer, InputIcon, SearchButton } from "./Styles";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...props }) => (
  <InputContainer>
    <InputIcon src={search} />
    <Input {...props} />
    <SearchButton onClick={onSearch}>Search</SearchButton>
  </InputContainer>
);

export default SearchInput;
