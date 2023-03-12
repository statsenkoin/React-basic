https://mysite.com/books/e3q76gm9lzk?category=adventure&status=unread#comments

- https:// - протокол
- mysite.com/ - хост
- books/e3q76gm9lzk - шлях, то, де ми знаходимося у додатку
- e3q76gm9lzk - url-параметр. Параметри бувають динамічними або статичними
- ? - символ початку рядка запиту
- ?category=adventure&status=unread - рядок запиту
- category=adventure - пара параметр=значення
- & - символ "І", розділяє параметри рядка запиту
- #comments - якір (хеш), визначає положення на сторінці

- У React немає вбудованого модуля маршрутизації, тому використовується React
  Router - Бібліотека маршрутизації для React.

1. npm install react-router-dom

2. Компонент <BrowserRouter> - Командний центр управління маршрутизацією, який
   приховує в собі всю логіку взаємодії із історією браузера. Створює
   маршуртизатор та об'єкт історії навігації, щоб синхронізувати інтерфейс із
   URL-адресою. Використовуючи React контекст передає інформацію про поточний
   стан історії навігації всім нащадкам. Все, що необхідно зробити, це в
   index.js обернути компонентом <BrowserRouter> всі програми.
3. Компоненти <Route> та <Routes>
4. Компоненти <Link> та <NavLink> + npm i styled-components
