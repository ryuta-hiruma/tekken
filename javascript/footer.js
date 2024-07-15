const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "tekken8/include/footer.html", true);
includeHeader.onreadystatechange = function () {
    if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    const header = document.querySelector("#footer");
    header.insertAdjacentHTML("afterbegin", footerHTML);
    }
};
includeHeader.send();