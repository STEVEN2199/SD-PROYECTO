const Hotel = require('./modeloHotel');

const modelo = {}

modelo.documentos = [
    new Hotel('hotel_00001' ,'Hotel Sol De Oriente', 'Hotel 5 estrellas ubicado en el norte de la ciudad de Guayaquil','Av. francisco de Orellana', '(04)243-4671', 'soloriente@gmail.com', 'https://ftsolutions.com.ec/wp-content/uploads/2019/05/Hotel-Sol-de-Oriente-Logo-Header.png', 'https://cf.bstatic.com/xdata/images/hotel/max500/28025407.jpg?k=a7955e954e9c69ed9161773daf86255530219d337dad0fdd4e097938793b7f09&o=&hp=1', '30 km de aqui', '112'),
    new Hotel('hotel_00002' ,'Hotel Wyndham', 'Explora la vibrante cultura artística local de Las Peñas. Reserva en Wyndham Guayaquil! Disfruta de nuestra piscina en la terraza, spa y gimnasio',' Numa Pompilio Llona S-N, Guayaquil 090013', '(04) 371-7800', 'soloriente@gmail.com',  'https://e7.pngegg.com/pngimages/127/411/png-clipart-wyndham-hotels-resorts-ramada-wyndham-hotel-group-llc-wyndham-destinations-hotel-blue-text.png', 'https://static11.com-hotel.com/uploads/hotel/16156/photo/hotel-wyndham-guayaquil_15499710495.jpeg', '20 km de aqui', '112'),
    new Hotel('hotel_00003' ,'Hotel Hilton Colon', 'Situado a 1 km del centro comercial San Marino y del barrio del centro de la localidad, ofrece alojamiento de lujo completo seguro','Av. francisco de Orellana', '(04)501-0000', 'www.hiltonhotels.com', 'http://www.hotelcolon.com.ec/img/logos/colon_guayaquil.jpg', 'https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg', '30 km de aqui', '305'),
    new Hotel('hotel_00004' ,'Hotel Unipark', 'El Unipark by Oro Verde Hotels está situado junto al parque Seminario, dentro del centro comercial Unicentro, frente a la catedral Metropolitana y a solo 3 calles de Malecón 2000. El establecimiento alberga un centro de fitness moderno y ofrece WiFi gratuita en todas las instalaciones.','406 y, Chile 406', '(04) 232-7100', 'www.uniparkhotel.com/es',  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1lMGyTZ1lCzlf22gE64qOk9QR1rW-dPekkABvW5Y3FpCWqP_dqE5M9Mu9vTUYfHllZM&usqp=CAU', 'https://turismoaccesible.ec/site/wp-content/uploads/2016/11/UNIPARK-7.jpg', '20 km de aqui', '112'),
    new Hotel('hotel_00005' ,'Grand Hotel Guayaquil', 'El Grand Hotel Guayaquil, Ascend Hotel Collection está situado junto a la catedral metropolitana de Guayaquil y cuenta con piscina al aire libre, gimnasio y restaurante. Ofrece habitaciones con WiFi gratuita y TV de pantalla plana.','Boyaca entre, Diez de Agosto &, Guayaquil 090307', '(04) 232-9690', 'https://www.grandhotelguayaquil.com/', 'https://oceanclub.com.ec/wp-content/uploads/2017/04/grand-hotel-guayaquil.png', 'http://guayaquilconventionbureau.com/wp-content/uploads/2020/06/ghguayaquil-01.jpg', '43 km de aqui', '150'),
    new Hotel('hotel_00006' ,'Radisson Hotel', 'El Radisson Hotel Guayaquil está ubicado en Guayaquil, a 3,5 km de la iglesia de San Francisco, y ofrece alojamiento, restaurante, centro de fitness, aparcamiento privado gratuito y piscina de temporada al aire libre.',' Ciudadela Kennedy Av. Gral. Francisco Boloña', '(04) 600-8080', 'www.radissonhotelsamericas.com',  'https://amchamcolombia.co/wp-content/uploads/2018/04/logo-radisson-abril.png', 'https://media.radissonhotelsamericas.com/image/radisson-hotel-guayaquil/exteriorview/20828-141045-f63635400_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=603', '50 km de aqui', '123'),
    new Hotel('hotel_00007' ,'Yu! SmartHotels S.A', 'El YU! Smarthotels está situado en Guayaquil, en la región Guayas, a 200 metros del Malecón 2000, y cuenta con terraza y vistas a la ciudad.','Guayaquil 090306', '(04) 259-7850', 'www.yuhotels.com/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdF9xmiK4bagZF-d54HRNL7hzUjTH1tDOZCBv6QZMb6XgpBm4DNX3Ghhm-yxEtVuZEZM&usqp=CAU', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76602691.jpg?k=aeb4020cee4bcbbb37e7a4d38b3cc713f2faa29cda9c6dad308a622415caa7b1&o=&hp=1', '24 km de aqui', '89'),
    new Hotel('hotel_00008' ,'Hotel Ramada', 'Este hotel, situado a 3 minutos del aeropuerto internacional José Joaquín de Olmedo y a 800 metros de la plaza del Sol, ofrece alojamiento moderno en la zona comercial y financiera principal de Guayaquil. Además, alberga un centro de bienestar y proporciona WiFi y aparcamiento gratuitos.','Malecón Simón Bolívar 606 y, Luzarraga', '(04) 256-5555', 'https://www.hotelramada.com',  'https://1000marcas.net/wp-content/uploads/2021/06/Ramada-Logo.jpg', 'https://content.r9cdn.net/rimg/kimg/9c/0e/81c37d60-16d16bbde84.jpg?width=1004&height=500&xhint=929&yhint=367&crop=true', '30 km de aqui', '67'),
];

module.exports = modelo; 
