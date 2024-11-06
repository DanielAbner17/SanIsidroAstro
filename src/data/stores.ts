export interface Store {
  title: string;
  imageName: string;
  alt: string;
  horario: string;
  categoria:
    | 'Restaurantes y Alimentos'
    | 'Salud y Belleza'
    | 'Mascotas'
    | 'Bancos y Servicios Financieros'
    | 'Servicios y Tienda departamental'
    | 'Servicios, bancos y cajeros'
    | 'Autoservicio'
    | 'Otros';
}

export const stores: Store[] = [
  {
    title: 'WINGS ARMY',
    imageName: 'logo-wingsarmy.JPG',
    alt: 'Logo WINGS ARMY',
    horario: `<strong>DOM-JUE:</strong> 13:00 - 00:00 <br/><strong>VIE-SAB:</strong> 13:00 - 01:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'MENG HONG',
    imageName: '',
    alt: 'Logo MENG HONG',
    horario: `<strong>L-D:</strong> 11:00 - 20:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'CROISSANT ALFREDO',
    imageName: 'logo-croissantalfredo.png',
    alt: 'Logo CROISSANT ALFREDO',
    horario: `<strong>L-S:</strong> 08:00 - 21:30 <br/><strong>DOM y Festivos:</strong> 11:00 - 21:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'BUDDY PET',
    imageName: 'logo-buddypet.jpg',
    alt: 'Logo BUDDY PET',
    horario: `<strong>L-S:</strong> 09:00 - 20:00 <br/><strong>DOM:</strong> 10:00 - 17:00`,
    categoria: 'Mascotas',
  },
  {
    title: 'FRESH SALADS',
    imageName: 'logo-freshsalads.png',
    alt: 'Logo FRESH SALADS',
    horario: `<strong>L-D:</strong> 11:00 - 20:45`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'LA MICHOACANA',
    imageName: 'logo-michoacana.png',
    alt: 'Logo LA MICHOACANA',
    horario: `NA`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'GLAM HOUSE',
    imageName: '',
    alt: 'Logo GLAM HOUSE',
    horario: `<strong>L-V:</strong> 10:00 - 19:00 <br/><strong>S:</strong> 10:00 - 16:00 <br/><strong>DOM:</strong> Cerrado`,
    categoria: 'Salud y Belleza',
  },
  {
    title: 'BBVA',
    imageName: 'logo-bbva.png',
    alt: 'Logo BBVA',
    horario: `<strong>L-V:</strong> 08:30 - 16:00 <br/><strong>S:</strong> 09:00 - 14:30 <br/><strong>DOM:</strong> Cerrado`,
    categoria: 'Bancos y Servicios Financieros',
  },
  {
    title: 'HSBC',
    imageName: 'logo-hsbc.png',
    alt: 'Logo HSBC',
    horario: `<strong>L-V:</strong> 08:30 - 16:30 <br/><strong>S:</strong> 09:00 - 14:00 <br/><strong>DOM:</strong> Cerrado`,
    categoria: 'Bancos y Servicios Financieros',
  },
  {
    title: 'SALLY',
    imageName: 'logo-sally.png',
    alt: 'Logo SALLY',
    horario: `<strong>L-D:</strong> 10:00 - 20:00`,
    categoria: 'Salud y Belleza',
  },
  {
    title: 'GNC',
    imageName: 'logo-gnc.png',
    alt: 'Logo GNC',
    horario: `<strong>L-V:</strong> 09:00 - 20:00 <br/><strong>S:</strong> 09:00 - 19:30 <br/><strong>DOM:</strong> 09:00 - 19:00`,
    categoria: 'Salud y Belleza',
  },
  {
    title: 'TELCEL',
    imageName: 'logo-telcel.png',
    alt: 'Logo TELCEL',
    horario: `<strong>L-S:</strong> 09:00 - 19:00 <br/><strong>DOM:</strong> 10:00 - 18:00`,
    categoria: 'Servicios y Tienda departamental',
  },
  {
    title: 'INBURSA',
    imageName: 'logo-inbursa.png',
    alt: 'Logo INBURSA',
    horario: `<strong>L-V:</strong> 08:30 - 17:30 <br/><strong>S-D:</strong> Cerrado`,
    categoria: 'Bancos y Servicios Financieros',
  },
  {
    title: 'WALMART EXPRESS',
    imageName: 'logo-walmartexpress.png',
    alt: 'Logo WALMART EXPRESS',
    horario: `<strong>L-D:</strong> 07:00 - 22:00`,
    categoria: 'Autoservicio',
  },
  {
    title: 'ANYTIME FITNESS',
    imageName: 'logo-anytimefitness.png',
    alt: 'Logo ANYTIME FITNESS',
    horario: `24 HRS, 365 DIAS DEL AÑO (CON MEMBRESIA)`,
    categoria: 'Salud y Belleza',
  },
  {
    title: 'PASTELERIA NEUFELD',
    imageName: 'logo-pastelerianeufeld.png',
    alt: 'Logo PASTELERIA NEUFELD',
    horario: `<strong>L-S:</strong> 08:00 - 21:00 <br/><strong>DOM:</strong> 09:00 - 21:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'MOVISTAR',
    imageName: 'logo-movistar.png',
    alt: 'Logo MOVISTAR',
    horario: `<strong>L-S:</strong> 10:00 - 19:00 <br/><strong>DOM:</strong> Cerrado`,
    categoria: 'Servicios y Tienda departamental',
  },
  {
    title: 'ENVIO SHOP',
    imageName: 'logo-envioshop.webp',
    alt: 'Logo ENVIO SHOP',
    horario: `<strong>L-V:</strong> 09:00 - 19:00 <br/><strong>S:</strong> 10:00 - 14:00 <br/><strong>DOM:</strong> Cerrado`,
    categoria: 'Servicios y Tienda departamental',
  },
  {
    title: 'TECNO LAND',
    imageName: 'logo-tecnoland.png',
    alt: 'Logo TECNO LAND',
    horario: `<strong>L-S:</strong> 10:00 - 20:00 <br/><strong>DOM:</strong> 11:00 - 20:00`,
    categoria: 'Servicios y Tienda departamental',
  },
  {
    title: 'TOKAI',
    imageName: 'logo-tokai.png',
    alt: 'Logo TOKAI',
    horario: `<strong>L-D:</strong> 13:00 - 23:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'ULTRAKLIN',
    imageName: 'logo-ultraklin.png',
    alt: 'Logo ULTRAKLIN',
    horario: `<strong>L-V:</strong> 10:00 - 19:00 <br/><strong>S-D:</strong> 10:00 - 15:00`,
    categoria: 'Servicios y Tienda departamental',
  },
  {
    title: 'EL POLLO PEPE',
    imageName: 'logo-elpollopepe.png',
    alt: 'Logo EL POLLO PEPE',
    horario: `<strong>L-D:</strong> 11:00 - 20:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: "CARL'S JR",
    imageName: 'logo-carlsjr.png',
    alt: "Logo CARL'S JR",
    horario: `<strong>L-D:</strong> 18:00 - 23:00`,
    categoria: 'Restaurantes y Alimentos',
  },
  {
    title: 'BLACK COFFEE GALLERY',
    imageName: 'logo-blackcoffeegallery.png',
    alt: 'Logo BLACK COFFEE GALLERY',
    horario: `<strong>L-JUE:</strong> 07:00 - 22:00 <br/><strong>V-S:</strong> 08:00 - 23:00 <br/><strong>DOM:</strong> 08:00 - 20:00`,
    categoria: 'Restaurantes y Alimentos',
  },
];
