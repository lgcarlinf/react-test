import { useState } from "react";
import { SearchSVG } from "./icons/search.icon";

interface SearchInputProps {
    handleSubmit: (input: string) => void;
}

export const SearchInput = ({handleSubmit}:SearchInputProps) => {

    const [input, setInput] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(input);
        setInput('');
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return (
        <form className="relative mx-4 lg:mx-0" onSubmit={onSubmit}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchSVG />
            </span>
            <input
                type="text"
                className="w-full h-10 py-2 pl-10 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-[#00A76F] focus:outline-none focus:ring focus:ring-[#94e8cc] focus:ring-opacity-40"
                placeholder="Search"
                value={input}
                onChange={onChange}
            />
        </form>
    )
};