export function getRightDate(date: string | number) {
    const hour = new Date(date).getHours();
    const minutes =
      new Date(date).getMinutes().toString().length === 1
        ? "0" + new Date(date).getMinutes()
        : new Date(date).getMinutes();
    return hour + ":" + minutes;
  }
  