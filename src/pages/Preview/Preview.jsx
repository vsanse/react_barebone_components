import "./Preview.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import getSnippet from "../../helpers/codesnippets";
import ButtonsDemo from "../../demos/ButtonsDemo";
import ModalsDemo from "../../demos/ModalsDemo";
import SelectDemo from "../../demos/SelectDemo";
import SpinnerDemo from "../../demos/SpinnerDemo";
import InputsDemo from "../../demos/InputsDemo";
import ToastDemo from "../../demos/ToastDemo";
import SkeletonDemo from "../../demos/SkeletonDemo";
import PaperDemo from "../../demos/PaperDemo";
import { useEffect, useState } from "react";


const Preview = ({ selectedComponentIndex }) => {

    const [ copyBtnText, setCopyBtnText ] = useState("Copy Code");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(getSnippet(selectedComponentIndex));
        setCopyBtnText("Copied!");
        setTimeout(() => {
            setCopyBtnText("Copy Code")
        }, 4000);
    }

    useEffect(() => setCopyBtnText("Copy Code"), [selectedComponentIndex])

    return (
        <div className="Preview">
            <div className="Preview--copyBtn" onClick={copyToClipboard}>{copyBtnText}</div>
            {
                selectedComponentIndex === 0
                ? <ButtonsDemo /> :
                selectedComponentIndex === 1
                ? <ModalsDemo /> :
                selectedComponentIndex === 2
                ? <SelectDemo /> :
                selectedComponentIndex === 3
                ? <SpinnerDemo /> :
                selectedComponentIndex === 4
                ? <InputsDemo /> :
                selectedComponentIndex === 5
                ? <ToastDemo /> :
                selectedComponentIndex === 6
                ? <SkeletonDemo /> :
                selectedComponentIndex === 7
                ? <PaperDemo /> :
                ''
            }
            <div className="Preview--code" onClick={()=>navigator.clipboard.writeText("PPAOKOAKOKA")}>
                <SyntaxHighlighter language="javascript" style={atomOneDark}>
                    {getSnippet(selectedComponentIndex)}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Preview