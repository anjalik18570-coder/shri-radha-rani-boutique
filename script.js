// ...existing code...

document.addEventListener("DOMContentLoaded", () => {
    // ================================
    // NAVIGATION
    // ================================
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            const text = this.textContent.trim();

            const sections = {
                "Home": ".hero",
                "About Us": ".about-grid",
                "Services": ".services-grid",
                "Designs": ".designs-grid",
                "Price List": ".price-table",
                "Contact": ".contact-box"
            };

            if (sections[text]) {
                const section = document.querySelector(sections[text]);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // ================================
    // VIEW DESIGNS BUTTON
    // ================================
    const viewDesignBtn = document.querySelector(".btn-outline");

    if (viewDesignBtn) {
        viewDesignBtn.addEventListener("click", () => {
            const designs = document.querySelector(".designs-grid");

            if (designs) {
                designs.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // ================================
    // BOOK YOUR ORDER BUTTONS
    // ================================
    const orderButtons = document.querySelectorAll(".btn-order-nav, .btn-primary");

    orderButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            const orderSection = document.querySelector("#order");

            if (orderSection) {
                e.preventDefault();

                orderSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ================================
    // ORDER FORM
    // ================================
    const orderForm = document.querySelector("#order form");

    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = this.querySelector('input[type="text"]');
            const mobileInput = this.querySelector('input[type="tel"]');
            const selects = this.querySelectorAll("select");

            const serviceSelect = selects[0];
            const genderSelect = selects[1];
            const dateInput = this.querySelector('input[type="date"]');
            const detailsInput = this.querySelectorAll('input[type="text"]')[1];

            const name = nameInput.value.trim();
            const mobile = mobileInput.value.trim();
            const service = serviceSelect.value;
            const gender = genderSelect.value;
            const date = dateInput.value;
            const details = detailsInput.value.trim();

            if (name === "") {
                alert("Please enter your name.");
                nameInput.focus();
                return;
            }

            if (mobile === "") {
                alert("Please enter your mobile number.");
                mobileInput.focus();
                return;
            }

            const mobilePattern = /^[6-9][0-9]{9}$/;

            if (!mobilePattern.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                mobileInput.focus();
                return;
            }

            if (service === "-- Select Service --" || service === "") {
                alert("Please select a service.");
                serviceSelect.focus();
                return;
            }

            if (gender === "-- Select Gender --" || gender === "") {
                alert("Please select gender.");
                genderSelect.focus();
                return;
            }

            if (date === "") {
                alert("Please select your preferred date.");
                dateInput.focus();
                return;
            }

            const message =
                `Hello Shri Radha Rani Tailors,%0A%0A` +
                `I want to book an order.%0A%0A` +
                `Name: ${name}%0A` +
                `Mobile: ${mobile}%0A` +
                `Service: ${service}%0A` +
                `Gender: ${gender}%0A` +
                `Preferred Date: ${date}%0A` +
                `Details: ${details || "Not provided"}`;

            const whatsappNumber = "919835546316";
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

            window.open(whatsappURL, "_blank");
        });
    }

    // ========================================
    // WHATSAPP-STYLE DESIGN GALLERY
    // ========================================
    const designCards = Array.from(document.querySelectorAll(".design-card"));
    const galleryImages = designCards.flatMap(card =>
        Array.from(card.querySelectorAll("img"))
    );

    const VISIBLE_IMAGES = 4;

    designCards.forEach((card, index) => {
        const isHidden = index >= VISIBLE_IMAGES;
        card.classList.toggle("gallery-hidden", isHidden);

        if (isHidden) {
            card.setAttribute("aria-hidden", "true");
        } else {
            card.removeAttribute("aria-hidden");
        }
    });

    if (designCards.length > VISIBLE_IMAGES) {
        const remaining = designCards.length - VISIBLE_IMAGES;
        const fourthCard = designCards[VISIBLE_IMAGES - 1];

        let moreOverlay = fourthCard.querySelector(".gallery-more");

        if (!moreOverlay) {
            moreOverlay = document.createElement("div");
            moreOverlay.className = "gallery-more";
            fourthCard.appendChild(moreOverlay);
        }

        moreOverlay.innerHTML = `
            <div>
                <span>+${remaining}</span>
                <small>View all designs</small>
            </div>
        `;

        moreOverlay.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (typeof openGallery === "function") {
                openGallery(VISIBLE_IMAGES);
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // NAVIGATION
    // ================================

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active from all
            navLinks.forEach(item => item.classList.remove("active"));

            // Add active to clicked link
            this.classList.add("active");

            const text = this.textContent.trim();

            const sections = {
                "Home": ".hero",
                "About Us": ".about-grid",
                "Services": ".services-grid",
                "Designs": ".designs-grid",
                "Price List": ".price-table",
                "Contact": ".contact-box"
            };

            if (sections[text]) {
                const section = document.querySelector(sections[text]);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // ================================
    // VIEW DESIGNS BUTTON
    // ================================

    const viewDesignBtn = document.querySelector(".btn-outline");

    if (viewDesignBtn) {
        viewDesignBtn.addEventListener("click", () => {

            const designs = document.querySelector(".designs-grid");

            if (designs) {
                designs.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }


    // ================================
    // BOOK YOUR ORDER BUTTONS
    // ================================

    const orderButtons = document.querySelectorAll(
        ".btn-order-nav, .btn-primary"
    );

    orderButtons.forEach(button => {
        button.addEventListener("click", function (e) {

            const orderSection = document.querySelector("#order");

            if (orderSection) {
                e.preventDefault();

                orderSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ================================
    // ORDER FORM
    // ================================

    const orderForm = document.querySelector("#order form");

    if (orderForm) {

        orderForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const nameInput = this.querySelector(
                'input[type="text"]'
            );

            const mobileInput = this.querySelector(
                'input[type="tel"]'
            );

            const selects = this.querySelectorAll("select");

            const serviceSelect = selects[0];
            const genderSelect = selects[1];

            const dateInput = this.querySelector(
                'input[type="date"]'
            );

            const detailsInput = this.querySelectorAll(
                'input[type="text"]'
            )[1];


            // Get values
            const name = nameInput.value.trim();
            const mobile = mobileInput.value.trim();
            const service = serviceSelect.value;
            const gender = genderSelect.value;
            const date = dateInput.value;
            const details = detailsInput.value.trim();


            // ================================
            // VALIDATION
            // ================================

            if (name === "") {
                alert("Please enter your name.");
                nameInput.focus();
                return;
            }

            if (mobile === "") {
                alert("Please enter your mobile number.");
                mobileInput.focus();
                return;
            }

            // Indian mobile number validation
            const mobilePattern = /^[6-9][0-9]{9}$/;

            if (!mobilePattern.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                mobileInput.focus();
                return;
            }

            if (
                service === "-- Select Service --" ||
                service === ""
            ) {
                alert("Please select a service.");
                serviceSelect.focus();
                return;
            }

            if (
                gender === "-- Select Gender --" ||
                gender === ""
            ) {
                alert("Please select gender.");
                genderSelect.focus();
                return;
            }

            if (date === "") {
                alert("Please select your preferred date.");
                dateInput.focus();
                return;
            }


            // ================================
            // WHATSAPP MESSAGE
            // ================================

            const message =
                `Hello Shri Radha Rani Tailors,%0A%0A` +
                `I want to book an order.%0A%0A` +
                `Name: ${name}%0A` +
                `Mobile: ${mobile}%0A` +
                `Service: ${service}%0A` +
                `Gender: ${gender}%0A` +
                `Preferred Date: ${date}%0A` +
                `Details: ${details || "Not provided"}`;


            // WhatsApp number
            const whatsappNumber = "919835546316";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${message}`;


            // Open WhatsApp
            window.open(
                whatsappURL,
                "_blank"
            );
        });
    }


    // ================================
    // WHATSAPP-STYLE GALLERY VIEWER
    // ================================

    const designImages = Array.from(
        document.querySelectorAll(".design-card img")
    );

    const designCards = Array.from(
        document.querySelectorAll(".design-card")
    );

    const VISIBLE_IMAGES = 4;

    // Show only first 4 images in the WhatsApp-style preview.
    // The remaining images are opened from the +N overlay.
    designCards.forEach((card, index) => {
        if (index >= VISIBLE_IMAGES) {
            card.classList.add("gallery-hidden");
        }
    });

    // Create the +N overlay automatically.
    if (designCards.length > VISIBLE_IMAGES) {

        const remaining = designCards.length - VISIBLE_IMAGES;
        const fourthCard = designCards[VISIBLE_IMAGES - 1];

        const moreOverlay = document.createElement("div");
        moreOverlay.className = "gallery-more";
        moreOverlay.innerHTML = `
            <div>
                <span>+${remaining}</span>
                <small>View all designs</small>
            </div>
        `;

        fourthCard.appendChild(moreOverlay);

        moreOverlay.addEventListener("click", (event) => {
            event.stopPropagation();
            openGallery(VISIBLE_IMAGES);
        });
    }

    function openGallery(startIndex) {

        if (!designImages.length) return;

        let currentIndex = Math.max(
            0,
            Math.min(startIndex, designImages.length - 1)
        );

        const overlay = document.createElement("div");
        overlay.className = "image-modal";

        overlay.innerHTML = `
            <div class="image-modal-content">

                <div class="gallery-topbar">
                    <span class="gallery-counter"></span>
                    <span class="close-modal" aria-label="Close">&times;</span>
                </div>

                <button class="gallery-arrow gallery-prev" aria-label="Previous image">
                    &#10094;
                </button>

                <img class="gallery-main-image" src="" alt="">

                <button class="gallery-arrow gallery-next" aria-label="Next image">
                    &#10095;
                </button>

            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        const mainImage =
            overlay.querySelector(".gallery-main-image");

        const counter =
            overlay.querySelector(".gallery-counter");

        const closeButton =
            overlay.querySelector(".close-modal");

        const prevButton =
            overlay.querySelector(".gallery-prev");

        const nextButton =
            overlay.querySelector(".gallery-next");

        function showImage(index, direction = 0) {

            currentIndex =
                (index + designImages.length) %
                designImages.length;

            const image = designImages[currentIndex];

            mainImage.style.opacity = "0";
            mainImage.style.transform =
                `translateX(${direction * 10}px)`;

            setTimeout(() => {

                mainImage.src = image.src;
                mainImage.alt = image.alt || "Design";

                counter.textContent =
                    `${currentIndex + 1} / ${designImages.length}`;

                requestAnimationFrame(() => {
                    mainImage.style.opacity = "1";
                    mainImage.style.transform = "translateX(0)";
                });

            }, 90);
        }

        function closeGallery() {
            overlay.remove();
            document.body.style.overflow = "";
        }

        function nextImage() {
            showImage(currentIndex + 1, 1);
        }

        function previousImage() {
            showImage(currentIndex - 1, -1);
        }

        closeButton.addEventListener("click", closeGallery);
        nextButton.addEventListener("click", nextImage);
        prevButton.addEventListener("click", previousImage);

        // Close when clicking the dark area.
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeGallery();
            }
        });

        // Keyboard navigation.
        document.addEventListener("keydown", function galleryKeyHandler(event) {

            if (!document.body.contains(overlay)) {
                document.removeEventListener(
                    "keydown",
                    galleryKeyHandler
                );
                return;
            }

            if (event.key === "Escape") closeGallery();
            if (event.key === "ArrowRight") nextImage();
            if (event.key === "ArrowLeft") previousImage();

        });

        // Mobile swipe / desktop mouse drag.
        let touchStartX = 0;
        let touchStartY = 0;

        overlay.addEventListener("touchstart", (event) => {

            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;

        }, { passive: true });

        overlay.addEventListener("touchend", (event) => {

            const touchEndX = event.changedTouches[0].clientX;
            const touchEndY = event.changedTouches[0].clientY;

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            // Only treat a clearly horizontal gesture as a swipe.
            if (
                Math.abs(deltaX) > 50 &&
                Math.abs(deltaX) > Math.abs(deltaY)
            ) {
                if (deltaX < 0) {
                    nextImage();
                } else {
                    previousImage();
                }
            }

        }, { passive: true });

        showImage(currentIndex);
    }

    designImages.forEach((image, index) => {

        image.style.cursor = "pointer";

        image.addEventListener("click", () => {
            openGallery(index);
        });

    });


    // ================================
    // SET MINIMUM ORDER DATE
    // ================================

    const dateInput = document.querySelector(
        '#order input[type="date"]'
    );

    if (dateInput) {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        dateInput.min =
            `${year}-${month}-${day}`;
    }


    // ================================
    // CURRENT YEAR
    // ================================

    const copyright =
        document.querySelector(".copyright-bar");

    if (copyright) {

        copyright.innerHTML =
            copyright.innerHTML.replace(
                "2026",
                new Date().getFullYear()
            );
    }

});