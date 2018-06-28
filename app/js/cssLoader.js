let cssLoader = {
    loadStandardFiles()
    {
        for (var file of cssLoader.standardFiles)
        {
            var link = document.createElement("link");
            link.classList.add("standardCSSLink");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", "css/" + file);

            document.head.appendChild(link);
        }
    },

    setCurrentTheme(theme)
    {
        cssLoader.currentTheme = theme;
        var links = document.head.getElementsByClassName("themeCSSLink");

        while (links[0])
            links[0].parentNode.removeChild(links[0]);

        for (var file of cssLoader.themeFiles)
        {
            var link = document.createElement("link");
            link.classList.add("themeCSSLink");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", "css/" + theme + "/" + file);

            document.head.appendChild(link);
        }
    }
}

cssLoader.standardFiles = [
    "main.css",
    "titlebar.css"
]

cssLoader.themeFiles = [
    "main.css",
    "titlebar.css"
]

cssLoader.loadStandardFiles();