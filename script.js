// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission (demo)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been received. We will contact you soon.');
    this.reset();
});

// ============== SERVICE MODAL FUNCTIONALITY ==============
const modal = document.getElementById('service-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

const serviceDetails = {
    group: {
        title: "Group Loans for Women Entrepreneurs",
        content: `
            <p>Our most popular product designed specifically for groups of 5–10 women entrepreneurs.</p>
            <ul>
                <li>Loan amount: TZS 500,000 – 5,000,000</li>
                <li>Repayment period: 3 – 12 months</li>
                <li>Competitive interest rates</li>
                <li>Training and business support included</li>
                <li>No collateral required for groups</li>
            </ul>
            <p><strong>Ideal for:</strong> Joint businesses, savings groups, and women-led enterprises.</p>
        `
    },
    individual: {
        title: "Individual Loans",
        content: `
            <p>Flexible loans for individuals who want to grow their personal business.</p>
            <ul>
                <li>Loan amount: TZS 100,000 – 500,000</li>
                <li>Repayment: Up to 18 months</li>
                <li>Requires basic collateral or guarantor</li>
                <li>Fast approval process</li>
            </ul>
            <p>Perfect for shop owners, artisans, and small service providers.</p>
        `
    },
    quick: {
        title: "Quick Loans (Mikopo Chap Chap)",
        content: `
            <p>Need money urgently? Get approved in less than 24 hours!</p>
            <ul>
                <li>Loan amount: TZS 100,000 – 500,000</li>
                <li>Repayment: 1 – 3 months</li>
                <li>Minimal documentation</li>
                <li>Higher but transparent interest</li>
            </ul>
            <p>Emergency business capital or unexpected opportunities.</p>
        `
    },
    market: {
        title: "Market Traders & Rural Community Loans",
        content: `
            <p>Special loans tailored for market vendors and people in rural areas.</p>
            <ul>
                <li>Loan amount: TZS 200,000 – 4,000,000</li>
                <li>Flexible repayment schedule</li>
                <li>Field officers visit your location</li>
                <li>Group or individual options available</li>
            </ul>
            <p>Helping farmers, traders, and rural entrepreneurs grow.</p>
        `
    },
    boda: {
        title: "Bodaboda Riders Loans",
        content: `
            <p>Special financing for motorcycle taxi (bodaboda) operators.</p>
            <ul>
                <li>Loan for motorcycle purchase or repair</li>
                <li>Loan amount: TZS 1,000,000 – 8,000,000</li>
                <li>Daily or weekly repayment options</li>
                <li>Insurance package included</li>
            </ul>
            <p>Become a proud owner or upgrade your bike easily.</p>
        `
    }
};

// Open modal when service card is clicked
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceKey = card.getAttribute('data-service');
        const details = serviceDetails[serviceKey];

        if (details) {
            modalBody.innerHTML = `
                <h2>${details.title}</h2>
                ${details.content}
                <br><br>
                <a href="#contact" class="btn primary-btn" style="width:100%; text-align:center; padding:14px;">Apply for this Loan</a>
            `;
            modal.style.display = "flex";
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close when clicking outside the modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});