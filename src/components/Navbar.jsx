import { useEffect, useState, useContext } from 'react';
import logo from '../assets/logo.svg';
import Editor from './Editor';
import EditorL from './EditorL';
import ThemeContext from '../contexts/ThemeContext';

export default function Navbar() {
    const {setcmTheme} = useContext(ThemeContext);
    const [layout, setLayout] = useState('def');
    const [theme,setTheme] = useState('dark');
    
    useEffect(() =>{
        document.documentElement.setAttribute('data-bs-theme', `${theme}`);
        document.body.className=theme;
        setcmTheme(theme);
    },[theme])
    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    function activeButton() {
        if(layout==='def'){
            document.getElementById('second-layout').classList.remove('active');
            document.getElementById('default-layout').classList.add('active');
        }else{
            document.getElementById('second-layout').classList.add('active');
            document.getElementById('default-layout').classList.remove('active');
        }
    }

    useEffect(() => {
        // This hook runs when the layout state changes
        activeButton();
    }, [layout]);
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-ms fixed-top bg-body-tertiary px-2" style={{ height: '3rem' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" className="d-inline-block align-text-top me-3" />Web Smith
                    </a>
                    <div className="d-flex">
                        <ul className="navbar-nav navbar-nav flex-row">
                            <li className="nav-item me-2">
                                <a id="default-layout" className="nav-link" aria-current="page" href="#" onClick={()=>{setLayout('def');activeButton();}}><i className="bi bi-grid-1x2-fill rotate-clockwise"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a id="second-layout" className="nav-link" href="#" onClick={()=>{setLayout('layout');activeButton();}}><i className="bi bi-grid-1x2-fill flip-horizontal"></i></a>
                            </li>
                        </ul>
                        <button id="toggle-theme" type="button" className="btn btn-sm" data-bs-toggle="button" onClick={toggleTheme}>
                            <i className="bi bi-brightness-low-fill fs-5"></i>
                        </button>
                    </div>
                </div>
            </nav>
            {layout === 'def' ? <Editor /> : <EditorL />}
        </>
    );
}
