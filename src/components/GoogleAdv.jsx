'use client'
import React, { useEffect } from 'react'

export default function GoogleAdv() {
    useEffect(() => {
        var ads = document.getElementsByClassName('adsbygoogle').length;
        for (var i = 0; i < ads; i++) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
        }
    }, []);
    return (
        <></>
    )
}
