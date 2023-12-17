# Тестування працездатності системи

Тестування сервісу проводилося за допомогою застосунку [Postman](https://www.google.com/search?q=postman&rlz=1C1GCEA_enUA1034UA1034&oq=postman&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMTA4NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8).

## Отримання користувача (метод GET)

### Успішне отримання усіх користувачів

![get_all_success.png](https://imgur.com/hXfY3m1.jpg)

### Успішне отримання одного користувача

![get_one_success.png](https://imgur.com/BiBhJIX.jpg)

### Спроба отримати неіснуючого користувача

![img.png](https://imgur.com/f3l2iFH.jpg)

## Створення користувача (метод POST)

### Успішне створення користувача

![img.png](https://imgur.com/cugsxCd.jpg)

### Спроба створити користувача з вже існуючими даними

![img.png](https://imgur.com/KLjrFT7.jpg)

### Спроба створити користувача без відповідних даних

![img.png](https://imgur.com/4TK50ar.jpg)

## Оновлення користувача (метод PATCH)

### Успішне оновлення користувача

![img.png](https://imgur.com/yPNbGRp.jpg)

### Оновлення неіснуючого користувача

![img.png](https://imgur.com/Bdu7fFW.jpg)

## Видалення користувача (метод DELETE)

### Успішне видалення користувача

![img.png](https://imgur.com/mPE85y4.jpg)

### Видалення неіснуючого користувача

![img.png](https://imgur.com/D8Was3s.jpg)
