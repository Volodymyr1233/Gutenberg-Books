import React, {useState} from "react";

const useSearch = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const searchBook = (value: string) => {
        setSearchValue(value);
    }

    return [searchValue, searchBook] as const;
}

export default useSearch;