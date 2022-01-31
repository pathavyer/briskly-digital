import EmblaCarousel from 'embla-carousel';

export default function initCarousel() {
    const emblaNode = document.querySelector('.embla');
    const options = { loop: true };

    if (emblaNode) {
        const embla = EmblaCarousel(emblaNode, options);
    }
    
}