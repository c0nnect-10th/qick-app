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
  