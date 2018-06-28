var openDialogs = {};

function toggleDialog(element)
{
    if (openDialogs[element] && openDialogs[element] != 1)
        hideDialog(element);
    else if (openDialogs[element] != 1)
        showDialog(element);
}

function showDialog(element)
{
    element.setAttribute("tabindex", "-1");
    element.classList.add("shown");
    element.focus();

    openDialogs[element] = {};
    openDialogs[element].isFocused = true;
    openDialogs[element].blurEvent = () => openDialogs[element].hideTimer = setTimeout(() => hideDialog(element), 0);
    openDialogs[element].focusEvent = () => {if (openDialogs[element].hideTimer) clearTimeout(openDialogs[element].hideTimer)};

    element.addEventListener("blur", openDialogs[element].blurEvent, true);
    element.addEventListener("focus", openDiaogs[element].focusEvent, true);
}

function hideDialog(element)
{
    element.classList.remove("shown");

    element.removeEventListener("blur", openDialogs[element].blurEvent, true);
    element.removeEventListener("focus", openDialogs[element].focusEvent, true);

    if (openDialogs[element].hideTimer) clearTimeout(openDialogs[element].hideTimer);

    openDialogs[element] = 1;
    setTimeout(() => {if (openDialogs[element] == 1) delete openDialogs[element]}, 300);
}