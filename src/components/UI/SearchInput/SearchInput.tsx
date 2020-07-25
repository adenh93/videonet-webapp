import React, { forwardRef } from "react";
import Input from "../Input";
import { search } from "../../../assets/icons";
import { InputContainer, InputIcon, SearchButton } from "./Styles";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, ...props }, ref) => (
    <InputContainer>
      <InputIcon src={search} />
      <Input {...props} ref={ref} />
      <SearchButton onClick={onSearch}>Search</SearchButton>
    </InputContainer>
  )
);

export default SearchInput;
