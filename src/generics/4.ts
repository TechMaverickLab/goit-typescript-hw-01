// @ts-nocheck
// Завдання 4 - Розширення функціональності для оновлення користувачів

type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  // Імітація бази даних користувачів
  const usersDatabase: User[] = [
    { name: "John", surname: "Doe", email: "john.doe@example.com", password: "123456" }
  ];
  
  function createOrUpdateUser(initialValues: Partial<User>) {
    const userIndex = usersDatabase.findIndex(user => user.email === initialValues.email);
  
    if (userIndex !== -1) {
      // Оновлення існуючого користувача
      const updatedUser = { ...usersDatabase[userIndex], ...initialValues };
      usersDatabase[userIndex] = updatedUser;
      console.log("Користувача оновлено:", updatedUser);
    } else {
      // Створення нового користувача
      const newUser: User = { ...initialValues } as User;
      usersDatabase.push(newUser);
      console.log("Користувача створено:", newUser);
    }
  }
  
  export {};
  
  // Приклад використання функції
  createOrUpdateUser({ email: "john.doe@example.com", name: "Johnny" }); // Оновити існуючого користувача
  createOrUpdateUser({ name: "Jane", surname: "Doe", email: "jane.doe@example.com", password: "123456" }); // Створити нового користувача
  