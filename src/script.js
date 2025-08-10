
// Sayaç (Countdown Timer)
function countdown() {
  const countDate = new Date("Sep 04, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDate - now;

  // Gün, saat, dakika, saniye hesaplama
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Sayacın DOM'a yazdırılması
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Sayaç bitince bir şeyler yapmak isterseniz
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Launch Time!";
  }
}
