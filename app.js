$(document).ready(function() {
    AOS.init({
        duration: 1200,
        once: true,
    });

    // Initialisation du canevas
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas-animation';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Dimensions du canevas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Création des points
    const points = [];
    const pointCount = 50; // Nombre de points
    const maxSpeed = 1;    // Vitesse maximale des points

    for (let i = 0; i < pointCount; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * maxSpeed,
            vy: (Math.random() - 0.5) * maxSpeed,
        });
    }

    // Fonction pour dessiner les points et les lignes
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canevas

        // Dessin des points
        points.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, Math.PI * 2); // Dessiner un point
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        });

        // Dessin des lignes entre les points proches
        for (let i = 0; i < pointCount; i++) {
            for (let j = i + 1; j < pointCount; j++) {
                const distance = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
                    ctx.stroke();
                }
            }
        }

        // Mise à jour des positions des points
        points.forEach(point => {
            point.x += point.vx;
            point.y += point.vy;

            // Rebondir sur les bords
            if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
            if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        });

        requestAnimationFrame(draw); // Boucle d'animation
    }

    draw(); // Lancer l'animation

    // Ajuster la taille du canevas lors du redimensionnement de la fenêtre
    $(window).resize(function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});

// contact : 
$(document).ready(function() {
    // Effet lors de l'envoi du formulaire
    $('form').on('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi traditionnel du formulaire

        // Validation rapide des champs
        let valid = true;
        $('input, textarea').each(function() {
            if ($(this).val() === '') {
                $(this).css('border-color', 'red'); // Colorer les champs non remplis
                valid = false;
            } else {
                $(this).css('border-color', '#ddd'); // Réinitialiser la bordure
            }
        });

        if (valid) {
            // Si tout est valide, afficher un message de succès
            alert('Merci ! Votre message a été envoyé.');
            // Réinitialiser le formulaire
            $('form')[0].reset();
        } else {
            // Si non, informer l'utilisateur de remplir les champs
            alert('Veuillez remplir tous les champs.');
        }
    });
});

// contact : 
AOS.init(); // Initialize AOS library for animations



    // jQuery form submission event
    $(document).ready(function() {
        $("#contactForm").submit(function(event) {
            event.preventDefault(); // Prevent default form submission
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            
            // Basic form validation
            if (name === "" || email === "" || message === "") {
                alert("Veuillez remplir tous les champs.");
            } else {
                // Simulate form submission
                alert("Merci pour votre message, " + name + "!");
                
                // Optionally, you can send the data using AJAX
                /*
                $.ajax({
                    type: "POST",
                    url: "your-server-endpoint",
                    data: {
                        name: name,
                        email: email,
                        message: message
                    },
                    success: function(response) {
                        alert("Message envoyé avec succès!");
                    },
                    error: function() {
                        alert("Erreur d'envoi du message.");
                    }
                });
                */
            }
        });
    });