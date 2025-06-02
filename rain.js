const rain = document.querySelector('.rain');

function createDrop() {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.style.left = `${Math.random() * 100}%`;
  drop.style.animationDuration = `${0.5 + Math.random()}s`;
  rain.appendChild(drop);
  
  setTimeout(() => {
    drop.remove();
  }, 2000);
}

setInterval(createDrop, 100);

const style = document.createElement('style');
style.innerHTML = `
  .drop {
    position: absolute;
    top: -10px;
    width: 2px;
    height: 15px;
    background: #a8dadc;
    opacity: 0.5;
    animation: fall linear;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);
