// src/utils.ts

export const getBgColor = (value: string): string => {
  switch (value) {
    case "Important ASAP":
      return "#E5F1FF";
    case "Offline Meeting":
      return "#FDCFA4";
    case "Virtual Meeting":
      return "#F9E9C3";
    case "ASAP":
      return "#AFEBDB";
    case "Client Related":
      return "#CBF1C2";
    case "Self Task":
      return "#CFCEF9";
    case "Appointments":
      return "#F9E0FD";
    case "Court Related":
      return "#9DD0ED";
    default:
      return "#FFFFFF"; // Default color if no match is found
  }
};

export const getBgColorChat = (value: string): string => {
  switch (value) {
    case "You":
      return "#EEDCFF";
    case "Mary Hilda":
      return "#FCEED3";
    case "Obaidullah Amarkhil":
      return "#D2F2EA";
    case "FastVisa Support":
      return "#F8F8F8";
    default:
      return "#FCEED3"; // Default color if no match is found
  }
};
