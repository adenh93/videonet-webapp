import React, { forwardRef } from "react";
import Input from "../Input";
import { search } from "../../../assets/icons";
import { InputContainer, InputIcon, SearchButton } from "./Styles";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (e: React.FormEvent) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, ...props }, ref) => (
    <form onSubmit={onSearch}>
      <InputContainer>
        <InputIcon src={search} />
        <Input {...props} ref={ref} />
        <SearchButton type="submit">Search</SearchButton>
      </InputContainer>
    </form>
  )
);

export default SearchInput;
