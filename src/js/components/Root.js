/**
 * Created by akari on 21/02/2017.
 */
import React from "react";
import {renderToString} from "react-dom/server";
import App from "./App";

const Root = () => (
    <html>
    <head>
        <meta charSet="utf-8"/>
        <title>灯里的歌词滚动姬</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="dist/app.css"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16"/>
        <link rel="manifest" href="/favicons/manifest.json"/>
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="apple-mobile-web-app-title" content="灯里的歌词滚动姬"/>
        <meta name="application-name" content="灯里的歌词滚动姬"/>
        <meta name="theme-color" content="#FF69B4"/>
    </head>
    <body className="app-body">
    <div id="react-root" className="react-root" dangerouslySetInnerHTML={{__html: renderToString(<App/>)}}></div>
    <script src="dist/app.js" charSet="utf-8"></script>
    </body>
    </html>
);


export default Root;