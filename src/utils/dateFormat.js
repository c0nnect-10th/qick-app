export const formatDateTime = (date) => {
    if (!date) return "";
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
  
    const isAM = hours < 12;
    const ampm = isAM ? "AM" : "PM";
  
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  
    return `${year}.${month}.${day} ${ampm} ${hours}:${minutes}`;
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
  
    // 오늘이면 → 시간만
    if (isToday) {
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
  
      const ampm = hours < 12 ? "AM" : "PM";
      hours = hours % 12 || 12;
  
      return `${hours}:${minutes} ${ampm}`;
    }
  
    // 오늘 아니면 → yyyy.mm.dd
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}.${month}.${day}`;
  };
  