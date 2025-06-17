document.addEventListener("DOMContentLoaded", () => {
    /*
  
      //animate ".box" from an opacity of 0 to an opacity of 0.5
      gsap.fromTo(
          ".cont__home h1",
          { scale: 0, },
          { scale: 1, duration: 2 }
      );
      //animate ".box" from an opacity of 0 to an opacity of 0.5
      gsap.fromTo(
          ".cont__home h2",
          { scale: 0, },
          { scale: 1, duration: 2 }
      );
      function scrambleText(element, text, duration = 2) {
          const chars = "!@#$%^&*()_+{}|:<>?-=[];,./";
          let iterations = 0;
          const interval = setInterval(() => {
              element.textContent = text
                  .split("")
                  .map((char, index) => {
                      if (index < iterations) return text[index];
                      return chars[Math.floor(Math.random() * chars.length)];
                  })
                  .join("");
              if (iterations >= text.length) clearInterval(interval);
              iterations += 1;
          }, duration * 1000 / text.length);
      }
  
      const element = document.querySelector("h1");
      const element2 = document.querySelector("h2");
  
      // Obtener el texto del elemento sin usar paréntesis
      scrambleText(element, element.textContent);
      scrambleText(element2, element2.textContent);
  
  
      // Ondas Interactivas con caracteres
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let nodes = [];
      var nodeCount = 50;
      if (window.innerWidth > 1024) {
          nodeCount = 200;
          console.log(window.innerWidth);
  
      }
      console.log(nodeCount);
  
      function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      }
      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
  
      class Node {
          constructor() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.size = Math.random() * 3 + 1;
              this.speedX = (Math.random() - 0.5) * 1.5;
              this.speedY = (Math.random() - 0.5) * 1.5;
              this.color = "#d66cec";
          }
          update() {
              this.x += this.speedX;
              this.y += this.speedY;
              if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
              if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
          }
          draw() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fillStyle = this.color;
              ctx.fill();
          }
      }
  
      function createNodes() {
          for (let i = 0; i < nodeCount; i++) {
              nodes.push(new Node());
          }
      }
  
      function drawConnections() {
          for (let i = 0; i < nodes.length; i++) {
              for (let j = i + 1; j < nodes.length; j++) {
                  let dx = nodes[i].x - nodes[j].x;
                  let dy = nodes[i].y - nodes[j].y;
                  let distance = Math.sqrt(dx * dx + dy * dy);
                  if (distance < 150) {
                      ctx.beginPath();
                      ctx.moveTo(nodes[i].x, nodes[i].y);
                      ctx.lineTo(nodes[j].x, nodes[j].y);
                      ctx.strokeStyle = "rgba(214, 108, 236, 0.2)";
                      ctx.lineWidth = 1;
                      ctx.stroke();
                  }
              }
          }
      }
  
      function animateNodes() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawConnections();
          nodes.forEach(node => {
              node.update();
              node.draw();
          });
          requestAnimationFrame(animateNodes);
      }
  
      createNodes();
      animateNodes();
  
     
  
  
  
  
  
  
    
      gsap
          .timeline({
              scrollTrigger: {
                  trigger: ".cont__home",
                  scrub: 0.5,
                  pin: true,
                  start: "top top",
                  end: "bottom"
              }
          })
          .to(".cont__home", {
              ease: "power1.out",
              duration: 1,
              opacity: 0,
              scale: 0.8,
              duration: 1.5,
          }, 0)
          .to(".cont__proyects", {
              ease: "power1.in",
              duration: 1,
              y: "-100%",
              opacity: 1,
              pin: true
          }, 1);
      */


    function distribuirItems() {
        const items = document.querySelectorAll('.orbit__items .orbit__item');
        const total = items.length;

        // Si no hay elementos o sólo hay uno, no se necesita distribuir
        if (total <= 1) return;

        // Calcula el incremento en porcentaje para cada posición.
        const step = 100 / total;

        items.forEach((item, index) => {
            const pos = index * step;
            // Asegúrate de que el elemento tenga posicionamiento absoluto
            item.style.position = 'absolute';
            item.style.top = pos + '%';
            item.style.left = pos + '%';

            // Si el índice es múltiplo de 2 (0, 2, 4, ...) se asigna z-index 1 y dirección positiva (sumando)
            // Si no es múltiplo de 2 (1, 3, 5, ...) se asigna z-index -1 y dirección negativa (restando)
            if (index % 2 === 0) {
                item.style.zIndex = 1;
                item.dataset.direction = 1;
            } else {
                item.style.zIndex = -1;
                item.dataset.direction = -1;
            }
        });

        // Actualiza las posiciones cada 50ms
        setInterval(() => {
            items.forEach(item => {
                let left = parseInt(item.style.left) || 0;
                let top = parseInt(item.style.top) || 0;
                let direction = parseInt(item.dataset.direction) || 1;

                // Se modifican las posiciones según la dirección establecida
                left += direction;
                top += direction;

                // Si se alcanza o excede 100, se fija en 100, se invierte la dirección y se ajusta el z-index
                if (left >= 100 || top >= 100) {
                    left = 100;
                    top = 100;
                    direction = -Math.abs(direction); // aseguramos que sea negativo
                    item.style.zIndex = -1;
                }
                // Si se llega a 0, se fija en 0, se invierte la dirección y se ajusta el z-index
                else if (left <= 0 || top <= 0) {
                    left = 0;
                    top = 0;
                    direction = Math.abs(direction); // aseguramos que sea positivo
                    item.style.zIndex = 1;
                }

                // Actualiza los estilos y la dirección en el atributo de datos
                item.style.left = left + "%";
                item.style.top = top + "%";
                item.dataset.direction = direction;
            });
        }, 50); // 50 ms para animación más fluida
    }

    // Llama a la función cuando se cargue la página
    window.addEventListener('DOMContentLoaded', distribuirItems);

    anime.timeline()
        .add({
            targets: '#svgGroup path',
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 1000,
            easing: 'easeInOutSine'
        })
        .add({
            targets: '#svgGroup path',
            fill: '#d66cec',
            duration: 1000
        }, 1000)
        .add({
            targets: '#svgGroup',
            fill: '#d66cec',
            duration: 1000
        }, 1000)
        .add({
            targets: '#svgGroup',
            stroke: '#d66cec',  // Corregido "stoke" por "stroke"
            duration: 1000
        }, 1000);

});
