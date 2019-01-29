//Preloader

	window.addEventListener('load', () => {
		document.querySelector('.preloader').classList.add('hidePreloader');
	
	});

//Video

	window.addEventListener('scroll', () => {
		let video = document.querySelector('.video');
		video.play();
	});

// Produce cars
	
	const cars = [];

	class Car {
		constructor(make, country, img, special, model, price, type, trans, gas) {
			this.make = make;
			this.country = country;
			this.img = img;
			this.special = special;
			this.model = model;
			this.price = price;
			this.type = type;
			this.trans = trans;
			this.gas = gas;
		}
	}

	const makeCar = (make, country, img = 'Images/car_icon.png', special = true, model = 'new model', price = 10000, type = 'sedan', trans = 'automatic', gas = 50) =>  {
		
		const car = new Car(make, country, img, special, model, price, type, trans, gas);

		cars.push(car);
		
	}

	const produceCar = () => {
		makeCar('Chevrolet', 'american', 'Images/american_car_1.jpg', false, 'Cruze Limited 1LT', '13.500', 'sedan', 'automatic', 30 );
		makeCar('Chevrolet', 'american', 'Images/american_car_2.jpg', true, 'Camaro', '22.000', 'coupe', 'automatic', 20);
		makeCar('Chevrolet', 'american', 'Images/american_car_3.jpg', false, 'Traverse', '29.930', 'SUV', 'automatic', 25);
		makeCar('Ford', 'american', 'Images/american_car_4.jpg', true, 'Mustang', '30.000', 'coupe', 'manual', 22);
		makeCar('Dodge', 'american', 'Images/american_car_6.jpg', false, 'Chaleger', '25.000', 'coupe', 'manuel',  25);

		makeCar('Mercedes-Benz', 'german', 'Images/german_car_1.jpg', true, 'C63-s amg', '70.000', 'coupe', 'manuel',  25);
		makeCar('BMW', 'german', 'Images/german_car_2.jpg', false, 'X5', '60.000', 'SUV', 'automatic',  30);
		makeCar('BMW', 'german', 'Images/german_car_3.jpg', false, '230i', '70.000', 'coupe', 'manuel',  25);
		makeCar('Mercedes-Benz', 'german', 'Images/german_car_4.jpg', false, 'GL 550', '80.000', 'SUV', 'manuel',  25);
		makeCar('Plymouth', 'american', 'Images/american_car_5.jpg', true, 'Baracuda', '1.000000', 'convertible', 'manuel', 15);
		makeCar('Mercedes-Benz', 'german', 'Images/german_car_5.jpg', true, 'Pagoda', '370.000', 'convertible', 'manuel',  30);

	}

	produceCar();


	console.log(cars);

//Special cars filter

	const specialCars = cars.filter(car => car.special === true);

	console.log(specialCars);


	const displaySpecialCars = () => {
			
		document.addEventListener('DOMContentLoaded', () => {
		
		let info = document.querySelector('.info');
		
		let data = '';
		
		specialCars.forEach(item => {
			data +=  `<span class='galery-inputs mx-auto' data-img=${item.img}>
						<i class='fas fa-car'></i>
						<p>${item.make}</p>
						<p>${item.model}</p>
					</span>`;
		});

		info.innerHTML += data;

		info.addEventListener('click', event => {
			if(event.target.parentElement.classList.contains('galery-inputs')) {
				const img = event.target.parentElement.dataset.img;
				 document.querySelector('#galery-img').src = img;
				}
			});
		});

	};

	displaySpecialCars();

// All American German

		let car_card = document.querySelector('.car-card');

		let info = document.querySelector('.car-row');
			
		let data1 = '';
			

	const displayAllCars = (() => {
		
		document.addEventListener('DOMContentLoaded', () => {
			
			cars.forEach(item => {
					data1 += `<div class='col-10 mx-auto px-0 my-3 col-md-6 col-lg-4 single-car ${item.country}'>
					<div class='card car-card'>
						<img src="${item.img}" class='car-img-top car-img' alt='Not found!' />
						<div class='card-body'>
							<div class='car-info'>
								<div class='car-text text-uppercase'>
									<h6 class='font-weight-bold'>${item.make}</h6>
									<h6>${item.model}</h6>
								</div>
								<h5 class='car-value py-2 px-3'>	$<span class='car-price'>${item.price}</span></h5>
							</div>
						</div>
						<div class='card-footer text-capitalize'>
							<p><span><i class='fas fa-car'></i></span>${item.type}</p>
							<p><span><i class='fas fa-cogs'></i></span>${item.trans}</p>
							<p><span><i class='fas fa-gas-pump'></i></span>${item.gas}</p>
						</div>
					</div>
				</div>`;

				info.innerHTML = data1;
			});
		});
	})();

//Filter cars

	const filterCars = (() => {
		
		let filter = document.querySelectorAll('.filter-btn');

		filter.forEach(btn => {
		
			btn.addEventListener('click', event => {
				
				let value = event.target.dataset.filter;
		
				let singleCar = document.querySelectorAll('.single-car');

				singleCar.forEach(car => {
					if(value == 'all') {
						car.style.display = 'block';
					}
					else if(!(car.classList.contains(value))) {
						car.style.display = 'none';
					}
					else {
						car.style.display = 'block';
					}

				});

			});
		}); 
	})();
	
// Zoom galery

	const zoom = document.querySelector('.img-search');


	zoom.addEventListener('click', () => {

		let featured = document.querySelector('#featured');

		let img_container = document.querySelector('.img-container');

		let info = document.querySelectorAll('.galery-inputs');

		let sub_first = document.querySelector('#galery_title_first').style.display = 'none';
		let sub_second = document.querySelector('#galery_title_second').style.display = 'none';

		info.forEach(i => {
			i.style.opacity = 0;
		});

		img_container.classList.add('img-galery');

		zoom.style.display = 'none';

		let x = document.createElement('P');

		featured.appendChild(x);

		x.innerHTML = 'Close';

		x.style.color = 'white';

		x.style.positiion = 'absolute';

		x.style.display = 'block';

		x.style.cursor = 'pointer';

		x.addEventListener('click', () => {
		
			img_container.classList.remove('img-galery');

			info.forEach(i => {
				
				i.style.opacity = 0.7;
		
			});


		let sub_first = document.querySelector('#galery_title_first').style.display = 'block';
		let sub_second = document.querySelector('#galery_title_second').style.display = 'block';

		x.style.display = 'none';

		zoom.style.display = 'block';


		});

	});

