$(document).ready(function() {
    // Create audio element for the song
    const audio = new Audio();
    audio.src = 'sajni_re.mp3'; // You can replace this with your preferred song URL
    audio.preload = 'auto';
    
    $('.envelope').on('click', function() {
        const isOpening = !$(this).hasClass('open');
        $(this).toggleClass('open');
        
        // Play song when opening the envelope
        if (isOpening) {
            // Add visual feedback
            $(this).addClass('playing');
            setTimeout(() => {
                $(this).removeClass('playing');
            }, 500);
            
            audio.currentTime = 0; // Reset to beginning
            audio.play().catch(e => {
                console.log('Audio play failed:', e);
                // Fallback: try to play after user interaction
                document.addEventListener('click', function playAudio() {
                    audio.play().catch(console.log);
                    document.removeEventListener('click', playAudio);
                }, { once: true });
            });
        }
    });
    
    // Dancing bear interaction
    $('.dancing-bear').on('click', function() {
        $(this).addClass('bear-spin');
        setTimeout(() => {
            $(this).removeClass('bear-spin');
        }, 1000);
    });
    
    // Add random emoji movement
    setInterval(function() {
        $('.emoji').each(function() {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            $(this).css({
                'transform': `translate(${randomX}px, ${randomY}px)`
            });
        });
    }, 3000);
    
    /* Commented out code for future reference
    $(document).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', '.open .flap-outside', function() {
        $(this).css({
            'z-index': 0
        });
    });
    */
});