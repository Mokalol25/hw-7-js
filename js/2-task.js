const day = prompt("Введіть любий день тижня");

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        alert("Це будній день тижня")
        break;
    case "субота":
    case "неділя":
        alert("Це вихідний день")
}