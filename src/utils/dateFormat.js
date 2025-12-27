export const formatDateTime = (date) => {
  if (!date) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;

  return `${year}.${month}.${day} / ${hours}:${minutes} ${ampm}`;
};
  
export const formatNotiDate = (dateInput) => {
  if (!dateInput) return "";

  const date =
    typeof dateInput === "string"
      ? new Date(dateInput.replace(" ", "T"))
      : dateInput;

  if (isNaN(date.getTime())) return "";

  const now = new Date();

  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (isToday) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const ampm = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${ampm}`;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
