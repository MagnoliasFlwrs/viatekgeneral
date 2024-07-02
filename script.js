// header logo-svg animation

const animatedLogo = document.querySelector('.animated-svg');
const gradient1 = document.getElementById('paint0_linear_9_64');
const gradient2 = document.getElementById('paint1_linear_9_64');
const gradient3 = document.getElementById('paint2_linear_9_64');


animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-321.393');
    animate.setAttribute('to', '100');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('calcMode', 'linear');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '100');
    animate.setAttribute('to', '-321.393');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('calcMode', 'linear');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-321.393');
    animate.setAttribute('to', '200');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('calcMode', 'linear');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '200');
    animate.setAttribute('to', '-321.393');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('calcMode', 'linear');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-244.556');
    animate.setAttribute('to', '200');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('calcMode', 'linear');
    gradient3.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '200');
    animate.setAttribute('to', '-244.556');
    animate.setAttribute('dur', '1s');
    animate.setAttribute('fill', 'freeze');
    animate.setAttribute('keyTimes', '0;1');
    animate.setAttribute('calcMode', 'linear');
    gradient3.appendChild(animate);
    animate.beginElement();
});




// callback-modal
const overlay = document.querySelector('.overlay')
const showCallbackModalBtns = document.querySelectorAll('.show-callback-modal');
const closeCallbackModalBtn = document.querySelector('.callback-modal .close-btn');
const callbackModal = document.querySelector('.callback-modal');

const showCallbackModal = () => {
    showCallbackModalBtns.forEach(el => {
        el.addEventListener('click' , (e)=> {
            e.preventDefault();
            overlay.classList.add('open');
            callbackModal.classList.add('active');
        })
    })
}
const hideCallbackModal = () => {
    overlay.classList.remove('open');
    callbackModal.classList.remove('active');
}
if (showCallbackModalBtns) {
    showCallbackModal();
    closeCallbackModalBtn?.addEventListener('click' , ()=> {
        hideCallbackModal()
    })
    overlay?.addEventListener('click' , ()=> {
        hideCallbackModal()
    })
}