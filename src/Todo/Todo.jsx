import { useRef, useState } from "react"

const MyList = [{
    date: '12-20-2023',
    do: 'thing 1'
}, {
    date: '1-20-2023',
    do: 'thing 3'
}, {
    date: '12-2-2023',
    do: 'thing 4'
}, {
    date: '2-20-2023',
    do: 'thing 5'
}]
const AddContent = ({ saveNewTodo }) => {
    const thingInput = useRef(null);
    const dateInput = useRef(null);

    const collectContent = () => {
        const theday = dateInput.current.value ? new Date(dateInput.current.value) : '';
        const dothing = thingInput.current.value;

        if (!theday || !dothing) {
            return;
        }
        const date = `${theday.getMonth() + 1}-${theday.getDate()}-${theday.getFullYear()}`;
        saveNewTodo([{
            date,
            do: dothing
        }]);
        thingInput.current.value = '';
    }
    return <div className="AddcontentContainer">
        <textarea className="textArea" ref={thingInput}></textarea>
        <input type="date" ref={dateInput} />
        <input type="submit" value="submit" className="addComment" onClick={collectContent} />
    </div>
}
const TODO = () => {
    const [listItems, setList] = useState(MyList);
    const [isSortByDate, setSortByDate] = useState(false);
    const [isSortByDo, setSortByDo] = useState(false);
    const saveNewTodo = (content) => {
        const newList = listItems.concat(content);
        setList([...newList]);
    }
    const sortByDate = () => {
        const newList = listItems.sort((a, b) => {
            return isSortByDate ? new Date(a.date).getTime() - new Date(b.date).getTime() : 
            new Date(b.date).getTime() - new Date(a.date).getTime()
        });
        setSortByDate(!isSortByDate);
        setList([...newList]);
    }

    const sortByToDo = () => {
        const newList = isSortByDo ? listItems.sort((a, b) => {
            if (a.do.toUpperCase() > b.do.toUpperCase()) {
                return 1;
            }
            if (a.do.toUpperCase() < b.do.toUpperCase()) {
                return -1;
            }
            return 0;
        }) : 
        listItems.sort((a, b) => {
            if (a.do.toUpperCase() > b.do.toUpperCase()) {
                return -1;
            }
            if (a.do.toUpperCase() < b.do.toUpperCase()) {
                return 1;
            }
            return 0;
        });
        setSortByDo(!isSortByDo);
        setList([...newList]);
    }
    return <div>
        <div style={{ fontSize: '30px', margin: '60px', color: 'purple', fontWeight: "bold" }}>TODOLIST</div>
        <table>
            <thead>
                <tr>
                    <th className="tabledate" onClick={sortByDate}>Date</th>
                    <th onClick={sortByToDo}>Todo</th>
                </tr>
            </thead>
            <tbody>
                {listItems.map(list => {
                    return <tr key={list.do}>
                        <td key={list.date}>{list.date}</td>
                        <td key={list.do}>{list.do}</td>
                    </tr>
                })}
            </tbody>
        </table>

        <AddContent saveNewTodo={saveNewTodo} />

    </div>
}

export default TODO;