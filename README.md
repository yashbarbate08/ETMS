Here’s how you can add it to your **`README.md`** file:

---

# ETMS - Employee Task Management System

This is a **React + Vite** project for managing employee tasks with an admin panel.

---

## Features

- Add, accept, complete, and fail tasks.
- Assign tasks to employees.
- Track employee task status.
- Simple, clean UI using React and Tailwind CSS.
- Uses **localStorage** to store default users and employee data.

---

## Default Users

### Admin

| Role  | Email                               | Password |
| ----- | ----------------------------------- | -------- |
| Admin | [admin@me.com](mailto:admin@me.com) | 123      |

### Employees

The following employees are available by default in **localStorage**:

| Employee ID | First Name |
| ----------- | ---------- |
| 1           | Rahul      |
| 2           | Neha       |
| 3           | Amit       |
| 4           | Kavita     |
| 5           | Sachin     |

---

## Emails

**Employee Emails:**

- [rahul@me.com](mailto:rahul@me.com)
- [neha@me.com](mailto:neha@me.com)
- [amit@me.com](mailto:amit@me.com)
- [kavita@me.com](mailto:kavita@me.com)
- [sachin@me.com](mailto:sachin@me.com)

**Password for all Employee:**
Password: 123

**Admin Email:**

- [admin@example.com](mailto:admin@example.com)

---



// Run once to set default data
setLocalStorage();
```

1. Start the development server:

```bash
npm run dev
```
2. Open the application in your browser at:

```
http://localhost:5173
```

---

## Notes

- You can reset localStorage anytime using:

```javascript
localStorage.clear();
```

- Default passwords for all users are `123`.

---

If you want, I can **rewrite the entire README.md in a fully polished format** with all sections, including features, setup, admin/employee info, and emails neatly formatted.


