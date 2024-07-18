import { findAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from ".";

test("sosları ekleme ve çıkarma işleminin toplam fiyata etkisi ", async () => {
  const user = userEvent.setup();

  // 1) bileşeni renderla
  render(<Toppings/>);
  // 2) Bütün sos checkedbox larını al
  const toppings = await screen.findAllByRole("checkbox");
  // 3) toplam spanını al
  const total = screen.getByTestId("total");
  // 4)  Tüm checkboxların tiksiz olduğunu kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());
  // 5) toplam ücret 0 mı kontrol et
  expect(total.textContent).toBe("0");
  // 6) soslardan birine tıkla
  await user.click(toppings[4]);
  // 7) toplam ücret 3 mü kontrol et
  expect(total.textContent).toBe("3");
  // 8) farklı bir sos a tıkla
  await user.click(toppings[0]);
  // 9) toplam ücret 6 mı kontrol et
  expect(total.textContent).toBe("6");
  // 10) soslardan birinin tikini kaldır
  await user.click(toppings[4]);
  // 11) toplam ücret 3 mü kontrol et
  expect(total.textContent).toBe("3");
  // 12) soslardan birinin tikini kaldır
  await user.click(toppings[0]);
  // 13) toplam ücret 0 mü kontrol et
  expect(total.textContent).toBe("0");
});




