const foodListEn = [
    "Pad Thai", "Kao-Pad", "Pad-Krapao", "Laab", "Steak", "Noodles", "Pizza", "Ramen",
    "Koi-Kua", "Spaghetti", "Lasagna", "Som-tam", "BBQ", "Curry Rice",
    "Sandwiches", "Masala Dosa", "Seafood Paella", "Chicken Rice", "Fried seafood", "Grilled chicken", "Fried fish miang",
    "Yellow curry", "seafood salad", "Pad Thai-Shrimp", "Fried-crispy pork", 
    "Curry-fried Seafood","Fried pork-garlic","Minced pork omelet", "Shrimp-garlic and pepper", "Beef fried Oyster Sauce",
    "Fried clams celery", "Squid Fried chili paste", "Fried pork-bell peppers", "Fried shrimp-fresh chilli", "Fried pork-egg", "Fried clams-basil",
    "Fried kale-crispy pork", "Morning glory-crispy pork", "Fried broccoli-shrimp", "Fried chicken-green curry", "Crispy pork-chili and salt"
];

const foodListTh = [
    "ผัดไทย", "ข้าวผัด", "ผัดกะเพรา", "ลาบ", "สเต็ก", "ก๋วยเตี๋ยว", "พิซซ่า", "ราเมน",
    "Koi-Kua", "สปาเก๊ตตี้", "ลาซานญ่า", "ตำบักหุ่ง(ส้มตำ)", "บาร์บีคิว", "ข้าวแกงกะหรี่",
    "แซนวิช", "มาซาล่า โดซ่า!?", "ข้าวผัดทะเลสเปน", "ข้าวมันไก่", "ผัดฉ่าทะเล", "ไก่ย่าง", "เมี่ยงปลาทอด",
    "แกงเหลืองยอดมะพร้าวอ่อน", "ยำทะเลรวมมิตร", "ผัดไทยเส้นมะละกอกุ้งแม่น้ำ", "ผัดพริกแกงหมูกรอบ",
    "ผัดผงกะหรี่ทะเล", "หมูทอดกระเทียม", "ไข่เจียวหมูสับ", "กุ้งกระเทียมพริกไทย", "เนื้อผัดน้ำมันหอย",
    "หอยลายผัดฉ่า", "ปลาหมึกผัดพริกเผา", "หมูชิ้นผัดพริกหยวก", "กุ้งผัดพริกสด", "หมูผัดไข่", "หอยลายผัดโหระพา",
    "ผัดคะน้าหมูกรอบ", "ผักบุ้งหมูกรอบ", "บล็อคโคลีผัดกุ้ง", "ไก่ผัดแกงเขียวหวาน", "หมูกรอบผัดพริกเกลือ"
]

const getRandomFood = () => {
    const randomIndex = Math.floor(Math.random() * foodListEn.length);
    return [foodListEn[randomIndex], foodListTh[randomIndex]];
};

document.querySelector("button").addEventListener("click", function() {
    const [randomFoodEn, randomFoodTh] = getRandomFood();
    document.querySelector("h2").innerHTML = randomFoodEn;
    document.querySelector("h3").innerHTML = randomFoodTh;
    animateChar();

});

function animateChar() {
    const charImg = document.getElementById("crop");
    charImg.src = "./images/crop_Happy.gif"
}