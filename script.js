class ImageTextSection extends HTMLElement {
  constructor() {
    super();
    // image-text-section--hidden
    this.innerHTML = `
    <section class="image-text-section">
        <img 
            src="image/JustDoIt.jpg" 
            alt="Example Image"
            class="image-text-section__image"
        />
        <div class="image-text-section__content">
            <h1> NIKE - Just Do It</h1>
            <p class="image-text-section__text-initial">
                Nike is one of the most famous sportswear brands in the world. The company was founded in 1964 by Bill Bowerman and Phil Knight.
                Its iconic “swoosh” logo is recognized by people everywhere.
            </p>
            <p class="image-text-section__text-hidden">
                Nike designs high-quality shoes, clothes, and accessories for athletes and everyday customers.
                The brand is also known for its powerful marketing campaigns and famous athletes like Michael Jordan.
            </p>
            <div class="image-text-section__button-wrapper">
                <button class="image-text-section__button">Show more</button>
            </div>
        </div>
    </section>
    `;

    this.section = this.querySelector('.image-text-section');
    this.text = this.querySelector('.image-text-section__text');
    this.toggleBtn = this.querySelector('.image-text-section__button');

    // Toggle text visibility
    this.toggleBtn.addEventListener('click', () => this.toggleText());

    // Observer to show/hide section when in view
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.section.classList.add('image-text-section--visible');
        } else {
          this.section.classList.remove('image-text-section--visible');
        }
      },
      { threshold: 0.4 }
    );
  }

  connectedCallback() {
    this.observer.observe(this);
  }

  toggleText() {
    const hiddenText = this.querySelector('.image-text-section__text-hidden');
    hiddenText.classList.add('image-text-section__text--visible');
    this.toggleBtn.style.display = 'none';
  }

}

customElements.define('image-text-section', ImageTextSection);
