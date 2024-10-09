// Получаем элемент body
const bodyEl = document.getElementsByTagName('body')[0];
bodyEl.style.margin = 0;
bodyEl.style.padding = 0;//'0 165px 0 165px'
bodyEl.style.backgroundColor = '#EAEAEA';

// Создаем элемент header
const headerEl = document.createElement('header');
bodyEl.appendChild(headerEl); // Добавляем header в body
headerEl.style.display = 'flex';
headerEl.style.flexDirection = 'row';
headerEl.style.alignItems = 'center';
headerEl.style.justifyContent = 'space-between';
headerEl.style.width = '100%';
headerEl.style.height = '60px';
headerEl.style.backgroundColor = '#EAEAEA';
headerEl.style.position = 'relative';
headerEl.style.marginBottom = '22px';

// Создаем элемент div для логотипа
const divLogo = document.createElement('div');
headerEl.appendChild(divLogo); // Добавляем div в header
divLogo.className = 'logo'; // Устанавливаем класс для div

// Создаем элемент img для логотипа
const logoImgEl = document.createElement('img');
divLogo.appendChild(logoImgEl); // Добавляем img в div
logoImgEl.setAttribute('src', './img/logo.png'); // Устанавливаем атрибут src для img
logoImgEl.style.marginLeft = '155px';

const headerVector = document.createElement('img');
headerEl.appendChild(headerVector);
headerVector.setAttribute('src', './img/vector_icon.png');
headerVector.style.width = '8px';
headerVector.style.height = '5px';
headerVector.style.angle = '-0', 'deg';
headerVector.style.color = '#101010';
headerVector.style.paddingBottom = '4px';

const headerTextEl = document.createElement('p');
headerEl.appendChild(headerTextEl);
headerTextEl.id = 'header_text_el';
document.getElementById("header_text_el").innerHTML = "Выбрать модель телефона";
headerTextEl.style.width = '212px';
headerTextEl.style.height = '18px';
headerTextEl.style.fontFamily = 'Montserrat';
headerTextEl.style.fontWeight = '500';
headerTextEl.style.fontSize = '15px';
headerTextEl.style.lineHeight = '18.29px';
headerTextEl.style.marginRight = '5px';

const phoneImgEl = document.createElement('img');
phoneImgEl.setAttribute('src', './img/phone.png');
phoneImgEl.style.marginRight = '15px';

const divPhoneEl = document.createElement('div');
headerEl.appendChild(divPhoneEl);
divPhoneEl.appendChild(phoneImgEl);
divPhoneEl.appendChild(headerTextEl);
divPhoneEl.appendChild(headerVector);
divPhoneEl.style.display = 'flex';
divPhoneEl.style.flexDirection = 'row';
divPhoneEl.style.alignItems = 'center';

const headerHeart = document.createElement('img');
headerEl.appendChild(headerHeart);
headerHeart.setAttribute('src', './img/heart_icon.png');
headerHeart.style.width = '62px';
headerHeart.style.height = '60px';
headerHeart.style.marginRight = '219px';

const headerCart = document.createElement('img');
headerEl.appendChild(headerCart);
headerCart.setAttribute('src', './img/cart.png');
headerCart.style.width = '23.2px';
headerCart.style.height = '23.2px';
headerCart.style.top = '19.96px';
headerCart.style.left = '1080.49px';
headerCart.style.color = '#838383';
headerCart.style.position = 'absolute';

const header1Icon = document.createElement('img');
headerEl.appendChild(header1Icon);
header1Icon.setAttribute('src', './img/1.png');
header1Icon.style.position = 'absolute';
header1Icon.style.width = '17.4px';
header1Icon.style.height = '18px';
header1Icon.style.top = '13px';
header1Icon.style.left = '1095.49px';
header1Icon.style.color = '#FFFFFF';

const sectionContainer = document.createElement('section');
bodyEl.appendChild(sectionContainer);
sectionContainer.style.backgroundColor = 'rgba(234, 234, 234, 1)';
sectionContainer.style.padding = '0 165px 0 165px';

// Создаем новый элемент div, который будет контейнером для баннера
const divBanner = document.createElement('div');
divBanner.style.display = 'flex';
divBanner.style.flexDirection = 'row';
divBanner.style.alignItems = 'center';
divBanner.style.backgroundColor = '#101010';
divBanner.style.boxShadow = '0px 0px 20px 0px #0000001A';
divBanner.style.width = '100%';
divBanner.style.height = '197px';
divBanner.style.borderRadius = '30px';
divBanner.style.marginBottom = '44px';

// Добавляем созданный div в body
sectionContainer.appendChild(divBanner);

// Создаем новый элемент img для изображения в баннере
const divBannerImg = document.createElement('img');
divBannerImg.setAttribute('src', './img/iPhone_13.png');
divBannerImg.style.margin = '0 163px 29px 0';

// Создаем новый элемент p для текста в баннере
const divBannerText = document.createElement('p');
divBannerText.style.color = '#FFFFFF';
divBannerText.style.width = '643px';
divBannerText.style.height = '74px';
divBannerText.style.fontFamily = 'Montserrat';
divBannerText.style.fontSize = '30px';
divBannerText.style.fontWeight = '600';
divBannerText.style.lineHeight = '36.57px';
divBannerText.style.textAlign = 'center';
divBannerText.style.marginLeft = '50px';

// Присваиваем элементу p уникальный id
divBannerText.id = 'div_banner_text';

// Добавляем текстовый элемент p в div баннера
divBanner.appendChild(divBannerText);
// Добавляем изображение img в div баннера
divBanner.appendChild(divBannerImg);
// Изменяем содержимое текстового элемента p после его добавления в DOM
document.getElementById("div_banner_text").innerHTML = "Аксессуары для<br>Iphone 13 Pro Max";

const phoneCasesText = document.createElement('p');
sectionContainer.appendChild(phoneCasesText);
phoneCasesText.id = 'phone_cases_text';
document.getElementById('phone_cases_text').innerHTML = 'Чехлы';
phoneCasesText.style.color = 'rgba(131, 131, 131, 1)';
phoneCasesText.style.width = '69px';
phoneCasesText.style.height = '24px';
phoneCasesText.style.fontFamily = 'Montserrat'
phoneCasesText.style.fontWeight = '600';
phoneCasesText.style.fontSize = '20px';
phoneCasesText.style.lineHeight = '24.38px';
phoneCasesText.style.marginBottom = '20px';

const divCards = document.createElement('div');
sectionContainer.appendChild(divCards);
divCards.style.display = 'flex';
divCards.style.flexDirection = 'row';
divCards.style.justifyContent = 'center';
divCards.style.gap = '30px';


const divCard1 = document.createElement('div');
divCards.appendChild(divCard1);
divCard1.style.display = 'flex';
divCard1.style.flexDirection = 'column';
divCard1.style.width = '350px';
divCard1.style.height = '407.65px';
divCard1.style.backgroundColor = 'rgba(255, 255, 255, 1)';
divCard1.style.borderRadius = '30px';
divCard1.style.boxShadow = '0px 0px 20px 0px rgba(0, 0, 0, 0.1)';

const case1 = document.createElement('img');
divCard1.appendChild(case1);
case1.setAttribute('src', './img/case_1.png');
case1.style.width = '151px';
case1.style.height = '292px';
case1.style.margin = '25px 99px 20px 100px';

const divCardText1 = document.createElement('p');
divCard1.appendChild(divCardText1);
divCardText1.id = 'div_card_text1';
document.getElementById('div_card_text1').innerHTML = 'Стеклянные';
divCardText1.style.width = '112px';
divCardText1.style.height = '21px';
divCardText1.style.margin = '0 119px 49.65px 119px';
divCardText1.style.fontFamily = 'Montserrat';
divCardText1.style.fontSize = '17px';
divCardText1.style.fontWeight = '600';
divCardText1.style.lineHeight = '20.72px';
divCardText1.style.color = 'rgba(28, 28, 39, 1)';

const divCard2 = document.createElement('div');
divCards.appendChild(divCard2);
divCard2.style.display = 'flex';
divCard2.style.flexDirection = 'column';
divCard2.style.width = '350px';
divCard2.style.height = '407.65px';
divCard2.style.backgroundColor = 'rgba(255, 255, 255, 1)';
divCard2.style.borderRadius = '30px';
divCard2.style.boxShadow = '0px 0px 20px 0px rgba(0, 0, 0, 0.1)';

const case2 = document.createElement('img');
divCard2.appendChild(case2);
case2.setAttribute('src', './img/case_2.png');
case2.style.width = '151px';
case2.style.height = '291px';
case2.style.margin = '25px 99px 20px 100px';

const divCardText2 = document.createElement('p');
divCard2.appendChild(divCardText2);
divCardText2.id = 'div_card_text2';
document.getElementById('div_card_text2').innerHTML = 'Силиконовые';
divCardText2.style.width = '127px';
divCardText2.style.height = '21px';
divCardText2.style.fontFamily = 'Montserrat';
divCardText2.style.fontSize = '17px';
divCardText2.style.fontWeight = '600';
divCardText2.style.lineHeight = '20.72px';
divCardText2.style.color = 'rgba(28, 28, 39, 1)';
divCardText2.style.margin = '1px 111px 49.65px 112px';


const divCard3 = document.createElement('div');
divCards.appendChild(divCard3);
divCard3.style.display = 'flex';
divCard3.style.flexDirection = 'column';
divCard3.style.width = '350px';
divCard3.style.height = '407.65px';
divCard3.style.backgroundColor = 'rgba(255, 255, 255, 1)';
divCard3.style.borderRadius = '30px';
divCard3.style.boxShadow = '0px 0px 20px 0px rgba(0, 0, 0, 0.1)';

const case3 = document.createElement('img');
divCard3.appendChild(case3);
case3.setAttribute('src', './img/case_3.png');
case3.style.width = '151px';
case3.style.height = '291px';
case3.style.margin = '25px 99px 20px 100px';

const divCardText3 = document.createElement('p');
divCard3.appendChild(divCardText3);
divCardText3.id = 'div_card_text3';
document.getElementById('div_card_text3').innerHTML = 'Кожаные';
divCardText3.style.width = '85px';
divCardText3.style.height = '21px';
divCardText3.style.fontFamily = 'Montserrat';
divCardText3.style.fontSize = '17px';
divCardText3.style.fontWeight = '600';
divCardText3.style.lineHeight = '20.72px';
divCardText3.style.color = 'rgba(28, 28, 39, 1)';
divCardText3.style.margin = '-1px 32px 49.65px 133px';

const headphonesText = document.createElement('p');
sectionContainer.appendChild(headphonesText);
headphonesText.id = 'headphones_text';
document.getElementById('headphones_text').innerHTML = 'Наушники';
headphonesText.style.width = '114px';
headphonesText.style.height = '24px';
headphonesText.style.margin = '30px 1161px 20px 0';
headphonesText.style.fontFamily = 'Montserrat';
headphonesText.style.fontSize = '20px';
headphonesText.style.fontWeight = '600';
headphonesText.style.lineHeight = '24.38px';
headphonesText.style.color = 'rgba(131, 131, 131, 1)';








































