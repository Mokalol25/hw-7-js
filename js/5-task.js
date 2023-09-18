const a = prompt("Введіть один з кольрів світлофора")

switch (color) {
    case "червоний":
        action = "стоп";
        break;
    case "зелений":
        action = "Йти";
        break;
    case "жовтий":
        action = "Чекати";
        break;
    default:
        action = "Невідомий колір";
        break;
}