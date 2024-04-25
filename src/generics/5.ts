// @ts-nocheck
// Завдання 5 - Створення об'єкту за допомогою Record
export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  };
  
  const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
  };
  export {};
  