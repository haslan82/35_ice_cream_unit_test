# Kütüphaneler

- json-server
- bootstrap
- axios@^0.27.2
- @testing-library/user-event@14.0

# Selectors - Seçiciler

- Test içerisnde jsx elementlerini çağırmay yarayan methodlar
- screen nesnesi aracılığı ile kullanılır
- https://testing-library.com/docs/queries/byrole

# HTML Element Rolleri

- Her html elementini kendini temsil eden bir rolü vardır bu roller bazen etiket ismi ile aynı (button 'un rolü button) bazen farklı (h1'in rolü heading) olabilir

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles


# Matchers - Kontrolcüler

- expect komutu ile birlikte kullanılan ve bir elementin üzerindeki beklentimizi kontrol eden methodlar. (rengi kırmızıdır | input tiklenmiştir | buton aktiftir | yazı içeri şudur | fonkiyon çağrılmıştır | dizinin uzunluğu 5 tir )


- element kontrolleri
- https://github.com/testing-library/jest-dom


- diğer kontroller
- https://jestjs.io/docs/using-matchers



# Test Geliştirme Süreçleri


## TDD (Test Driven Development)

- Önce testler yazılır sonrasında işlevler kodlanır
- red to green
- Artısı, testler bir yük gibi gelmez. Geliştirme sürecinin bir parçası oluyor. Testleri yazarken dinamaik yapının algoritmasını oluştrduğumuz için işlevi daha hızlı kodlarız

## BDD (Behaviour Driven Development)

- Önce özellik / işlev geliştirilir daha sonra testleri yazılır

- 100% test covarage

# FireEvent

- rtl içerisnde gelen olay tetikleme methodu
- gerçek kullanıcıdan uzak tepkiler verdiği için yerini userEvent'e bıraktı
- tetiklenen olaylar gerçek bir insanın tepkisinden çok daha hızlı bir şekilde aniden gerçekleştiği için testlerde tutarsızlıklara ve beklenmedik sonuçlara yol açabiliyor

# UserEvent

- firevent'in modern / gelişmiş versiyonu
- tetiklediğimiz olaylar firevent gibi doğrudan tetiklenmesi yerine gerçek bir kullanıyı simüle ederek belirlie bir gecikmenin ardından tetiklenir.
- kullanılması için kütüphanenin projeye kurluması gerekir
- async çalıştığı için async await ile kullanılır

### Package.json 
Package.json içerisinde scripts kısmına 

"server": "json-server --watch db.json --port 4000" eklersek 

Chrome json viewer eklentisini kurarsak json verisi daha güzel görünür

npm run server yazarak server ı ayağa kaldırırız. 
Yoksa npm run --watch db.json --port 4000" diye uzuncaa yazmak zorunda kalırız.
## Canlı Proje

https://34-x-clone-twitter.vercel.app/



##  Designed by <a href="https://www.linkedin.com/in/h%C3%BCseyin-aslan-128519203/" target="_blank">Hüseyin ASLAN</a> 