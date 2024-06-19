var map = L.map('map').setView([-27.43740, -58.97994], 22);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var CustomIcon = L.DivIcon.extend({
            createIcon: function () {
                var div = document.createElement('div');
                div.className = 'custom-marker';
                var img = document.createElement('img');
                img.src = this.options.iconUrl;
                div.appendChild(img);
                return div;
            }
        });

       
        var customIcon1 = new CustomIcon({ iconUrl: './img/angelmio.jpg' });
        var customIcon2 = new CustomIcon({ iconUrl: './img/pasdedeux.jpg' }); 
        var customIcon3 = new CustomIcon({ iconUrl: './img/conexion.jpg' });
        var customIcon4 = new CustomIcon({ iconUrl: './img/federicomoura.jpg' });
        var customIcon5 = new CustomIcon({ iconUrl: './img/shepere.jpg' });
        var customIcon6 = new CustomIcon({ iconUrl: './img/melodiadefuga.jpg' });
        var customIcon7 = new CustomIcon({ iconUrl: './img/pinchila.jpg' });
        var customIcon8 = new CustomIcon({ iconUrl: './img/bosque.jpg' });        
        var customIcon9 = new CustomIcon({ iconUrl: './img/cincel.jpg'});
        var customIcon10 = new CustomIcon({ iconUrl: './img/arbolytormenta.jpg' });  
        var customIcon12 = new CustomIcon({ iconUrl: './img/peatonal_escultura.jpeg' }); 

      
        var popupContent1 = '<div class="popup-content">' +
            '<h3>Angel mio</h3>' +
            '<p>Autor: Dinev, Mitko.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Hierro</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Colosal</p>' +
            '<p>Fecha de inaguracion: 1999</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/angelmio.jpg">' +
            '</div>';
       
        var popupContent2 = '<div class="popup-content">' +
            '<h3>Pas de Deux</h3>' +
            '<p>Autor: Kühnapfel, Thomas.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Chapa</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Colosal</p>' +
            '<p>Fecha de inaguracion: 1998</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/pasdedeux.jpg">' +
            '</div>';
              
            
        var popupContent3 = '<div class="popup-content">' +
            '<h3>Conexion</h3>' +
            '<p>Autor: Soans, Jaak.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Hierro</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Grande</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/conexion.jpg">' +
            '</div>';

            
        var popupContent4 = '<div class="popup-content">' +
            '<h3>Homenaje a Federico Moura</h3>' +
            '<p>Autor: Pezzani, Juan.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: chapa</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Grande</p>' +
            '<p>Fecha de inaguracion: 2006</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/federicomoura.jpg">' +
            '</div>';

        var popupContent5 = '<div class="popup-content">' +
            '<h3>La Sphere Opposée</h3>' +
            '<p>Autor: 	Lestander, Dan y Sandberg, Ricky.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Cemento</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Colosal</p>' +
            '<p>Fecha de inaguracion: 1992</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/shepere.jpg">' +
            '</div>';

        var popupContent6 = '<div class="popup-content">' +
            '<h3>Melodia de fuga</h3>' +
            '<p>Autor: Dinev, Mitko.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Chapa</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Colosal</p>' +
            '<p>Fecha de inaguracion: 2006</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/melodiadefuga.jpg">' +
            '</div>';

        var popupContent7 = '<div class="popup-content">' +
            '<h3>Pinchila</h3>' +
            '<p>Autor: Dompé, Hernán.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Marmol</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Grande</p>' +
            '<p>Fecha de inaguracion: 1997</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/pinchila.jpg">' +
            '</div>';
  

        var popupContent8 = '<div class="popup-content">' +
            '<h3>Bosque</h3>' +
            '<p>Autor: Inoue, Baku.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Marmol</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Mediano</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/bosque.jpg">' +
            '</div>';

        var popupContent9 = '<div class="popup-content">' +
            '<h3>Cincel</h3>' +
            '<p>Autor: Gamarra, Jorge.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Mixto</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Colosal</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/cincel.jpg">' +
            '</div>';  
        
        var popupContent10 = '<div class="popup-content">' +
            '<h3>Libre y Forzado</h3>' +
            '<p>Autor: Gangolf, Serge.</p>' +
            '<p>Ubicación: Domo del centenario.</p>' +
            '<p>Rama: Ornamental</p>' +
            '<p>Material: Marmol</p>' +
            '<p>Tipo: Exenta</p>' +
            '<p>Tamaño: Grande</p>' +
            '<p>Fecha de inaguracion: 1997</p>' +
            '<p>Tema: Libre</p>' +
            '<img class="popup-img" src="./img/libreyforzado.jpg">' +
            '</div>';
    

        
        L.marker([-27.43799,-58.98120], { icon: customIcon1 })
            .addTo(map)
            .bindPopup(popupContent1);

        L.marker([-27.43732,-58.98100], { icon: customIcon2 })
            .addTo(map)
            .bindPopup(popupContent2);  
            
        L.marker([-27.43751,-58.98152], { icon: customIcon3 })
            .addTo(map)
            .bindPopup(popupContent3);

        L.marker([-27.43732,-58.98106], { icon: customIcon4 })
            .addTo(map)
            .bindPopup(popupContent4); 
           
        L.marker([-27.43751,-58.98148], { icon: customIcon5 })
            .addTo(map)
            .bindPopup(popupContent5); 
            
        L.marker([-27.43682,-58.98136], { icon: customIcon6 })
            .addTo(map)
            .bindPopup(popupContent6);
            
        L.marker([-27.43755,-58.98100], { icon: customIcon7 })
            .addTo(map)
            .bindPopup(popupContent7);        
    
        L.marker([-27.43775,-58.97996], { icon: customIcon8 })
            .addTo(map)
            .bindPopup(popupContent8); 

        L.marker([-27.43751,-58.98155], { icon: customIcon9 })
            .addTo(map)
            .bindPopup(popupContent9);

        L.marker([-27.43752,-58.98156], { icon: customIcon10 })
            .addTo(map)
            .bindPopup(popupContent10);  
        