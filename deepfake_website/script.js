  
<script>
        const demoSelect = document.getElementById('demo-select');
        const demoIframe = document.getElementById('demo-iframe');
        demoSelect.addEventListener('change', () => {
            if (demoSelect.value === 'voice') {
                demoIframe.src = 'https://www.neurify.com/detect-fake-voice/';
            } else if (demoSelect.value === 'text') {
                demoIframe.src = 'https://www.neurify.com/detect-fake-voice/';
            }
        });
</script>