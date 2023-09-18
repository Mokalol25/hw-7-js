const month = prompt("Напишіть любий місяць");

    switch (month) {
        case "грудень":
        case "січень":
        case "лютий":
            alert("Пора року зима")
            break;
        case "березень":
        case "квітень":
        case "травень":
            alert("Пора року весна")
            break;
        case "червень":
        case "липень":
        case "серпень":
            alert("Пора року літо")
            break;
        case "вересень":
        case "жовтень":
        case "листопад":
            alert("Пора року осінь")
            break;
        default:
            alert("Такого місяця не існує")
    }