import { render } from "@testing-library/react"
import Form from "."

test("Koşulların onaylanma durumuna göre buton aktifliği", ()=>{


    // 1) test edilecek bileşen render edilir

render(<Form />)
    // 2) Gerekli elemanları çağır ( checkbox | button )

screen.getByRole("")
    // 3) Checkbox tiklenmemiş mi kontrol et


    // 4) buton inaktiftir mi kontrol et


    // 5) Checkbox ı tikle


    // 6) Buton aktif mi kontrol et


    // 7) Checkbox tan tiki kaldır


    // 8) Buton inaktif mi kontrol et
})