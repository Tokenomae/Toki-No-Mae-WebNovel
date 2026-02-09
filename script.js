// Efeito de seguir o mouse levemente nas bolhas de fundo
document.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.bubble');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    bubbles.forEach((bubble, index) => {
        const speed = (index + 1) * 20;
        bubble.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});