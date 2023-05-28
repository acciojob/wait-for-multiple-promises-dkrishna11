//your JS code here. If required.

let Promise1=new Promise((resolve, reject)=>{
	setTimeout(() => {
          resolve();
        }, 2000);
});


let Promise2=new Promise((resolve, reject)=>{
	setTimeout(() => {
          resolve();
        }, 1000);
});


let Promise3=new Promise((resolve, reject)=>{
	setTimeout(() => {
          resolve();
        }, 3000);
});

Promise.all(promises1, promises2, promises3).then(results => {
        const table = document.getElementsById('output');
        table.innerHTML = '';

        results.forEach((time, index) => {
          const row = document.createElement('tr');
          const firstColumn = document.createElement('td');
          const secondColumn = document.createElement('td');

          if (index === results.length) {
            firstColumn.textContent = 'Total';
          } else {
            firstColumn.textContent = `Promise ${index + 1}`;
          }

          secondColumn.textContent = time;

          row.appendChild(firstColumn);
          row.appendChild(secondColumn);
          table.appendChild(row););