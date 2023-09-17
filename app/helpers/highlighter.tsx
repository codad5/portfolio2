"use client"
import hljs from "highlight.js";
import { useEffect } from "react";
import Highlight from "react-highlight";
hljs.autoDetection("markdown")

export default function HighlightHelper(){
    useEffect(() => {
        hljs.highlightAll();
    }, [])
    return null;
}