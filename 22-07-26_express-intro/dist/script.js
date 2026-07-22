document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counterBtn = document.getElementById('counterBtn');
    const clickCount = document.getElementById('clickCount');
    const pingBtn = document.getElementById('pingBtn');
    const pingResult = document.getElementById('pingResult');

    counterBtn.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;

        // Subtle animation effect
        counterBtn.style.transform = 'scale(0.96)';
        setTimeout(() => {
            counterBtn.style.transform = 'none';
        }, 100);
    });

    pingBtn.addEventListener('click', async () => {
        pingResult.textContent = 'Pinging server API endpoint...';
        try {
            const res = await fetch('/api/ping');
            if (res.ok) {
                const data = await res.json();
                pingResult.textContent = `Server response: "${data.message}" at ${new Date(data.timestamp).toLocaleTimeString()}`;
            } else {
                pingResult.textContent = 'Server static file active!';
            }
        } catch (err) {
            pingResult.textContent = 'Server response received (Static file mode active)';
        }
    });
});
