const targetDate=new Date("2050-01-01").getTime(),countdownElement=document.getElementById("countdown");function isMobile(){return 600>=window.innerWidth}function updateCountdown(){const a=new Date().getTime(),b=targetDate-a,c=Math.floor(b/86400000),d=Math.floor(b%86400000/3600000),e=Math.floor(b%3600000/60000),f=Math.floor(b%60000/1e3);countdownElement.innerHTML=isMobile()?`
  <span class="title-unit">Faltam</span>
  <span class="time-unit">${c} dias</span>
  <span class="time-unit">${d} horas</span>
  <span class="time-unit">${e} minutos</span>
  <span class="time-unit">${f} segundos</span>
  <span class="count-text">para o fim da Amazônia</span>
`:`
  <span class="title-unit">Faltam</span>
  <span class="time-unit">${c}d</span>
  <span class="time-unit">${d}h</span>
  <span class="time-unit">${e}m</span>
  <span class="time-unit">${f}s</span>
  <span class="count-text">para o fim da Amazônia</span>
`,0>b&&(clearInterval(interval),countdownElement.innerHTML="O Tempo Acabou!")}const interval=setInterval(updateCountdown,1e3);updateCountdown();