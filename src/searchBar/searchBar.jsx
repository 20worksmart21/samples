import { myaxios } from '../utils/fetcher';
import axios from "axios";
import { useRef, useState } from 'react';

const Response = ({ searchResults }) => {
    return <ul style={{ position: 'absolute', zIndex: '2', margin: '0', width: '300px', fontSize: '16px', backgroundColor: 'white' }}>
        {
            searchResults.map(res => {
                return <li key={res}
                    style={
                        {
                            textAlign: 'left',
                            listStyle: 'none',
                            padding: '4px',
                        }
                    }
                    onClick={() => {
                        console.log("click drop down: ", res)
                    }}
                >{res}
                </li>
            })
        }
    </ul>

}

const SearchBox = () => {
    const [showList, setShowList] = useState(false);
    const [results, setResults] = useState(new Array(5).fill(0));
    const searchBox = useRef(null);
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
                searchContent();
                current = new Date().getTime();
                return;
            }
            lastCall = setTimeout(() => {
                searchContent()
            }, 500);
        }
    }
    const searchContent = () => {
        console.log(searchBox.current.value);
    }
    const hideDropDownList = (e) => {
        setShowList(false)
    }
    return <div style={{ display: 'flex', width: '80%', margin: 'auto', marginBottom: '24px' }} onMouseLeave={hideDropDownList}>
        <div style={{ position: 'relative1' }} >
            <input
                type="text"
                onChange={debounceSearch()}
                style={{ width: '300px', padding: '8px', marginRight: '16px', fontSize: '16px' }}
                ref={searchBox}
                id='isdd'
            />
            {showList && <Response searchResults={results} />}
        </div>
        <button onClick={searchContent} style={{ padding: '8px', width: '80px' }}>Search</button>
    </div>
}

export default SearchBox;