import { myaxios } from '../utils/fetcher';
import axios from "axios";
import { useState } from 'react';

const Response = ({ searchResults }) => {
    return <ul>
        {
            searchResults.map(res => {
                return <li key={res} style={{ textAlign: 'left' }}>{res}</li>
            })
        }
    </ul>

}

const SearchBox = () => {
    const [showList, setShowList] = useState(false);
    const [results, setResults] = useState(new Array(5).fill(0));
    const debounceSearch = () => {
        let current = new Date().getTime();
        let lastCall;
        return function (e) {
            const { target } = e;

            if (target.value) {
                setShowList(true)
            } else {
                setShowList(false)
            }
            clearTimeout(lastCall);
            const newResults = results.map((res, idx) => target.value + idx);
            setResults([...newResults]);
            if (new Date().getTime() - current > 500) {
                searchContent(target.value);
                current = new Date().getTime();
                return;
            }
            lastCall = setTimeout(() => {
                searchContent(target.value)
            }, 500);
        }
    }
    const searchContent = (value) => {
        console.log(value);
    }
    return <div style={{ display: 'flex' }}>
        <div>
            <input type="text" onChange={debounceSearch()} />
            {showList && <Response searchResults={results} />}
        </div>


        <button onClick={searchContent} style={{ height: '32px', width: '80px' }}>Search</button>
    </div>
}

export default SearchBox;