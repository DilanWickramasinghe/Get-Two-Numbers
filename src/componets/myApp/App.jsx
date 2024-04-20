import './App.css'
import {useState} from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [num, setNum] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState(null);

    const getSum = () => {
        const result = Number(num) + Number(num2);
        setResult(result)
    }

    return (
        <>
            <div className={'two-sum'}>
                <h1>Enter Two Numbers to get Sum</h1>

                <input onChange={(e) => setNum(e.target.value)}
                       placeholder={'Enter Number 01 :'}
                       className={'datas'} id={'data1'}
                />

                <input
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder={'Enter Number 02 :'} className={'datas'} id={'data2'}
                />
                <h2>{result}</h2>
                <Button onClick={getSum} className={'button'} variant="primary">SUBMIT</Button>{' '}
            </div>
        </>
    )
}

export default App
