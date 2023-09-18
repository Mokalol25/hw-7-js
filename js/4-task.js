const dayMonth = Number(prompt("Напишіть любий номер місяця"));
switch (dayMonth) {
    case 1:
        alert = ("В січні 31 день");
        break;
    case 2:
        alert = ("В лютому 29 день");
        break;
    case 3:
        alert = ("В березні 31 день");
        break;
    case 4:
        alert = ("В квітні 30 день");
        break;
    case 5:
        alert = ("В травні 31 день");
        break;
    case 6:
        alert = ("В червні 30 день");
        break;
    case 7:
        alert = ("В липні 31 день");
        break;
    case 8:
        alert = ("В серпні 31 день");
        break;
    case 9:
        alert = ("В вересні 30 день");
        break;
    case 10:
        alert = ("В жовтні 31 день");
        break;
    case 11:
        alert = ("В листопаді 30 день");
        break;
    case 12:
        alert = ("В грудні 31 день");
        break;
    default:
        alert = ("Жоден місяць не має такого номеру")
        break;
}