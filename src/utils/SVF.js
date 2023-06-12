export const convertDateFormat = (dateString, phase) => {
  const date = new Date(dateString);

  if (phase === 1) {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    return `${day} ${month} ${year} ${time}`;
  } else if (phase == 2) {
    // Split the input date into day, month, and year
    var parts = dateString.split("/");
    var day = parts[1];
    var month = parts[0];
    var year = parts[2];

    // Format the date as desired
    var convertedDate = day + "-" + month + "-" + year;

    return convertedDate;
  } else {
    const isoString = date.toISOString();
    return isoString.slice(0, 16).replace("T", " ");
  }
};
