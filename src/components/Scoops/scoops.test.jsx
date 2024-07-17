import { render, screen } from "@testing-library/react";
import Scoops from ".";



/* 
 ! Seçiciler
 1) Method Tipi | 2) All İfadesi | 3) Seçici Method
  
 * get > başlangıçta dom da olan elementleri almak
  için kullanılır | elementi bulamazsa test başarısız olursa

 * query > elementin ekranda olma durumu kesin
   değilse kullanılır get ile benzer çalışır | 
   element bulunamazsa null döndürür test devam eder

 * find > elementin ne zaman ekrana basılacağı 
   belli değilse (api isteklerinde) kullanılır.
 * not: find methodu promise döndürdüğünden async await ile kullanılmalı

  * eğer methoda all ifadesi eklersek seçici 
   koşuluna uyan bütün elemanları getirir
  * not: all kullanılırsa dönen cevap her zaman dizi olur
*/


it("Api den alınan veriler için ekrana kartlar basılır", async ()=> {
    render(<Scoops />);

// ekrana basılan kartları al
const images = await screen.findAllByAltText("çeşit-resim");

// ekrandaki resimlerin (kartların) sayısı 1 den fazla mı ?
expect(images.length).toBeGreaterThanOrEqual(1);

});

it("Çeşitlerin ekleme ve azaltma özelliklerinin toplam fiyata etkisi", async ()=> {

// test edilecek bileşen render edilir
render(<Scoops />)

// bütün ekleme ve azaltma butonlarını çağır

  const addBtns = await screen.findAllByRole("button", { name: "Ekle" });
  const delBtns = await screen.findAllByRole("button", { name: "Azalt" });


// toplam fiyat elementini çağır
const total = screen.getByTestId("total");

// toplam fiyat 0 mı? Kontrol et 
expect(total.textContent).toBe("0");

//Chocolate ekle  butonuna tıkla


// Toplam fiyat 20 mi kontrol et


// Vanilla nın ekle butonuna 2 kez tıkla



 // toplam fiyat 60 mi kontrol et


// vanillanın azalt butonuna  tıkla


 // toplam fiyat 40 mı kontrol et


 // vanillanın azalt butonuna  tıkla


 // toplam fiyat 20 mı kontrol et


 // chocalte'ın azalt butonuna tıkla


   // toplam fiyat 0 mı kontrol et



});
