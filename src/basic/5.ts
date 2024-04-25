// @ts-nocheck
// Завдання 5 - Enum і Функції
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  }
  export {};
  