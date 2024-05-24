// Datos ficticios para el gráfico de columnas (habitantes con discapacidad visual por provincia)
var habitantesPorProvincia21 = [539000, 390000, 598000]; // Ejemplo: Alicante, Castellón, Valencia
var habitantesPorProvincia22 = [552000, 360000, 648000]; // Ejemplo: Alicante, Castellón, Valencia
var habitantesPorProvincia23 = [634000, 410000, 680000]; // Ejemplo: Alicante, Castellón, Valencia

// Obtener el contexto del gráfico de columnas
var ctx = document.getElementById('barChart').getContext('2d');

// Crear el gráfico de columnas
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Alicante', 'Castellón', 'Valencia'],
		//['#0072bc','#fcdd09', '#da121a'], // Colores de las barras por defecto
        datasets: [
			{label:'2021',
            data: habitantesPorProvincia21,
            backgroundColor: ['#0072bc','#0072bc', '#0072bc'], // Colores de las barras por defecto
            borderWidth: 3, //memoria
			borderColor:'black'//memoria
			},
			{label: '2022', data: habitantesPorProvincia22,
			backgroundColor: ['#fcdd09','#fcdd09', '#fcdd09'],
            borderWidth: 3, //memoria 
			borderColor:'black'
			},
			{label: '2023', data: habitantesPorProvincia23,
			backgroundColor: ['#da121a','#da121a', '#da121a'],
            borderWidth: 3, //memoria 
			borderColor:'black'
			}
		]
    },
    options: {
        responsive: true,
		plugins: {
			title: {
				display: true,//memoria
				text: 'Evolución población con ceguera total por provincias de la Comunidad Valenciana',
				color:'black'
			},
			subtitle: {//memoria
				display: true,
				text: 'Evolución años 2021-2023. Fuente: Datos ficticios',
				color:'black'
			},
			legend: {
				labels:{
					color:'black'//memoria
					//fontSize: 18
				}    	
			}
		 },
		
        scales: {
            y: {
                beginAtZero: true, //memoria
				accessibility: {
					description: 'Habitantes'
				},
				title: {
					display: true,
					text: 'Habitantes',
					color:'black'
				},
				grid:{
					  color: (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)')
				},
				ticks:{color:'black'}//memoria
            },
			x: {
                beginAtZero: true, //memoria
				accessibility: {//memoria
					description: 'Provincias'
				},
				grid:{
					  color: (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)')
				},
				ticks:{//color de los valores del axis
					color:'black'
					}
            }
        }
    }
});



// Función para cambiar el tema de la página y gráfico de barras
//memoria
function setTheme(theme) {
    document.body.className = theme; // Cambiar la clase del body según el tema seleccionado
    
    // Actualizar los colores de las barras según el tema seleccionado
    switch (theme) {
        case 'default':{
            barChart.data.datasets[0].backgroundColor = [ '#0072bc','#0072bc', '#0072bc']; // Colores barras por defecto
			barChart.data.datasets[1].backgroundColor = [ '#fcdd09','#fcdd09', '#fcdd09']; 
			barChart.data.datasets[2].backgroundColor = [ '#da121a','#da121a', '#da121a']; 
			barChart.options.scales.y.grid.color= (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)');//eje Y  negro
			barChart.options.scales.x.grid.color= (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)');//eje x  negro
			barChart.options.plugins.title.color= 'black';//t´tulo en  negro
			barChart.options.plugins.subtitle.color= 'black';//subtitulo en  negro
			barChart.options.scales.y.ticks.color= 'black';//color de los valores del  ejeY (miles de habitantes)
			barChart.options.scales.x.ticks.color= 'black';//color de los valores del  ejeX (nombre provs)
			barChart.options.scales.y.title.color= 'black';//nombre del eje Y (habitantes)
			barChart.data.datasets[0].borderColor ='black';// borde de las barras de colores
			barChart.data.datasets[1].borderColor ='black';// borde de las barras de colores
			barChart.data.datasets[2].borderColor ='black';// borde de las barras de colores
			barChart.options.plugins.legend.labels.color= 'black';//etiqueta leyenda en  negro
			};
		   break;
        case 'dark':{
            barChart.data.datasets[0].backgroundColor = [ '#0072bc','#0072bc', '#0072bc']; // Colores barras por defecto
			barChart.data.datasets[1].backgroundColor = [ '#fcdd09','#fcdd09', '#fcdd09']; 
			barChart.data.datasets[2].backgroundColor = [ '#da121a','#da121a', '#da121a']; 
			barChart.options.scales.y.grid.color= (line) => (line.index === 0 ? 'white' : 'rgba(0, 0, 0, 0.0)');//ejes blanco
			barChart.options.scales.x.grid.color= (line) => (line.index === 0 ? 'white' : 'rgba(0, 0, 0, 0.0)');
			barChart.options.plugins.title.color= 'white';
			barChart.options.plugins.subtitle.color= 'white';
			barChart.options.scales.y.ticks.color= 'white';
			barChart.options.scales.x.ticks.color= 'white';
			barChart.options.scales.y.title.color= 'white';
			barChart.data.datasets[0].borderColor ='white';
			barChart.data.datasets[1].borderColor ='white';
			barChart.data.datasets[2].borderColor ='white';
			barChart.data.datasets[0].label.color ='white';
			barChart.options.plugins.legend.labels.color= 'white';
			};
			break;
		case 'colorBlind':{
            barChart.data.datasets[0].backgroundColor = ['#ffff0', '#ffff0', '#ffff0']; // Colores adaptados para pasar la escala de grises del css
			barChart.data.datasets[1].backgroundColor = ['#b3b373', '#b3b373', '#b3b373']; // Colores adaptados para pasar la escala de grises del css
			barChart.data.datasets[2].backgroundColor = ['#788cbe', '#788cbe', '#788cbe']; // Colores adaptados para pasar la escala de grises del css	
            barChart.options.scales.y.grid.color= (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)');//ejes blanco
			barChart.options.scales.x.grid.color= (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)');
			barChart.options.plugins.title.color= 'black';
			barChart.options.plugins.subtitle.color= 'black';
			barChart.options.scales.y.ticks.color= 'black';
			barChart.options.scales.x.ticks.color= 'black';
			barChart.options.scales.y.title.color= 'black';
			barChart.data.datasets[0].borderColor ='black';
			barChart.data.datasets[1].borderColor ='black';
			barChart.data.datasets[2].borderColor ='black';
			barChart.options.plugins.legend.labels.color= 'black';
			};
			break;
        case 'colorBlindDeuteranopia':{
            barChart.data.datasets[0].backgroundColor = ['#6e6f35', '#6e6f35', '#6e6f35']; // Colores adaptados para deuteranopia
            barChart.data.datasets[1].backgroundColor = ['#b3b373', '#b3b373', '#b3b373']; // Colores adaptados para deuteranopia
			barChart.data.datasets[2].backgroundColor = ['#788cbe', '#788cbe', '#788cbe']; // Colores adaptados para deuteranopia
			barChart.options.scales.y.grid.color= (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)');//ejes blanco
			barChart.options.scales.x.grid.color= (line) => (line.index === 0 ? 'black' : 'rgba(0, 0, 0, 0.0)');
			barChart.options.plugins.title.color= 'black';
			barChart.options.plugins.subtitle.color= 'black';
			barChart.options.scales.y.ticks.color= 'black';
			barChart.options.scales.x.ticks.color= 'black';
			barChart.options.scales.y.title.color= 'black';
			barChart.data.datasets[0].borderColor ='black';
			barChart.options.plugins.legend.labels.color= 'black';
			};			
			break;
			
        default:
            break;
    }
    // Actualizar el gráfico con los nuevos colores
    barChart.update();
}

//colores bandera CV:#0072bc (azul) #FFFF00 (amarillo) y #FF0000 (rojo)
// Colores adaptados para deuteranopia  
//verde milit 6e6f35, caqui suave b3b373, beige amarillento e6e6b4 , azul medio 788cbe, azul fuerte 4c629e

function mostrarTabla() {//memoria: para mejorar la accesibilidad, añadimos un botón para ver el desglose de los datos del gráfico medinate una tabla
            var tabla = document.getElementById('tablaDatos');
            var boton = document.getElementById('mostrarTabla');
            if (tabla.style.display === 'none' || tabla.style.display === '') {
                tabla.style.display = 'table';
                boton.textContent = 'Ocultar datos';//interior del boton
            } else {
                tabla.style.display = 'none';
                boton.textContent = 'Mostrar datos';//interior del boton
            }
        }