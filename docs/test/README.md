# Тестування працездатності системи

Тестування сервісу проводилося за допомогою застосунку [Postman](https://www.google.com/search?q=postman&rlz=1C1GCEA_enUA1034UA1034&oq=postman&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEIMTA4NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8).

## Створення проєкту (метод POST)

### Запит на створення проєкту

![create_project.png](https://i.imgur.com/klqCKsg.png)

### Відповідь на створення проєкту

![create_project_response.png](https://imgur.com/637Tgxy.png)

### Спроба створити проєкт з помилковим часом

![create_project_exception_data.png](https://imgur.com/dwG07UD.png)

### Спроба створити проєкт з вже існуючою назвою

![create_project_exception_title.png](https://imgur.com/UnZ0kPj.png)

## Отримання проєкту (метод GET)

### Успішне отримання проєкту

![get_project.png](https://imgur.com/klqCKsg.png)

### Помилка в отриманні проєкту

![get_project_exeption_invalid_id.png](https://imgur.com/n5sXEyq.png)

## Оновлення проєкту (метод PATCH)

### Запит на оновлення проєкту

![patch_project.png](https://imgur.com/u9jtyoS.png)

### Відповідь на оновлення проєкту

![patch_project_response.png](https://imgur.com/5p5V7Hm.png)

### Помилка в оновленні проєкту

![patch_project_exception_invalid_id.png](https://imgur.com/SiTBbhY.png)

## Видалення користувача (метод DELETE)

### Успішне видалення проєкту

![delete_project.png](https://imgur.com/wzE6owA.png)

### Видалення неіснуючого проєкту

![delete_project_exeption_invalid_id.png](https://imgur.com/vIcyLwW.png)
