
    const noticeColor = "black"
    const noticeBackground = "lightGreen"
    const infoColor = "white"
    const infoBackground = "blue"
    const warningColor = "black"
    const warningBackground = "yellow"
    const errorColor = "white"
    const errorBackground = "red"

    const commonCss = ` font-family:system-ui;
                        font-size:1rem;
                        padding:5px 15px;
                        border:1px solid black;
                        border-radius:5px;`


const log = (...args) => {
        console.log(newText(...args))
}

const notice = (...args) => {
    console.log(
        "%c" + newText(...args),
        `${commonCss}
        color: ${noticeColor};
        background-color: ${noticeBackground}`
    );
}

const info = (...args) => {
    console.log(
        "%c" + newText(...args),
        `${commonCss}
        color: ${infoColor};
        background-color: ${infoBackground}`
    );
}

const warning = (...args) => {
    console.log(
        "%c" + newText(...args),
        `${commonCss}
        color: ${warningColor};
        background-color: ${warningBackground}`
    );
}

const error = (...args) => {
    console.log(
        "%c" + newText(...args),
        `${commonCss}
        font-weight:bold;
        color: ${errorColor};
        background-color: ${errorBackground}`
    );
}

const newText = (...text) => {
    return text.join( " " );
}



export default {
    log,
    notice,
    info,
    warning,
    error,
};

