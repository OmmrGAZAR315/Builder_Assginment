function fetchCarsData() {
    fetch('carServlet')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const carTableBody = document.getElementById('carTableBody');
            carTableBody.innerHTML = ''; // Clear previous table data
            data.forEach(car => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${car.ownerName}</td>
                    <td>${car.model}</td>
                    <td>${car.color}</td>
                    <td>${car.engine}</td>
                    <td>${car.fuelType}</td>
                `;
                carTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching cars data:', error);
        });
}

window.onload = fetchCarsData;
