import { useState } from "react";
import EditorContext from "./EditorContext";

const EditorProvider = ({children}) => {
    const [editorText, setEditorText] = useState({ html: '', css: '', js: '' });

    const updateEditorText = (type, text) => {
        setEditorText((prevText) => ({ ...prevText, [type]: text }));
    };

    return (
        <EditorContext.Provider value={{ editorText, updateEditorText }}>
            {children}
        </EditorContext.Provider>
    );
}

export default EditorProvider;
