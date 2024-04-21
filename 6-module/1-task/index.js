/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  #elem;

  constructor(rows) {
    this.#rows = rows;
    this.#elem = document.createElement("table");
    this.createTable();
  }

  get elem() {
    return this.#elem;
  } 

  createTable() {
    let userData = `      
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody>` + this.#rows.map(user => `
      <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.salary}</td>
        <td>${user.city}</td>
        <td><button>X</button></td>
      </tr>              
            `).join("") + `</tbody>`;
    
    this.#elem.innerHTML = userData;

    for (let button of this.#elem.querySelectorAll("button"))
      button.addEventListener('click',this.#onRemoveClick);
        
  }

  #onRemoveClick = (event) => {
    const target = event.target;
    const row = target.closest('tr');

    row.remove();
  };
}
