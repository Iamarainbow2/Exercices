function addCar() {
    const carName = document.getElementById('carName').value;
    const stockCount = parseInt(document.getElementById('stockCount').value);
  
    if (!carName || isNaN(stockCount)) {
      alert('Please enter valid car name and stock count.');
      return;
    }
    
  
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    const existingCarIndex = cars.findIndex(car => car.name === carName);

     if (existingCarIndex !== -1) {
      cars[existingCarIndex].stock += stockCount;
      } else {
      const car = { name: carName, stock: stockCount };
      cars.push(car);
     }

    localStorage.setItem('cars', JSON.stringify(cars));
  
    displayCars();
    }
  
  function displayCars() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';
  
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
  
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];
      if (car.stock > 0) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${car.name} (Stock: ${car.stock})</span>
                        <button onclick="sellCar(${i})">Sell One</button>`;
        carList.appendChild(li);
      }
    }
  }
  
  function sellCar(index) {
    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars[index].stock -= 1;
    localStorage.setItem('cars', JSON.stringify(cars));
  
    displayCars();
  }
  
  displayCars();
  