# Тестування працездатності системи

Тестування сервісу проводилося за допомогою застосунку [Postman](https://www.google.com/search?q=postman&rlz=1C1GCEA_enUA1034UA1034&oq=postman&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMTA4NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8).

## Отримання користувача (метод GET)

### Успішне отримання усіх користувачів

![img.png](get_all_success.png)

### Успішне отримання одного користувача

![img.png](get_one_success.png)

### Спроба отримати неіснуючого користувача

![img.png](get_one_not_found.png)

## Створення користувача (метод POST)

### Успішне створення користувача

![img.png](post_success.png)

### Спроба створити користувача з вже існуючими даними

![img.png](post_already_exist.png)

### Спроба створити користувача без відповідних даних

![img.png](post_without_data.png)

## Оновлення користувача (метод PATCH)

### Успішне оновлення користувача

![img.png](patch_success.png)

### Оновлення неіснуючого користувача

![img.png](patch_not_found.png)

## Видалення користувача (метод DELETE)

### Успішне видалення користувача

![img.png](delete_success.png)

### Видалення неіснуючого користувача

![img.png](delete_not_found.png)
