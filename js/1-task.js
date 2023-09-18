const drink = prompt("Виберіть чай, каву або сік");

switch (drink) {
    case "кава":
        alert = ("Ви вибрали каву");
        break;
    case "чай":
        alert = ("Ви вибрали чай");
        break;
    case "сік":
        alert = ("Ви вибрали сік");
        break;
    default:
        alert = ("Такого напою немає");
        break;
}