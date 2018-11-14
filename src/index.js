import './index.css';
// import numeral from 'numeral';
import { getUsers, deleteUser } from './api/user-api';

const usersContainer = global.document.getElementById('users');
usersContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('delete-user')) {
    evt.preventDefault();
    const id = evt.target.getAttribute('data-id');
    deleteUser(id);
    const row = evt.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
})

// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`I would pay ${courseValue} for this awesome course`); // eslint-disable-line no-console
getUsers().then((users) => {
  const rowsHtml = users.map((user) => `
    <tr>
      <td>
        <a href="#" data-id="${user.id}" class="delete-user">Delete</a>
      </td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>
  `);
  usersContainer.innerHTML = rowsHtml.join('');
});
