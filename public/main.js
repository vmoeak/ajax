$('.loadCss').on('click', () => {
    const request = new XMLHttpRequest();
    console.log(request);
    request.open('GET', '/2.css')
    request.onreadystatechange =() => {
        if (request.readyState === 4 && request.status === 200) {
            const style = $('<style></style>');
            style.html(request.responseText);
            $('head').append(style);
        }
    };
    request.send();
})

$('.loadJs').on('click', () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = $('<script></script>');
            script.html(request.responseText);
            $('body').append(script);
        }
    };
    request.send();
})

$('.loadHtml').on('click', () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
            const div = $(request.responseText);
            $('body').append(div);
        }
    }
    request.send();
})

$('.loadJson').on('click', () => {
    const request = new XMLHttpRequest();
    request.open('GET', '2.json');
    request.onreadystatechange = () => {
        if (request.readyState ===4 && request.status === 200) {
            const object = JSON.parse(request.response);
            myName.textContent = object.name;
        }
    }
    request.send();
})

$('.loadXML').on('click', () => {
    const request = new XMLHttpRequest();
    request.open('GET', '2.xml');
    request.onreadystatechange = () => {
        if ( request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = $(dom).find('warning')[0].textContent;
            $('body').append($('<div></div>').text(text.trim()));
        }
    };
    request.send();
})